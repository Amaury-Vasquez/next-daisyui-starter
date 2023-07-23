import { useState } from "react";

export const useToggle = (initialIsActive: boolean = false) => {
  const [isActive, setIsActive] = useState<boolean>(initialIsActive);
  const toggle = () => setIsActive(!isActive);

  return { isActive, toggle };
};
