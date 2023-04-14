import React from "react";
import { FC } from "react";

type CategoriesProps = {
  value: number;
  onChangeCategory: (idx: number) => void;
};
const categories = [
  "все",
  " Мясные продукты",
  "Овощные продукты",
  "Воды",
  "Приправы",
  "Замороженные продукты",
  "Фрукты",
];
export const Categories: FC<CategoriesProps> = React.memo(
  ({ value, onChangeCategory }) => {
    return (
      <div className="categories">
        <ul className="category-list">
          {categories.map((categoryName, i) => (
            <li
              key={i}
              onClick={() => onChangeCategory(i)}
              className={value === i ? "active category-item" : ""}
            >
              {categoryName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);
