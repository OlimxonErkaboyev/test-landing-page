import React from "react";
import { Hero } from "../../../globals/mock-data/hero";
import { imgFour, imgOne, imgThree, imgTwo } from "../../../assets/images/work";
import Arrow from "../../../assets/images/hero/arrow";

const Work = () => {
  return (
    <section className="container mb-20" id="work">
      <div className="flex flex-col md:flex-row items-center justify-between mb-10">
        <h3 className="text-white font-future font-bold leading-[65px] text-3xl">
          Примеры наших работ
        </h3>
        <p className="text-gray-500  line-clamp-3 max-w-[460px] w-full">
          Мы разрабатываем сложные высоконагруженные проекты, внедряем
          инновационные решения
        </p>
      </div>
      <ul className="flex flex-wrap justify-start items-center gap-2 md:gap-3">
        {Hero.map((item, i) => (
          <li
            className=" text-black hover:bg-text-color border-none cursor-pointer bg-white border rounded-[40px] px-4 py-2"
            key={i}
          >
            {item}
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-between flex-wrap gap-y-6 mt-6
      "
      >
        <li className="relative group">
          <img src={imgOne} alt="Example" />
          <span className="absolute bottom-0 right-0 inline-flex items-center justify-center p-7 bg-black group-hover:bg-[#2f2] rounded-[50%] transition-colors duration-300">
            <Arrow />
          </span>
          <p className="absolute top-8 left-5 text-white font-future text-lg leading-[20px]">
            Текст
          </p>
        </li>
        <li className="relative group">
          <img src={imgTwo} alt="Example" />
          <span className="absolute bottom-0 right-0 inline-flex items-center justify-center p-7 bg-black group-hover:bg-[#2f2] rounded-[50%] transition-colors duration-300">
            <Arrow />
          </span>
          <p className="absolute top-8 left-5 text-white font-future text-lg leading-[20px]">
            Текст
          </p>
        </li>{" "}
        <li className="relative group">
          <img src={imgThree} alt="Example" />
          <span className="absolute bottom-0 right-0 inline-flex items-center justify-center p-7 bg-black group-hover:bg-[#2f2] rounded-[50%] transition-colors duration-300">
            <Arrow />
          </span>
          <p className="absolute top-8 left-5 text-white font-future text-lg leading-[20px]">
            Текст
          </p>
        </li>{" "}
        <li className="relative group">
          <img src={imgFour} alt="Example" />
          <span className="absolute bottom-0 right-0 inline-flex items-center justify-center p-7 bg-black group-hover:bg-[#2f2] rounded-[50%] transition-colors duration-300">
            <Arrow />
          </span>
          <p className="absolute top-8 left-5 text-white font-future text-lg leading-[20px]">
            Текст
          </p>
        </li>
      </ul>
      <div className="flex items-center justify-center mt-16">
        <button className="flex items-center justify-between border-2 border-bg-color bg-text-color outline outline-text-color rounded-[40px] py-3 px-6 gap-4">
          <p className="text-white font-future font-extralight sm:font-light">
            Посмотреть все
          </p>
          <Arrow />
        </button>
      </div>
    </section>
  );
};

export default Work;
