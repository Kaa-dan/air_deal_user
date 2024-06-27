import { useState } from "react";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { RiFlightLandLine } from "react-icons/ri";
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineDateRange } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import Select from "react-select";
import DatePicker from "react-datepicker";
import CustomInput from "../util/DatePickerCustom";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { GoArrowSwitch } from "react-icons/go";
import CustomSelect from "../util/CustomSelect";
// Custom styles for react-select
const customStyles = {
  control: (provided) => ({
    ...provided,
    border: "none",
    boxShadow: "none",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  }),
};

const FilterSection = () => {
  const [dummyData, setDummyData] = useState([
    { value: "nithin", label: "nithin" },
    { value: "nithin", label: "nithin" },
    { value: "nithin", label: "nithin" },
    { value: "nithi", label: "nithi" },
  ]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="h-[30vh] w-[85vw] rounded-xl mx-auto shadow-md border border-gray-200 flex flex-col justify-center px-5 gap-4">
      <div className="flex text-white">
        <button className=" bg-[#007EC4] rounded-l-lg p-3">One way</button>
        <button className="bg-[#01324D] p-3">Round trip</button>
        <button className=" bg-[#007EC4] rounded-r-lg p-3">Multi City</button>
      </div>

      <div>
        <h3 className="font-semibold">Where are you flying?</h3>
      </div>

      <div className="flex bg-[#ffffff] gap-4  w-full ">
        <div className="flex gap-4 relative ">
          <div className="flex items-center border rounded p-2 w-[50%] ">
            <CustomSelect
              options={dummyData}
              placeholder="Where From ?"
              icon={<RiFlightTakeoffFill />}
            />
          </div>
          <div className="flex items-center justify-center text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black w-8 h-8 rounded-full">
            <GoArrowSwitch />
          </div>
          <div className="flex items-center border rounded p-2 w-[50%] ">
            <CustomSelect
              options={dummyData}
              placeholder="Where To ?"
              icon={<RiFlightLandLine />}
            />
          </div>
        </div>

        <div className="flex items-center justify-center border  rounded shadow w-[25%] p-3">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            customInput={<CustomInput CustomIcon={MdOutlineDateRange} />}
            dateFormat="dd-MM-yyyy"
          />
          <span className="text-gray-500">|</span>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            customInput={<CustomInput />}
            dateFormat="dd-MM-yyyy"
          />
          <FaTimes
            className="text-gray-500 cursor-pointer"
            onClick={() => {
              // setStartDate(null);
              // setEndDate(null);
            }}
          />
        </div>

        <div className=" w-[25%] flex items-center border rounded-md p-3">
          <div className="text-[4vh] mx-4 ">
            <MdAirlineSeatReclineExtra />
          </div>
          <div className="flex flex-col  mt-[-1.5vh]">
            <h5 className="text-xs font-semibold text-gray-500 ">
              Passenger and Class
            </h5>
            <input
              className="font-bold outline-none"
              type="text"
              value={"19 Passenger |First"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
