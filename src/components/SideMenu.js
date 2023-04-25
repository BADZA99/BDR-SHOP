import React, { useState } from "react";

export default function SideMenu({loadCategory}) {
  const links = ["Gaming", "Accessoires", "Chaussures", "Maillot"];

  return (
    <div className="col-sm-2">
      <ul>
        {links.map((link, index) => (
          <li key={index} onClick={() => loadCategory(index)} className="cursor-pointer">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}
