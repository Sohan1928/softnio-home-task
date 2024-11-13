import footerImg from "../../../assets/Image/footerImg.jpg";
import { MdAccessTime } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { GoMail } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";
import { MdFacebook } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="mt-12 md:mt-24">
      <div
        className="relative bg-center bg-cover"
        style={{
          backgroundImage: `url(${footerImg})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>

        <div className="items-center md:px-[300px] text-center px-4 py-16 md:py-28 relative">
          <div className="">
            <h1 className="mb-5 text-xl font-bold text-white uppercase md:text-4xl">
              We ready to have you the best dining experiences
            </h1>
            {/* time, phone, email, location section */}
            <div className="items-center justify-between gap-10 mt-16 space-y-12 md:flex md:mt-24">
              {/* no-1 */}
              <div className="flex flex-col items-center md:pt-12">
                <MdAccessTime className="text-[#FEBF00] mb-4 size-8"></MdAccessTime>
                <span className="text-white">
                  <h4 className="mb-4 text-lg font-extrabold uppercase md:text-2xl">
                    Opening Hours
                  </h4>
                  <h5>Monday-Sunday</h5>
                  <p>9.00 AM to 11.30 PM</p>
                </span>
              </div>
              {/* no-2 */}
              <div className="flex flex-col items-center">
                <LuPhoneCall className="text-[#FEBF00] mb-4 size-8"></LuPhoneCall>
                <span className="text-white">
                  <h4 className="mb-4 text-lg font-extrabold uppercase md:text-2xl">
                    Let's Talk
                  </h4>
                  <h5>Phone: 01234567891</h5>
                  <p>Fax: 01234567891</p>
                </span>
              </div>
              {/* no-3 */}
              <div className="flex flex-col items-center">
                <GoMail className="text-[#FEBF00] mb-4 size-8"></GoMail>
                <span className="text-white">
                  <h4 className="mb-4 text-lg font-extrabold uppercase md:text-2xl">
                    Book A Table
                  </h4>
                  <h5>Email: demo@website.com</h5>
                  <p>Support: support@website.com</p>
                </span>
              </div>
              {/* no-4 */}
              <div className="flex flex-col items-center">
                <SlLocationPin className="text-[#FEBF00] mb-4 size-8"></SlLocationPin>
                <span className="text-white">
                  <h4 className="mb-4 text-lg font-extrabold uppercase md:text-2xl">
                    Our Address
                  </h4>
                  <h5>123 Street New York,</h5>
                  <p>United States of America</p>
                </span>
              </div>
            </div>
            <div className="mt-16 md:mt-[120px]">
              <div className="flex items-center justify-center gap-6 text-center 4">
                <MdFacebook className="p-2 text-white border border-white rounded-full size-10 md:size-14"></MdFacebook>
                <FaSquareXTwitter className="p-2 text-white border border-white rounded-full size-10 md:size-14"></FaSquareXTwitter>
                <FaSquareInstagram className="p-2 text-white border border-white rounded-full size-10 md:size-14"></FaSquareInstagram>
                <IoLogoLinkedin className="p-2 text-white border border-white rounded-full size-10 md:size-14"></IoLogoLinkedin>
              </div>
              <span className="flex items-center justify-center mt-6 text-center text-white">
                <FaRegCopyright className="mr-2"></FaRegCopyright>
                <h5>2023 All Right Reserved</h5>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
