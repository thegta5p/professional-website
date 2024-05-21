import React from "react";
import Image from "next/image";
import { Link } from "@nextui-org/link";
import GitHubLogo from "../public/github-mark.svg";
import LinkedInLogo from "../public/In-White-14@2x.png";
import { MdOutlineMail } from "react-icons/md";

const footer = () => {
  return (
    <footer className="w-full flex flex-row items-center justify-center gap-x-8 py-3">
      <Link
        isExternal
        className=""
        href="https://github.com/thegta5p"
        title="github page"
      >
        <Image src={GitHubLogo} alt="github logo" width={40} height={40} />
      </Link>
      <Link
        isExternal
        className=""
        href="https://www.linkedin.com/in/isaac-castro-9a552a263/"
        title="linkedin page"
      >
        <Image src={LinkedInLogo} alt="linkedin logo" width={40} height={40} />
      </Link>
      <div className="flex flex-row gap-x-4 items-center divide-x-1">
        <MdOutlineMail className="size-6" />
        <p className="text-xs px-2">isaaccastro854@gmail.com</p>
      </div>
    </footer>
  );
};

export default footer;
