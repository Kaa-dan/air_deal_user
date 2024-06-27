import Detail1 from "../../assets/home/detail/Detail1.png";
import Detail2 from "../../assets/home/detail/Detail2.png";
import Detail3 from "../../assets/home/detail/Detail3.png";
import Detail4 from "../../assets/home/detail/Detail4.png";
const Detail = () => {
  return (
    <div className="h-[100vh] ">
      <div className="h-[30%] w-[85%] m-auto  flex justify-center  gap-4 flex-col">
        <h2 className="font-semibold text-4xl">Fall into travel</h2>
        <h4 className="font-light ">
          Going somewhere to celebrate this season? Whether you're going home or
          somewhere to roam, we've got the travel tools to get you to your
          destination.
        </h4>
      </div>

      <div className="h-[60%]  grid grid-cols-7 gap-x-5 gap-y-5 w-[85%] m-auto">
        <div className="bg-black h-full rounded-lg col-span-3 row-span-2">
          <div className=" text-white flex flex-col justify-between  h-[90%] p-3">
            <div className="flex justify-between">
              <div className="font-bold text-4xl">Backpacking Sri Lanka</div>
              <div className="text-black bg-white  font-bold text-xl rounded-lg h-3/4 text-center m-auto">
                From 7000/-
              </div>
            </div>
            <div>
              <span className="text-xl">
                Traveling is a unique experience as it's the best way to unplug
                from the pushes and pulls of daily life. It helps us to forget
                abour our problems, frunstrations, and fears at home. During our
                journey, we experience life in different ways. We explore new
                places, cultures, cuisines, traditions, and ways of living.
              </span>
            </div>
            <button className="bg-white text-black font-bold p-3 rounded-lg mb-[-23px]">
              Book Flight
            </button>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${Detail1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className=" rounded-lg col-span-2"
        ></div>
        <div
          style={{
            backgroundImage: `url(${Detail2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className=" rounded-lg col-span-2"
        ></div>
        <div
          style={{
            backgroundImage: `url(${Detail3})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className=" rounded-lg col-span-2"
        ></div>
        <div
          style={{
            backgroundImage: `url(${Detail4})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className=" rounded-lg col-span-2"
        ></div>
      </div>
    </div>
  );
};

export default Detail;
