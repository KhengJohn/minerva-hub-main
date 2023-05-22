import { LinkButton } from "@components/general/Button";
import Image from "next/image";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="bg-hero bg-center bg-cover py-24">
      <div className="flex flex-col lg:flex-row container pt-10 gap-y-24 gap-x-14 pb-32 sm:px-10 2xl:px-0">
        <div className="basis-5/12 mt-5 lg:mt-44">
          <h1 className="font-bold text-black text-6xl font-sans">
            Building A World Full Of Solutions
          </h1>
          <p className="text-[#64607D] text-xl my-5">
            At Minerva Hub we think of possibilities. We see challenges as an
            opportunity to invent solutions that caters to the needs of our
            customers.
          </p>
          <div className="flex mt-10 gap-x-6 sm:gap-x-10 flex-wrap gap-y-6 justify-center lg:justify-start">
            <LinkButton
              link="/contact"
              className="bg-blue text-white rounded-full px-8 font-bold text-base py-3"
            >
              Get Started
            </LinkButton>
            <LinkButton
              link="/about"
              className=" text-gray-900 font-bold text-base flex gap-x-4 justify-center align-middle"
            >
              <img
                src="/img/home/video.svg"
                alt="video-icon"
                className="w-[30%]"
              />
              <p className="font-bold text-gray-900 my-3">Learn More</p>
            </LinkButton>
          </div>
        </div>
        <div className="basis-7/12" data-aos="zoom-in">
          <Image
            src="/img/home/header.png"
            alt="transction"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
