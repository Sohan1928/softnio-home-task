import { Outlet } from "react-router-dom";
import Navbar from "../home/navbar/Navbar";
import Footer from "../home/footer/Footer";

const Root = () => {
  return (
    <div className="md:max-w-[1920px]  mx-auto">
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
