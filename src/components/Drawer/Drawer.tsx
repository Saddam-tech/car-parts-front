import { useState } from "react";
import styles from "./Drawer.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
function Drawer({ drawer, setDrawer }: drawerProps) {
  const [list] = useState([
    { text: "home", to: "header" },
    { text: "about", to: "about" },
    { text: "projects", to: "resume" },
    { text: "more", to: "testimonial" },
  ]);
  const { t } = useTranslation();
  return (
    <section className={`${styles.main} ${!drawer ? styles.hide : ""}`}>
      <ul>
        {list.map((el, i) => (
          <Link className={styles.list} to={el.to.toUpperCase()} onClick={() => setDrawer((prev: any) => !prev)} key={i}>
            {t(el.text)}
          </Link>
        ))}
      </ul>
    </section>
  );
}

export default Drawer;