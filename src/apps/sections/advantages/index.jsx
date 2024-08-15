import React from "react";
import { mainImg, miniImg } from "../../../assets/images/advantages";

const Advantages = () => {
  return (
    <section className="container my-20">
      <div className="flex flex-col md:flex-row items-center justify-between mb-10">
        <h3 className="text-white font-future font-bold leading-[65px] text-3xl">
          Наши преимущества
        </h3>
        <p className="text-gray-500  line-clamp-3 max-w-[460px] w-full">
          Наша команда состоит из опытных профессионалов, специализирующихся в
          различных областях
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex  flex-col items-center justify-center lg:flex-row  lg:justify-between gap-8">
          <img className="max-w-[70%] w-full" src={mainImg} />
          <ul className="flex flex-col items-center gap-y-6 justify-between pt-3 pb-12">
            <li className="  bg-black hover:bg-text-color rounded-[30px] py-8 px-5">
              <p className="flex items-center justify-between gap-8 text-white font-future font-bold text-[45px] leading-[65px]">
                300+{" "}
                <span className="font-bold text-xl text-gray-500 w-[222px]">
                  Положительных отзывов
                </span>
              </p>
            </li>
            <li className=" bg-black hover:bg-text-color rounded-[30px] py-8 px-5">
              <p className="flex items-center justify-between gap-8 text-white font-future font-bold text-[45px] leading-[65px]">
                400+{" "}
                <span className="font-bold text-xl text-gray-500 w-[222px]">
                  Законченных проектов
                </span>
              </p>
            </li>
            <li className=" bg-black hover:bg-text-color rounded-[30px] py-8 px-8">
              <p className="flex items-center justify-between gap-8 text-white font-future font-bold text-[45px] leading-[65px]">
                40+{" "}
                <span className="font-bold text-xl text-gray-500 w-[222px]">
                  Компаний с которыми мы сотрудничаем
                </span>
              </p>
            </li>
            <li className=" bg-black hover:bg-text-color rounded-[30px] py-8 px-5">
              <p className="flex items-center justify-between gap-8 text-white font-future font-bold text-[45px] leading-[65px]">
                500+{" "}
                <span className="font-bold text-xl text-gray-500 w-[222px]">
                  Довольных клиентов
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
