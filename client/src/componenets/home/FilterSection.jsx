const FilterSection = () => {
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
      <div>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
      <div>
        <select name="Select Fare Type" id=""></select>
        <select name="Select Fare Type" id=""></select>
        <select name="Select Fare Type" id=""></select>
      </div>
    </div>
  );
};

export default FilterSection;
