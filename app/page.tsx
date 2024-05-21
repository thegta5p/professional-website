import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";
import ProfessionalImage from "../public/ProfessionalPhoto.png";

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <Image
          src={ProfessionalImage}
          alt="professionl image"
          width={240}
          height={240}
        />
      </div>
      <div className="mx-auto py-10 max-w-4xl items-center">
        <h1 className="text-2xl font-bold text-center">Isaac Castro</h1>
        <p className="">
          I am a 4th year CS Major at UCR. I like to work in web development.
          Specifially I love creating react websites. Other things I have done
          are smaller programs such as games on unity.
        </p>
      </div>
    </div>
  );
}
