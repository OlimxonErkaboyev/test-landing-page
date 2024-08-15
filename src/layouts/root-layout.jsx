import { useLocation } from "react-router-dom";
import AppRoutes from "../routing/app-routes";
import Header from "../apps/components/common/header";
import Footer from "../apps/components/common/footer";

export default function RootLayout() {
  const currentpath = useLocation().pathname;

  return (
    <>
      <div className="flex flex-col justify-between min-h-[100vh]">
        {!currentpath?.startsWith("/error") && <Header />}

        <div className=" min-h-[85vh] mt-[90px]">
          <AppRoutes />
        </div>

        {!currentpath?.startsWith("/error") && <Footer />}
      </div>
    </>
  );
}
