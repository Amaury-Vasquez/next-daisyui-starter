import clsx from "clsx";
import { FC, ReactNode } from "react";
import { useToggle } from "../../hooks";
import Button from "../Button";

export const HORIZONTAL_POSITIONS = {
  left: "dropdown-left",
  right: "dropdown-right",
};

export const VERTICAL_POSITIONS = {
  top: "dropdown-top",
  bottom: "dropdown-bottom",
};

export interface DropdownProps {
  toggleContent: ReactNode;
  menu: ReactNode;
  toggleClassName?: string;
  horizontal?: keyof typeof HORIZONTAL_POSITIONS;
  vertical?: keyof typeof VERTICAL_POSITIONS;
  className?: string;
}

const Dropdown: FC<DropdownProps> = ({
  toggleContent,
  menu,
  toggleClassName,
  horizontal = "left",
  vertical = "bottom",
  className,
}) => {
  const { isActive, toggle } = useToggle();

  return (
    <div
      className={clsx(
        "dropdown",
        HORIZONTAL_POSITIONS[horizontal],
        VERTICAL_POSITIONS[vertical],
        className
      )}
    >
      <Button className={toggleClassName} onClick={toggle}>
        {toggleContent}
      </Button>
      {isActive && menu}
    </div>
  );
};

export default Dropdown;
