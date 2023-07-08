import React from "react";
import HelloCube from "@/components/HelloCube";
import Link from "next/link";

interface LandingProps {}

const Landing: React.FC<LandingProps> = ({}) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:px-64 bg-bg-pink -z-10">
      <HelloCube />
      <div className="flex flex-col space-y-7 px-5 md:px-0 pb-8 md:pb-0">
        <h1 className="text-6xl">
          Hey there, I am <b>Abhishek Yadav</b>
        </h1>
        <h3 className="text-2xl">
          I&apos;m a Software Engineer pursuing my Master&apos;s degree @
          Northeastern University
        </h3>
        <div className="flex flex-col space-y-2">
          <h4 className="-mt-2">
            I write{" "}
            <a href="https://github.com/fleece30" target="_blank">
              <span className="small-link">code</span>
            </a>
            {", "}
            <Link href={"/blog"}>
              <span className="small-link">poems and stories</span>
            </Link>
          </h4>
          <h4 className="-mt-2">
            I document the{" "}
            <Link href={"/blog"}>
              <span className="small-link">beauty</span>
            </Link>
            {" of life"}
          </h4>
          <h4 className="-mt-2">
            I love{" "}
            <a
              href="https://www.goodreads.com/user/show/14215021-abhishek-yadav"
              target="_blank"
            >
              <span className="small-link">reading</span>
            </a>
          </h4>
        </div>
        <div className="flex space-x-3">
          <a href="https://github.com/fleece30" target="_blank">
            <span className="small-link">github</span>
          </a>
          <span>&bull;</span>
          <a
            href="https://www.linkedin.com/in/abhishek-yadav-a56b6385/"
            target="_blank"
          >
            <span className="small-link">linkedin</span>
          </a>
          <span>&bull; </span>
          <a href="https://www.instagram.com/abhishek_yad/" target="_blank">
            <span className="small-link">instagram</span>
          </a>
          <span>&bull; </span>
          <a href="mailto:abhiyad25@gmail.com">
            <span className="small-link">email</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
