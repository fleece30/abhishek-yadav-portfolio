import React, { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Nav from "@/components/Nav/Nav";
import MobileNav from "@/components/Nav/MobileNav";
import { cilHamburgerMenu, cilX } from "@coreui/icons";
import CIcon from "@coreui/icons-react";

interface NavProps {}

const NavContainer: React.FC<NavProps> = ({}) => {
  const { status } = useSession();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div className={`nav text-text-gray flex flex-col`}>
      <div className="w-screen flex justify-around">
        <span className="logo text-xl font-extrabold">
          <Link href={"/"}>abhishek.dev</Link>
        </span>
        <Nav status={status} signOut={signOut} />
        {isMobileNavOpen ? (
          <CIcon
            icon={cilX}
            height={28}
            onClick={handleNavToggle}
            className="md:hidden"
          />
        ) : (
          <CIcon
            icon={cilHamburgerMenu}
            height={28}
            onClick={handleNavToggle}
            className="md:hidden"
          />
        )}
      </div>
      <MobileNav
        status={status}
        signOut={signOut}
        isMobileNavOpen={isMobileNavOpen}
        setIsMobileNavOpen={setIsMobileNavOpen}
      />
    </div>
  );
};

export default NavContainer;
