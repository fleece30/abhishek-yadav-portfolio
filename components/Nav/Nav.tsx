import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

interface NavProps {
  status: string;
  signOut: () => void;
}

const Nav: React.FC<NavProps> = ({ status, signOut }) => {
  return (
    <div className="menu-links text-md font-bold hidden md:block">
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
  );
};

export default Nav;
