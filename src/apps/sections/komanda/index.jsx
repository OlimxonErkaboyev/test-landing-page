import React, { useEffect, useState } from "react";
import Carousel from "../../elements/carusel";
import { API_PATH } from "../../../globals/constants";

const Komanda = () => {
  const [users, setUsers] = useState([]);
  const ACCESS_TOKEN = localStorage.getItem("token");

  useEffect(() => {
    if (ACCESS_TOKEN) {
      const getUsers = async () => {
        try {
          const res = await fetch(API_PATH + "api/v1/staff", {
            headers: {
              token: ACCESS_TOKEN,
            },
          });

          const data = await res.json();
          setUsers(data.data);
        } catch (error) {
          console.log(error.message);
        }
      };
      getUsers();
    }
  }, [ACCESS_TOKEN]);
  return (
    <section className="container my-20" id="komanda">
      <div>
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <h3 className="text-black font-future font-bold leading-[65px] text-3xl">
            Наша команда
          </h3>
          <p className="text-gray-500  line-clamp-3 max-w-[460px] w-full">
            Наша команда состоит из опытных профессионалов, специализирующихся в
            различных областях
          </p>
        </div>
        <Carousel>
          {users.map((user) => (
            <div
              className="group bg-black hover:bg-text-color block flex-col items-center justify-evenly w-[300px] h-[345px] rounded-[30px]"
              key={user._id}
            >
              <img
                className="rounded-[50%] w-[160px] "
                src={API_PATH + user.img}
                alt={user.staff_first_name}
              />
              <div className="flex flex-col items-center gap-y-2">
                <h4 className="opacity-0 group-hover:opacity-100  font-future font-normal text-white text-base">
                  {user.staff_first_name + " " + user.staff_last_name}
                </h4>
                <h4 className="font-future font-normal text-[#AE88FF] text-base">
                  UI/UX Designer
                </h4>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Komanda;
