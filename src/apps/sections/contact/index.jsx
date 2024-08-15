import React from "react";
import Call from "../../../assets/images/header/call";
import {
  call,
  facebook,
  insta,
  mesto,
  sms,
  tg,
} from "../../../assets/images/contact";

const Contact = () => {
  return (
    <section className="container my-20" id="contact">
      <h2 className="font-future font-extrabold text-black text-[30px] leading-[65px] my-10">
        Контакты
      </h2>
      <div className="flex flex-col items-center gap-y-5 sm:items-stretch sm:gap-x-3 sm:flex-row justify-between">
        <div className="flex items-center w-[460px] sm:w-[940px] h-[530px] ">
          <iframe
            className="rounded-[10px] w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.2103862077647!2d69.33907017933778!3d41.34778063119769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5d2e826dd91%3A0x47b8110b47f46ba4!2sU%20ACADEMY!5e0!3m2!1suz!2s!4v1699893964938!5m2!1suz!2s"
            loading="lazy"
          ></iframe>
        </div>
        <div className="bg-black flex flex-col justify-between rounded-[20px]    p-7 max-w-[460px] w-full">
          <h3 className="font-future font-extrabold text-[30px] leading-[65px] text-white">
            Контакты
          </h3>
          <div className="flex flex-col items-start gap-y-4">
            <div className="flex items-center gap-x-2 ">
              <img src={call} />
              <div className="flex flex-col items-start">
                <span className="text-[#7C7C7C] font-future font-normal text-[14px] leading-[20px]">
                  Номер телефона:
                </span>
                <p className="font-future text-white font-bold text-[20px] leading-[28px]">
                  +998 93 565 32 45
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-2 ">
              <img src={mesto} />
              <div className="flex flex-col items-start">
                <span className="text-[#7C7C7C] font-future font-normal text-[14px] leading-[20px]">
                  Местонахождение:
                </span>
                <p className="font-future text-white font-bold text-[20px] leading-[28px]">
                  Адрес
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-2 ">
              <img src={sms} />
              <div className="flex flex-col items-start">
                <span className="text-[#7C7C7C] font-future font-normal text-[14px] leading-[20px]">
                  Почта:
                </span>
                <p className="font-future text-white font-bold text-[20px] leading-[28px]">
                  roytman@mqail.ru
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start gap-x-4 mb-6">
            <p className="font-future font-bold text-white text-[22px] leading-[28px]">
              Социальные сети:
            </p>
            <ul className="flex items-center gap-x-3">
              <li className="cursor-pointer">
                <a
                  href="https://web.telegram.org"
                  className="flex items-center gap-2 font-future font-semibold "
                >
                  <img src={tg} />
                </a>
              </li>
              <li className="cursor-pointer">
                <a
                  href="https://instagram.org"
                  className="flex items-center gap-2 font-future font-semibold "
                >
                  <img src={insta} />
                </a>
              </li>
              <li className="cursor-pointer">
                <a
                  href="https://facebook.org"
                  className="flex items-center gap-2 font-future font-semibold "
                >
                  <img src={facebook} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
