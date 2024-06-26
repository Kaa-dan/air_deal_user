import main_logo from "../../assets/home/logo/main_logo.png";

const Header = () => {
  return (
    <div className="flex bg-[#ffffff] h-[13vh] justify-between items-center px-[6vw] ">
      <div className="flex gap-4 items-center ">
        <img src={main_logo} alt="logo" />

        <h3 className="text-[#1F61BC] text-[25px] font-bold">My Air Deal</h3>
      </div>
      <div className="flex gap-6  font-semibold">
        <button>Login</button>
        <button className="h-[55px]  text-white bg-black rounded-lg w-28">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Header;
