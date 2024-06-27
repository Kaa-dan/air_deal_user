import OfferBg from "../../assets/home/offer/OfferBG.png";
import Offer1 from "../../assets/home/offer/Offer1.png";
import Offer2 from "../../assets/home/offer/Offer2.png";
import Offer3 from "../../assets/home/offer/Offer3.png";
import Offer4 from "../../assets/home/offer/Offer4.png";
const OfferSection = () => {
  return (
    <div>
      <div className="h-[15vh]  flex   justify-between px-24">
        <div className="flex flex-col items-start gap-4">
          <h2 className="font-semibold text-2xl">Explore places together</h2>
          <h4 className="font-light">
            Discover the latest offers and news and start planning your next
            trip with us.
          </h4>
        </div>

        <div className="flex items-center rounded-lg">
          <div className="border border-blue-500 rounded-md pr-1">
            <select
              className="flex justify-center relative  items-center p-2 outline-none rounded-lg"
              name=""
              id=""
            >
              <option value="Nithin">International</option>
              <option value="Nithin">Domestic</option>
            </select>
          </div>
        </div>
      </div>
      <div
        className="h-[70vh]  flex justify-center items-center gap-6 text-white"
        style={{
          backgroundImage: `url(${OfferBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${Offer1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="h-[85%] w-[20%] rounded-lg flex items-end  "
        >
          <div className="mb-5 px-3 w-full">
            <div className="flex items-end justify-between">
              <div>
                <div className="font-bold text-3xl">Melbourne</div>
                <div className="font-semibold text-sm">
                  An amazing journey
                </div>
              </div>
              <h3 className="font-bold text-2xl">70K</h3>
            </div>

            <button className="w-[92%] text-black bg-white rounded-lg font-semibold p-3 mt-4">
              Book Flight
            </button>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${Offer2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="h-[85%] w-[20%] rounded-lg flex items-end  "
        >
          <div className="mb-5 px-3 w-full">
            <div className="flex items-end justify-between">
              <div>
                <div className="font-bold text-3xl">Paris</div>
                <div className="font-semibold text-sm">
                  A Paris adventure
                </div>
              </div>
              <h3 className="font-bold text-2xl">70K</h3>
            </div>

            <button className="w-[92%] text-black bg-white rounded-lg font-semibold p-3 mt-4">
              Book Flight
            </button>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${Offer3})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="h-[85%] w-[20%] rounded-lg flex items-end  "
        >
          <div className="mb-5 px-3 w-full">
            <div className="flex items-end justify-between">
              <div>
                <div className="font-bold text-3xl">London</div>
                <div className="font-semibold text-sm">
                  London eye adventure
                </div>
              </div>
              <h3 className="font-bold text-2xl">70K</h3>
            </div>

            <button className="w-[92%] text-black bg-white rounded-lg font-semibold p-3 mt-4">
              Book Flight
            </button>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${Offer4})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="h-[85%] w-[20%] rounded-lg flex items-end  "
        >
          <div className="mb-5 px-3 w-full">
            <div className="flex items-end justify-between">
              <div>
                <div className="font-bold text-3xl">Columbia</div>
                <div className="font-semibold text-sm">
                Amazing streets
                </div>
              </div>
              <h3 className="font-bold text-2xl">70K</h3>
            </div>

            <button className="w-[92%] text-black bg-white rounded-lg font-semibold p-3 mt-4">
              Book Flight
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
