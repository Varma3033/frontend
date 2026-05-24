"use client";

import Link from "next/link";
//
export default function NavLink(props: any) {
 
  return (
    //when on corresponding section, the opacity of navbar link is 100%, otherwise it is 50% and on hover it becomes 75%
    <Link className={props.className} href={props.path}>
      {props.text}
    </Link>
  );
}