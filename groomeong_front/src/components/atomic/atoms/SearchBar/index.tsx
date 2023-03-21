import { InputContent, SearchBox, SearchButton } from "./index.styles";

interface ISearchBarProps {
  sizes: "small" | "medium" | "large";
  placeholder: string;
}

export const SearchBar = (props: ISearchBarProps) => {
  return (
    <>
      <SearchBox sizes={props.sizes}>
        <InputContent sizes={props.sizes} placeholder={props.placeholder} />
        <SearchButton>
          <span>
            <img src="/image/icon-magnify_white.svg" />
          </span>
        </SearchButton>
      </SearchBox>
    </>
  );
};
