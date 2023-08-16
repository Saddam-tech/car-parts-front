interface drawerProps {
  drawer: boolean;
  setDrawer: Function;
}

interface children {
  name: string;
  path: string;
}

interface activeIndex {
  name: string;
  children: children[];
}

interface navChildren {
  activeIndex: activeIndex;
  show: boolean;
  children: children[];
  index: number | null;
  setFunc: Function;
}

interface logo_box_data_type {
  name: string;
  img: string;
}

interface box_info {
  header?: string;
  content?: string;
  img_src?: string;
}
interface product_info {
  name: string;
  img_src: string;
}

interface kakao_positions {
  posX: string;
  posY: string;
}

interface product_list {
  products: string[];
  path: string;
}

interface sub_active_path {
  name: string;
  path: string;
}
interface active_path {
  name: string;
  children: sub_active_path[];
}

interface BackdropProps {
  close: Function;
  children: any;
}
