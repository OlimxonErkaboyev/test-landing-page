import { Route, Routes } from "react-router-dom";
import Home from "../views/home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={"Page not Found"} />
      <Route element={"Page not Found"} />
    </Routes>
  );
}

export default AppRoutes;
