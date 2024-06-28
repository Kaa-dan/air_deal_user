import DeatailAndOfferImage from "../../assets/home/detailsAndOffer/DetailandOffer.png";

import { motion } from "framer-motion";
const DealsAndOffers = () => {
  return (
    <div className="h-[80vh] bg-[#BCE7FF] ">
      <div className="flex flex-col  w-[82%] m-auto h-full ]">
        <div className="h-[20%] flex items-center \">
          <h1 className="text-3xl font-semibold ">Deals & Offers</h1>
        </div>
        <div className="flex h-[80%] justify-between  w-full ">
          <motion.div
            initial={{
              rotate: "0deg",
            }}
            animate={{
              rotate: "360  deg ",
            }}
            className="w-[45%] "
          >
            <img className="rounded-sm" src={DeatailAndOfferImage} alt="" />
          </motion.div>
          <div className="w-[55%] flex flex-col gap-4 py-16 px-10">
            <div>
              <h2 className="font-bold text-xl">Go Air Dubai</h2>
            </div>

            <div>
              <span className="font-light ">
                Treaveling is a unique experience as it's the best way to unplug
                from the pushes and pulls of daily life. It helps us to forget
                about our problems, frustrations and fears at home. During our
                journey, we experience life in different ways. We explore new
                places, cultures, cuisines, traditons and ways of living.
              </span>
            </div>
            <div>
              <button className="text-white bg-[#007EC4] w-[30%] text-sm py-3 rounded-lg mt-4">
                Get the deal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsAndOffers;
