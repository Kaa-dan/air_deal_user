import { useState } from "react";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { RiFlightLandLine } from "react-icons/ri";
import { MdOutlineDateRange } from "react-icons/md";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "./style.css";
import "react-datepicker/dist/react-datepicker.css";
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
  return (
    <div className="h-[30vh] w-[85vw] rounded-xl mx-auto shadow-md border border-gray-200 flex flex-col justify-center pl-9 gap-4">
      <div className="flex text-white">
        <button className=" bg-[#007EC4] rounded-l-lg p-3">One way</button>
        <button className="bg-[#01324D] p-3">Round trip</button>
        <button className=" bg-[#007EC4] rounded-r-lg p-3">Multi City</button>
      </div>

      <div>
        <h3 className="font-semibold">Where are you flying?</h3>
      </div>
      <div className="flex">
        <div className="flex  gap-4">
          <div className="flex items-center text-gray-500 border border-black p-4 rounded-md  ">
            <RiFlightTakeoffFill />
            <Select
              isClearable={true}
              options={dummyData}
              placeholder="Where From ?"
              styles={customStyles}
            />
          </div>
          <div className="flex items-center text-gray-500 border  border-black p-4 rounded-md">
            <RiFlightLandLine />
            <Select
              isClearable={true}
              options={dummyData}
              placeholder="Where To ?"
              styles={customStyles}
            />
          </div>
        </div>
        <div className="flex w-1/4">
          <div>
            <DatePicker
            
              selected={startDate}
              onChange={(date) => setDummyData(date)}
              minDate={new Date()}
              customInput={<CustomDatePickerInput />}
              className="custom-datepicker"
              calendarClassName="custom-datepicker-calendar"
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const CustomDatePickerInput = ({ value, onClick }) => (
  <div className="custom-datepicker-input">
    <span className="custom-datepicker-icon">
      {/* <MdOutlineDateRange /> */}
    </span>
    <input
      type="text"
      value={value}
      onClick={onClick}
      className="custom-datepicker-input-field"
      readOnly
    />
  </div>
);

export default FilterSection;
