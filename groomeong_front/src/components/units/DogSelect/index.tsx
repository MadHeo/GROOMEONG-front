import { UseQueryFetchUserDogs } from "../../commons/hooks/query/UseQueryFetchUserDogs";
import * as S from "./index.styled";

export const DogSelect = (props: any): JSX.Element => {
  const { data: dataDog } = UseQueryFetchUserDogs();

  const dogsArr = [
    dataDog?.fetchUserDogs.map((el) => ({ value: el.name, id: el.id })),
  ];

  const onChange = (value: any, id: any): void => {
    props.setDogId(id.id);
  };

  return (
    <S.SelectStyle
      size="large"
      showSearch
      placeholder="댕댕이를 선택해주세요"
      optionFilterProp="children"
      onChange={onChange}
      options={dogsArr[0]}
    />
  );
};
