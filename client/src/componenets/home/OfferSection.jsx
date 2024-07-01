import OfferBg from "../../assets/home/offer/OfferBG.png";
import Offer1 from "../../assets/home/offer/Offer1.png";
// import Offer2 from "../../assets/home/offer/Offer2.png";
// import Offer3 from "../../assets/home/offer/Offer3.png";
// import Offer4 from "../../assets/home/offer/Offer4.png";

const offers =[{img:`${Offer1}`,cntryName:"Melbourne",description:"An amazing journey",amount:"70K"},{img:`${Offer1}`,cntryName:"Melbourne",description:"An amazing journey",amount:"70K"},{img:`${Offer1}`,cntryName:"Melbourne",description:"An amazing journey",amount:"70K"},{img:`${Offer1}`,cntryName:"Melbourne",description:"An amazing journey",amount:"70K"},]
const OfferSection = () => {
  return (
    < div className="h-[100%]  mx-auto max-w-[1900px]">
      <div className="lg:h-[15vh] px-4 flex flex-col md:flex-row
       md:flex leading-[1]   justify-between lg:px-24 max-w-[1900px] mx-auto">
        <div className="flex flex-col items-start gap-4 2xl:gap-6">
          <h2 className="font-semibold text-[1.3rem]  md:text-4xl 2xl:text-[2.2rem]">Explore places together</h2>
          <h4 className="font-light text-sm md:text-lg 2xl:text-2xl">
            Discover the latest offers and news and start planning your next
            trip with us.
          </h4>
        </div>

        <div className="flex items-center rounded-lg w-full md:w-1/4 2xl:h-full">
       
            <select
              className="flex justify-center relative  items-center p-2 w-full  outline-none rounded-lg border border-blue-500 mt-1 font-roboto text-center font-light bg-white 2xl:w-3/4 2xl:p-4" 
              name=""
              id=""
            >
              <option value="Nithin">International</option>
              <option value="Nithin">Domestic</option>
            </select>
         
        </div>
      </div>
      <div
        className="h-[100%]  flex justify-center items-center
         gap-2 sm:gap-4 md:gap-6 text-white flex-wrap mt-4 py-4 sm:px-10  "
        style={{
          backgroundImage: `url(${OfferBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {offers.map((value,index)=> <div
          style={{
            backgroundImage: `url(${Offer1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="h-[40vh] md:w-[30%] xl:h-[60vh] lg:h-[50vh] w-[70%] sm:w-[40%] lg:w-[23%] rounded-lg flex items-end mt-2"
        >
          <div className="mb-5 px-3 w-full">
            <div className="flex items-end justify-between">
              <div>
                <div className="font-bold text-2xl  xl:text-3xl">{value.cntryName}</div>
                <div className="font-semibold text-sm">
                  {value.description}
                </div>
              </div>
              <h3 className="font-bold text-xl xl:text-2xl">{value?.amount}</h3>
            </div>

            <button className="w-[90%] mx-auto text-black bg-white rounded-lg font-semibold p-3 mt-4">
              Book Flight
            </button>
          </div>
        </div>)}
       
    
      </div>
    </div>
  );
};

export default OfferSection;
