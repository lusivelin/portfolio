import { FC, useState } from "react";
import styles from "@/components-styles/Navigation.module.css";
import burgerStyles from "@/components-styles/MenuBurger.module.css";
import { MainLogo, MenuBurger } from "../Icon";
// import { useViewportSize } from "@mantine/hooks";
import DropDown from "../DropDown";
import { useRouter } from "next/router";

const Navigation: FC<NavigationProps> = () => {
  const [selectedItem] = useState("home");
  const router = useRouter();
  // const { width } = useViewportSize();

  // const isTabletSize = width <= 720;

  // const [opened, { open, close }] = useDisclosure(false);

  const list = [
    {
      value: "",
      label: "Home",
    },
    {
      value: "about",
      label: "About",
    },
    {
      value: "blog",
      label: "Blog",
    },
  ];
  return (
    <header className={styles.container}>
      <MainLogo width="96" height="96" />

      <>
        <DropDown
          options={list}
          onChange={(value) => router.push(value.value)}
          defaultOption={list.find((item) => item.value === selectedItem)}
          cover={(open, setOpen) => (
            <button
              className={`${burgerStyles.menu} ${
                open ? burgerStyles.opened : ""
              }`}
              onClick={() => setOpen(!open)}
            >
              <MenuBurger />
            </button>
          )}
        />
        {/* {isTabletSize ? (
          <DropDown
            options={list}
            onChange={(value) => console.log(value?.value)}
            defaultOption={list.find((item) => item.value === selectedItem)}
            cover={(open, setOpen) => (
              <button
                className={`${burgerStyles.menu} ${
                  open ? burgerStyles.opened : ""
                }`}
                onClick={() => setOpen(!open)}
              >
                <MenuBurger />
              </button>
            )}
          />
        ) : (
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
        )} */}
      </>
    </header>
  );
};

export default Navigation;
