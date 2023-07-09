interface children {
  name: string;
  path: string;
}

interface navChildren {
  show: boolean;
  children: children[];
  index: number | null;
  setFunc: Function;
}

interface logo_box_data_type {
  name: string;
  img: string;
}
