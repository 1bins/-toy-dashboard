import React from "react";
import {FlexProps} from "@/types/type";
import clsx from "clsx";

interface BoxProps extends FlexProps {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

export const Box = ({
  direction = "col",
  align,
  justify,
  wrap,
  className,
  children,
  as: Component = "div",
}: BoxProps) => {
  return(
    <Component
      className={clsx(
        'flex',
        direction && `flex-${direction}`,
        align &&`items-${align}`,
        justify && `justify-${justify}`,
        wrap && `flex-${wrap}`,
        className,
      )}
    >
      {children}
    </Component>
  )
}