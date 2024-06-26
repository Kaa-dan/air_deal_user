import BannerImage from "../../assets/home/banner/Banner.png";
const Banner = () => {
  return (
    <div className="relative h-[70vh] ">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src={BannerImage}
        alt="Banner"
      />

      <div className="relative left-[10vw] flex flex-col justify-center  text-white  h-[76%] w-[30%] ">
        <h3 className="text-4xl font-bold leading-[1.3]">
          Make your travel wishlist, we'll do the rest
        </h3>
        <h4 className="text-2xl mt-4">Special offers to suit your plan</h4>
      </div>
    </div>
  );
};

export default Banner;
