import React from "react";
import Arrow from "../../../assets/images/hero/arrow";
import { Hero } from "../../../globals/mock-data/hero";
import {
  bg,
  black,
  meeting,
  teaching,
} from "../../../assets/images/hero/index";

const HeroSection = () => {
  return (
    <>
      <section className="container" id="home">
        <div className="mt-10 sm:flex sm:justify-between sm:items-center">
          <h1 className="text-white font-future font-extrabold text-2xl leading-normal sm:text-3xl  lg:text-7xl lg:leading-extra-loose mb-10 md:mb-0 ">
            Ускорьте свой бизнес в{" "}
            <span className=" text-text-color">онлайн пространстве</span>
          </h1>
          <button className="flex items-center justify-between border-2 border-bg-color bg-text-color outline outline-text-color rounded-[40px] px-2 h-16 md:h-[75px] md:px-4 md:gap-4 py-1 gap-2">
            <p className="text-white font-future font-extralight sm:font-light w-[100px]">
              Свяжитесь c нами
            </p>
            <Arrow />
          </button>
        </div>
        <div className=" flex flex-col lg:flex-row justify-between items-center md:items-end mt-16">
          <ul className="flex lg:flex-col flex-wrap mb-5 justify-start md:justify-between items-center lg:items-start gap-2 md:gap-3">
            {Hero.map((item, i) => (
              <li
                className=" text-black cursor-pointer bg-white border rounded-[40px] px-2 py-1"
                key={i}
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-col-reverse gap-y-3  justify-between md:flex-row ">
            <div className="mr-3">
              <img
                className="md:w-[526px] md:h-[251px]"
                src={meeting}
                alt="meeting"
              />
              <div
                className="flex flex-col items-start justify-between py-6 px-10 mt-3"
                style={{
                  backgroundImage: `url(${bg})`,
                  maxWidth: "526px",
                  height: "288px",
                }}
              >
                <div className="flex justify-between">
                  <h3 className="font-future text-white font-semibold leading-7 text-2xl">
                    Ознакомьтесь с нашими экспертами
                  </h3>
                  <Arrow />
                </div>
                <button className="border rounded-[20px] px-5 py-2 text-white">
                  Посмотреть
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                className="md:w-[550px] md:h-[551px]"
                src={teaching}
                alt="teaching"
              />
              <img
                className="absolute hidden md:flex z-10 bottom-[-1px] left-[-1px]"
                src={black}
                alt="teaching"
              />
              <div className="absolute hidden md:flex gap-x-2 md:gap-x-3 lg:gap-x-4  justify-center items-center z-20 bottom-0 md:left-[-18%] lg:left-[-24%] bg-black rounded-[20px] md:w-[233px]  md:h-[137px] lg:min-w-[267px] lg:min-h-[137px]">
                <p className="text-white text-6xl leading-10 font-future font-bold">
                  10+
                </p>
                <span className="text-slate-500 text-xl leading-5 max-w-[54px]  w-full ">
                  На рынке
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
