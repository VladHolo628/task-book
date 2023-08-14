export interface ICategoryItem {
  name: string;
  icon: JSX.Element;
}

export interface ISidebarProps {
  toggleOpen: () => void;
  isOpen: boolean;
}
