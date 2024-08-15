import React, { useEffect } from "react";
import { API_PATH } from "../../../globals/constants";
import { ux } from "../../../assets/images/services/index";

const Services = () => {
  const [services, setServices] = React.useState([]);

  const ACCESS_TOKEN = localStorage.getItem("token");

  useEffect(() => {
    if (ACCESS_TOKEN) {
      const getUsers = async () => {
        try {
          const res = await fetch(API_PATH + "api/v1/service", {
            headers: {
              token: ACCESS_TOKEN,
            },
          });

          const data = await res.json();
          setServices([...data.data]);
        } catch (error) {
          console.log(error.message);
        }
      };
      getUsers();
    }
  }, [ACCESS_TOKEN]);
  return (
    <section
      className="bg-services-bg  mx-auto rounded-[20px] mt-28 py-10"
      id="services"
    >
      <div className="container">
        <div className="">
          <div className="flex flex-col md:flex-row items-center justify-between mb-10">
            <h3 className="text-white font-future font-bold leading-[65px] text-3xl">
              Наши услуги
            </h3>
            <p className="text-gray-500  line-clamp-3 max-w-[460px] w-full">
              Возможность для вас выбрать из широкого спектра предлагаемых нами
              услуг ту, которая наилучшим образом соответствует вашим
              потребностям и целям.
            </p>
          </div>
          <hr className="border-border-color mb-10" />
          <ul className="flex flex-wrap justify-center items-center gap-5">
            {services.map((service) => (
              <li
                className=" flex flex-col justify-between bg-card-bg hover:bg-card-hover-bg max-w-[340px] h-[370px] w-full py-3 px-4"
                key={service._id}
              >
                <h4 className="text-white font-future leading-[60px] text-xl">
                  {service.service_title}
                </h4>
                <hr className="border-border-color hover:border-gray-500 mb-5" />
                <p className="font-future text-gray-400 text-xl leading-5 mb-4">
                  {service.about_service}
                </p>
                <span className="bg-black rounded-[50%] flex items-center justify-center w-[70px] h-[70px]">
                  <img src={API_PATH + service.img} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
