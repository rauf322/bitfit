type IconComponentType = React.ElementType<{ className?: string }>;

export type InteractiveMenuItem = {
  label: string;
  icon: IconComponentType;
};

export type InteractiveMenuProps = {
  items: InteractiveMenuItem[];
  accentColor: string;
};
