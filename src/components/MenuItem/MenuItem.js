import { useState } from "react";
import { menuIconProps } from "./Constant";
import "./Style.css";

export function MenuItem({ menuItem }) {
  let { id, label, childrens = [], selected } = menuItem;
  const [itemSelected, setSelected] = useState(selected);

  let icon = menuIconProps.dot;
  if (childrens.length > 0) {
    icon = itemSelected ? menuIconProps.expend : menuIconProps.hide;
  }

  const handleClick = (e) => {
    e.stopPropagation();
    if (e.target.className === "icon") {
      setSelected((prevState) => !prevState);
    }
  };

  return (
    <li onClick={handleClick} tabIndex={0} key={id}>
      <span className="icon">{icon}</span>
      <a href="#s">{label}</a>
      {childrens.length > 0 && itemSelected && (
        <ul>
          {childrens.map((child) => {
            return <MenuItem key={child.id} menuItem={child} />;
          })}
        </ul>
      )}
    </li>
  );
}
