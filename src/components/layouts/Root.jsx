import { Outlet } from "react-router-dom";
import Footer from "../home/footer/Footer";
import Navbar from "../home/navbar/Navbar";

const Root = () => {
  return (
    <div className="md:max-w-[1920px] mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
