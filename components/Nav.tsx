import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

interface NavProps {}

const Nav: React.FC<NavProps> = ({}) => {
  const { status } = useSession();
  return (
    <div
      className={`nav text-text-gray`}
      // style={{ background: isAtTop ? "transparent" : "white" }}
    >
      <span className="logo text-xl font-extrabold">
        <Link href={"/"}>abhishek.dev</Link>
      </span>
      <div className="menu-links text-md font-bold">
        <ul>
          <li>
            {status === "authenticated" && (
              <Link href={"/newpost"}>New blog post</Link>
            )}
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link href={"/projects"}>Projects</Link>
          </li>
          <li>
            <Link href={""}>Contact</Link>
          </li>
          <li>
            {status === "authenticated" && (
              <Link
                href={"/"}
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Logout
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
