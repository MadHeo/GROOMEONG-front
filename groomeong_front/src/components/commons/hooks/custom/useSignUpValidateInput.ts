/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { useSetAuthInterval } from "./useSetAuthInterval";
import {
  ChangeEvent,
  Dispatch,
  RefObject,
  SetStateAction,
  useRef,
  useState,
} from "react";
import { useFormContext } from "react-hook-form";
import { UseMutationCheckValidToken } from "../mutation/UseMutationCheckValidToken";
import { UseMutationGetTokenEmail } from "../mutation/UseMutationGetTokenEmail";
interface IValidation {
  authNumber: string;
  emailToken: string;
  emailAuth: boolean;
  valid: boolean;
  error: string;
}

interface IuseSignUpValidateInput {
  onClickEmailAuth: () => Promise<void>;
  onChangeAuthNumber: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickAuthValidate: () => Promise<void>;
  validation: IValidation;
  setValidation: Dispatch<SetStateAction<IValidation>>;
  validationInput: RefObject<HTMLInputElement>;
  time: number;
}
export const useSignUpValidateInput = (
  setValid: Dispatch<SetStateAction<boolean>>
): IuseSignUpValidateInput => {
  const { clearIntervalId, setIntervalHooks, time } = useSetAuthInterval();
  const validationInput = useRef<HTMLInputElement>(null);
  const [getTokenEmail] = UseMutationGetTokenEmail();
  const [checkValidToken] = UseMutationCheckValidToken();
  const { getValues, watch } = useFormContext();
  const [validation, setValidation] = useState<IValidation>({
    authNumber: "",
    emailToken: "",
    emailAuth: false,
    valid: false,
    error: "",
  });
  watch("email");
  const email = getValues("email");

  // mutation 으로 검증 되면.. 밑의 if 조건문 작동
  const onClickEmailAuth = async (): Promise<void> => {
    if (email.includes("@")) {
      const result = await getTokenEmail({
        variables: {
          email,
        },
      });
      console.log(result);
      setValidation((prev: IValidation) => ({
        ...prev,
        emailAuth: true,
        emailToken: String(result.data?.getTokenEmail),
      }));
      setIntervalHooks();
    } else if (email === "") {
      setValidation((prev: IValidation) => ({
        ...prev,
        error: "잘못된 이메일형식 입니다.",
      }));
    } else {
      setValidation((prev: IValidation) => ({
        ...prev,
        error: "중복된 이메일 입니다.",
      }));
    }
  };

  const onChangeAuthNumber = (e: ChangeEvent<HTMLInputElement>): void => {
    setValidation((prev: IValidation) => ({
      ...prev,
      authNumber: e.target.value,
    }));
  };

  const onClickAuthValidate = async (): Promise<void> => {
    if (validation.authNumber === validation.emailToken) {
      await checkValidToken({
        variables: {
          email,
          token: validation.emailToken,
        },
      });
      setValid(true);
      setValidation((prev: IValidation) => ({
        ...prev,
        valid: true,
        error: "",
      }));
      clearInterval(clearIntervalId as NodeJS.Timer);
    } else {
      setValidation((prev: IValidation) => ({
        ...prev,
        valid: false,
        error: "인증번호가 다릅니다.",
      }));
      setValid(false);
      clearInterval(clearIntervalId as NodeJS.Timer);
    }
  };

  return {
    onClickEmailAuth,
    onChangeAuthNumber,
    onClickAuthValidate,
    validation,
    setValidation,
    validationInput,
    time,
  };
};
