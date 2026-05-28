"use client";

import Link from "next/link";
//
export default function NavLink(props: any) {
  return (
    // Creates a clickable navigation link
    <Link
      // Applies text, styling and destination from the parent component [Navbar]
      className={props.className}
      href={props.path}
    >
      {props.text}
    </Link>
  );
}
