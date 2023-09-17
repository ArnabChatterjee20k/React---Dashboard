import React from "react";

type AuthProps<T extends React.ElementType> = {
  as?: T;
  children?: React.ReactNode;
};

export default function Auth<T extends React.ElementType>({
  as,
  children,
  ...props
}: AuthProps<T> & React.ComponentPropsWithoutRef<T>) {
  const Component = as || "div";
  return <Component className="bg-white" {...props}>{children}</Component>;
}
