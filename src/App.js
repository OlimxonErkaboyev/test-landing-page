import { useEffect, useState } from "react";
import RootLayout from "./layouts/root-layout";
import Loader from "./apps/elements/loader";
import { API_PATH } from "./globals/constants";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const Login = async () => {
      try {
        const res = await fetch(API_PATH + "api/v1/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: "adminka",
            password: "dedSs@4d@1",
          }),
        });
        const data = await res.json();
        localStorage.setItem("token", data.token);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    Login();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="bg-bg-color">
          <RootLayout />
        </div>
      )}
    </>
  );
}

export default App;
