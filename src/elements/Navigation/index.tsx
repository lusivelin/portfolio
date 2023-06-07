import { FC, useState } from "react";
import styles from "@/components-styles/Navigation.module.css";
import { MainLogo } from "../Icon";

const Navigation: FC<NavigationProps> = () => {
  const [selectedItem, setSelectedItem] = useState("home");

  const list = [
    {
      value: "home",
      label: "Home",
    },
    {
      value: "about",
      label: "About me",
    },
    {
      value: "projects",
      label: "Projects",
    },
  ];
  return (
    <header className={styles.container}>
      <MainLogo width="96" height="96" />
      <nav className={styles.nav}>
        <ul>
          {list.map((item, index) => (
            <li
              onClick={() => setSelectedItem(item.value)}
              className={
                selectedItem === item.value
                  ? styles.selected
                  : styles.notSelected
              }
              key={`nav-item-${index}`}
            >
              <a href="#">{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
