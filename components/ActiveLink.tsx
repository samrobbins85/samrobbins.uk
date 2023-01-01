import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";

const ActiveLink = ({ children, activeClassName, className, ...props }) => {
  const { asPath } = useRouter();
  let newClassName;
  if (props.href === "/") {
    newClassName =
      asPath === props.href || asPath === props.as
        ? `${className} ${activeClassName}`.trim()
        : className;
  } else {
    newClassName =
      asPath.startsWith(props.href) || asPath.startsWith(props.as)
        ? `${className} ${activeClassName}`.trim()
        : className;
  }

  return (
    <Link href={props.href} className={newClassName} {...props}>
      {children}
    </Link>
  );
};

export default ActiveLink;
