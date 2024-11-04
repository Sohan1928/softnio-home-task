import { Outlet } from "react-router-dom";
import Navbar from "../home/navbar/Navbar";
import Footer from "../home/footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
