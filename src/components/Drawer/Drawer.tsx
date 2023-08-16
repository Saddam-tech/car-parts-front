import { useState } from "react";
import styles from "./Drawer.module.scss";
import { useTranslation } from "react-i18next";
import { useNavigate, } from "react-router-dom"
import { useDispatch } from "react-redux";
import g_logo from "../../assets/images/g_logo.png";
import ClearIcon from '@mui/icons-material/Clear';
import { navigation } from "../../data/data";
import { setActiveIndex, setSubActiveIndex } from "../../store/main";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function Drawer({ drawer, setDrawer }: drawerProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeIndexObj, setActiveIndexObj] = useState<any>({ 0: false, 1: false, 2: false, 3: false });
  const { t } = useTranslation();
  function handleDropdown(index: number) {
    setActiveIndexObj((prev: any) => ({ ...prev, [index]: !activeIndexObj[index] }));
  }
  function handleNavigate(path: string, el: activeIndex, child: sub_active_path) {
    dispatch(setActiveIndex(el))
    dispatch(setSubActiveIndex(child))
    navigate(path.toUpperCase());
    setDrawer(false)
  }
  return (
    <section className={`${styles.main} ${!drawer ? styles.hide : ""}`}>
      <div className={styles["dark-belt"]}>
        <img onClick={() => navigate("/")} src={g_logo} alt="g_logo" />
        <ClearIcon onClick={() => setDrawer(false)} sx={{ color: "#ffffff" }} />
      </div>
      <ul>
        {navigation.map((el, i): any => (
          <li className={styles.parent} key={i}>
            <div onClick={() => handleDropdown(i)} className={styles["line-wrap"]}>
              <p>{el.name}</p>
              {activeIndexObj[i] ? <ExpandLessIcon sx={{ color: "#dbdbdb" }} /> : <ExpandMoreIcon sx={{ color: "#dbdbdb" }} />}
            </div>
            <ul className={`${styles.child} ${activeIndexObj[i] && styles.show}`}>
              {el?.children.map((_el, _i) => (
                <li onClick={() => handleNavigate(_el.path, el, _el)} key={_i}>{_el.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Drawer;