import React from "react";
import Arrow from "../../../assets/images/hero/arrow";

const Callback = () => {
  return (
    <section className="bg-services-bg  mx-auto rounded-[20px] mt-28 py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <h3 className="text-white font-future font-bold leading-[65px] text-3xl">
            Обратный звонок
          </h3>
          <p className="text-gray-500  line-clamp-3 max-w-[460px] w-full">
            Оставьте свои контактные данные и мы свяжемся с вами в ближайшее
            время
          </p>
        </div>
        <div>
          <form className="flex flex-col items-start lg:flex-row lg:items-end justify-center gap-3 ">
            <label className="flex flex-col items-start text-white">
              Имя
              <input
                className="rounded-[20px] py-3 ps-3 mt-2 w-[350px] sm:w-[450px] bg-bg-color text-white"
                type="name"
              />
            </label>
            <label className="flex flex-col items-start text-white">
              Номер телефона
              <input
                className="rounded-[20px] py-3 mt-2 w-[350px] sm:w-[450px] ps-3  text-white  bg-bg-color"
                type="tel"
              />
            </label>
            <button
              className="flex items-center justify-between border-2 border-bg-color bg-text-color outline outline-text-color rounded-[40px] py-2 px-6 gap-4"
              type="submit"
            >
              <p className="text-white font-future font-extralight sm:font-light">
                Посмотреть все
              </p>
              <Arrow />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Callback;
