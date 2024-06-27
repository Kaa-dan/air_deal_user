import React from "react";
import Select from "react-select";
import { components } from "react-select";
import { RiFlightTakeoffFill, RiFlightLandLine } from "react-icons/ri";
import { FaArrowsAltH } from "react-icons/fa";

const customStyles = {
  control: (provided) => ({
    ...provided,
    display: "flex",
    // alignItems: "center",
    //  justifyContent:"space-between",
    boxShadow: "none",
    padding: "5px",
    // borderRadius: "5px",
    border: "none",

    // width:"165%"
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: "0",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};

const CustomPlaceholder = ({ icon, text }) => (
  <div className="flex items-center w-[200px]  justify-start">
    {/* <div className="text-3xl">{icon}</div> */}
    <span>{text}</span>
  </div>
);

const CustomSelect = ({ options, placeholder, icon }) => (
  <Select
    options={options}
    isClearable={true}
    styles={customStyles}
    placeholder={<CustomPlaceholder icon={icon} text={placeholder} />}
    components={{
      IndicatorSeparator: () => null,
    }}
  />
);

export default CustomSelect;
