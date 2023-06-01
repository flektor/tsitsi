import Link from "next/link";
import React from "react";

export default function Navigation({ children }) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href={"/"}>Spotlight</Link>
            <Link href={"/art-pieces/"}>Pieces</Link>
            <Link href={"/favorites"}>Favorites</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
