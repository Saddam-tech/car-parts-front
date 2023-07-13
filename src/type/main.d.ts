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
