import React, { FC } from "react";

import { setSort } from "../redux/slices/filterSlice";
import { SortPropertyEnum } from "../redux/filter/types";
import { useAppDispatch } from "../redux/store";

type ListItem = {
  name: string;
  sortProperty: SortPropertyEnum;
};

type PopupClick = MouseEvent & {
  path: Node[];
};

type SortPopupProps = {
  value: ListItem;
};

export const sortList = [
  { name: "имени(Desc)", sortProperty: SortPropertyEnum.NAME_DESC },
  { name: "имени(Asc)", sortProperty: SortPropertyEnum.NAME_ASC },
  {
    name: "цене(Desc)",
    sortProperty: SortPropertyEnum.PRICE_DESC,
  },
  {
    name: "цене(Asc)",
    sortProperty: SortPropertyEnum.PRICE_ASC,
  },
  {
    name: "ккал(Desc)",
    sortProperty: SortPropertyEnum.KKAL_DESC,
  },
  {
    name: "ккал(Asc)",
    sortProperty: SortPropertyEnum.KKAL_ASC,
  },
  {
    name: "сроку годности(Desc)",
    sortProperty: SortPropertyEnum.EXPIRATIONDATE_DESC,
  },
  {
    name: "сроку годности(Asc)",
    sortProperty: SortPropertyEnum.EXPIRATIONDATE_ASC,
  },
];

export const Sort: FC<SortPopupProps> = React.memo(({ value }) => {
  const dispatch = useAppDispatch();
  const sortRef = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const onClickListItem = (obj: ListItem) => {
    dispatch(setSort(obj));
    setIsVisible(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as PopupClick;

      if (sortRef.current && !_event.path.includes(sortRef.current)) {
        setIsVisible(false);
      }
      document.body.addEventListener("click", handleClickOutside);
      return () =>
        document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={sortRef} className="sort_cont">
      <span>сортировать по</span>
      <button onClick={() => setIsVisible(!isVisible)}>{value.name}</button>

      {isVisible && (
        <div className="sort_popup">
          <ul>
            {sortList.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                className={
                  value.sortProperty === obj.sortProperty ? "active" : ""
                }
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default Sort;
