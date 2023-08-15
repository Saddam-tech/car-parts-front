import { useState } from "react";
import styles from "./Drawer.module.scss";
import { useTranslation } from "react-i18next";
import { useNavigate, Link } from "react-router-dom"
import g_logo from "../../assets/images/g_logo.png";
import ClearIcon from '@mui/icons-material/Clear';
import { navigation } from "../../data/data";
function Drawer({ drawer, setDrawer }: drawerProps) {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState<number>()
  const { t } = useTranslation();
  return (
    <section className={`${styles.main} ${!drawer ? styles.hide : ""}`}>
      <div className={styles["dark-belt"]}>
        <img onClick={() => navigate("/")} src={g_logo} alt="g_logo" />
        <ClearIcon sx={{ color: "#ffffff" }} />
      </div>
      <ul>
        {navigation.map((el, i) => (
          <li className={styles.parent} onClick={() => setActiveIndex(i)} key={i}>
            {el.name}
            <ul className={styles.children}>
              {el?.children.map((_el, _i) => (
                <li key={_i}>{_el.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Drawer;