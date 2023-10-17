export type NavPropsTypes = {
  classes: string;
  menu?: boolean;
  isCloseMenu?: (flag: boolean) => void;
};

export type MenuType<T> = {
  [key: string]: T;
};

export type IconMenuType = {
  route: string;
  icon: string;
};
