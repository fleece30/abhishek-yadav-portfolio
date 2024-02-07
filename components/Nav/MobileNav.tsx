import React from "react";
import Link from "next/link";

interface MobileNavProps {
  status: string;
  isMobileNavOpen: boolean;
  signOut: () => void;
  setIsMobileNavOpen: (newVal: boolean) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({
  status,
  isMobileNavOpen,
  signOut,
  setIsMobileNavOpen,
}) => {
  return (
    <div
      className={`w-screen bg-white md:hidden transition-max-height duration-300 overflow-hidden ${
        isMobileNavOpen ? "max-h-64" : "max-h-0"
      }`}
    >
      <div className="menu-links text-md font-bold">
        <ul
          className="flex flex-col space-y-5 items-center py-8"
          onClick={() => setIsMobileNavOpen(false)}
        >
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
          {/*<li>*/}
          {/*  <Link href={""}>Contact</Link>*/}
          {/*</li>*/}
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

export default MobileNav;
