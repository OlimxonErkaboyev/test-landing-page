import React, { useEffect } from "react";
import Carousel from "../../elements/carusel";
import { API_PATH } from "../../../globals/constants";

const Partners = () => {
  const [partners, setPartners] = React.useState([]);

  const ACCESS_TOKEN = localStorage.getItem("token");

  useEffect(() => {
    if (ACCESS_TOKEN) {
      const getUsers = async () => {
        try {
          const res = await fetch(API_PATH + "api/v1/partners", {
            headers: {
              token: ACCESS_TOKEN,
            },
          });

          const data = await res.json();
          setPartners([...data.data]);
        } catch (error) {
          console.log(error.message);
        }
      };
      getUsers();
    }
  }, [ACCESS_TOKEN]);
  return (
    <section className="bg-services-bg  mx-auto rounded-[20px] mt-28 py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <h3 className="text-white font-future font-bold leading-[65px] text-3xl">
            Наши партнеры
          </h3>
          <p className="text-gray-500  line-clamp-3 max-w-[460px] w-full">
            Мы разрабатываем сложные высоконагруженные проекты, внедряем
            инновационные решения
          </p>
        </div>
        <div>
          <Carousel data={partners}>
            {partners.map((partner, i) => {
              return (
                <div className="p-4 flex items-center justify-center" key={i}>
                  <img
                    width={300}
                    height={300}
                    src={API_PATH + partner.img}
                    alt="Slide 1"
                    className="w-full h-auto rounded-[20px]"
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Partners;
