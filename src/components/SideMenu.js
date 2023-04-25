import React from "react";

export default function SideMenu({loadCategory,category}) {
  const links = ["Gaming", "Accessoires", "Chaussures", "Maillot"];

  return (
    <div className="col-sm-2">
      <ul>
        {links.map((link, index) => (
          <li
            key={index}
            onClick={() => loadCategory(index)}
            category={category}
            // className={
            //   category == index && "cursor-pointer"
            // }
            className="cursor-pointer"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}
