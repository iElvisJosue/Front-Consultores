import { useState } from "react";

export default function useMenu() {
  const [menu, setMenu] = useState("CV");

  const changeMenu = (option) => {
    setMenu(option);
  };

  return {
    menu,
    changeMenu,
  };
}
