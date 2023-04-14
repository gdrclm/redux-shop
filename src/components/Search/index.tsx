/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import debounce from "lodash.debounce";
import { useAppDispatch } from "../../redux/store";

import { setSearchValue } from "../../redux/filter/slice";

export const Search = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = React.useState<string>("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const clear = () => {
    setValue("");
    dispatch(setSearchValue(""));
    inputRef.current?.focus();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/rules-of-hooks
  const UpdateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 100),
    []
  );
  const OnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    UpdateSearchValue(event.target.value);
  };

  return (
    <div className="search">
      <a className="mobile-search" href="">
        <img
          src="https://res.cloudinary.com/sivadass/image/upload/v1494756966/icons/search-green.png"
          alt="search"
        />
      </a>

      <input
        ref={inputRef}
        placeholder="Поиск товара"
        value={value}
        onChange={OnChangeInput}
        className="search-keyword"
      />
      <button className="close-btn" onClick={clear}>
        x
      </button>
    </div>
  );
};
export default Search;
