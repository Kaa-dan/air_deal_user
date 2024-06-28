import contactMain from "../../assets/home/contact/contactMain.png";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

import background from "../../assets/home/contact/svg/background.svg";
const Contact = () => {
  return (
    <div className="h-[100vh] bg-[#0A2945] ">
      <div className="flex px-10">
        <div
          className="w-[50%] flex items-center justify-center"
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "90%",
            backgroundPositionX: "25%",
          }}
        >
          <img src={contactMain} alt="" />
        </div>
        <div className="w-[46%] flex flex-col justify-center ">
          <div className=" my-10">
            <h1 className="text-white text-3xl font-bold">
              Let us know how we can help you!
            </h1>
          </div>
          <div className="w-[90%]">
            <div className="  p-4 rounded-lg flex items-start space-x-4 ">
              <div className="flex-shrink-0  p-4 rounded-full bg-white">
                <IoCallOutline className="text-blue-900 " size={24} />
              </div>
              <div className="pb-6 w-full  border-b-2">
                <div className="flex flex-col gap-3 w-1/2">
                  <span className="text-white text-lg font-semibold">
                    Phone
                  </span>
                  <span className="text-white">+61 234-5678 910</span>
                  <button className="mt-2 bg-transparent border border-white w-1/2 text-white py-1 px-3 rounded-full ">
                    CALL
                  </button>
                </div>
              </div>
            </div>
            <div className="  p-4 rounded-lg flex  space-x-4 items-start">
              <div className="flex-shrink-0  p-4 rounded-full bg-white ">
                <CiLocationOn className="text-blue-900 " size={24} />
              </div>
              <div className="pb-6 w-full  border-b-2">
                <div className="flex flex-col gap-2 w-1/2">
                  <span className="text-white text-lg font-semibold">
                    Office
                  </span>
                  <span className="text-white">
                    6391 Elgin ST, celine Delaware 10299
                  </span>
                  <button className="mt-2 bg-transparent border border-white w-1/2 text-white py-1 px-3 rounded-full ">
                    LOCATION
                  </button>
                </div>
              </div>
            </div>
            <div className="  p-4 rounded-lg flex items-start space-x-4 ">
              <div className="flex-shrink-0  p-4 rounded-full bg-white">
                <CiMail className="text-blue-900 " size={24} />
              </div>
              <div className="pb-6 w-full  ">
                <div className="flex flex-col gap-3 w-1/2">
                  <span className="text-white text-lg font-semibold">
                    Email
                  </span>
                  <span className="text-white">support@qulaly.com</span>
                  <button className="mt-2 bg-transparent border border-white w-1/2 text-white py-1 px-3 rounded-full ">
                    CONTACT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
