import { useEffect, useState } from "react";
import { fetchData } from "./Api";
import { MenuItem } from "./../MenuItem";

export function MenuList() {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    (async () => {
      let apiData = await fetchData();
      setMenuData(apiData);
    })();
  }, []);

  return (
    <div data-testid="menu-list" className="menuList-container">
      <ul>
        {menuData.map((item) => {
          return <MenuItem key={item.id} menuItem={item} />;
        })}
      </ul>
    </div>
  );
}
