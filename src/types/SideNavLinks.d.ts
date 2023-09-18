import React from "react";
import { FaBeer } from "react-icons/fa";
import { IconBaseProps } from "react-icons";
export type SideNavLinks = {
  link: string;
  label: string;
  Icon: (props: IconBaseProps) => React.ReactNode;
};
