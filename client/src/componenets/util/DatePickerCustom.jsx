import React, { forwardRef } from "react";

// Custom Input component with forwardRef
const CustomInput = forwardRef(({ value, onClick, CustomIcon }, ref) => (
  <div
    className="flex items-center border-gray-300 rounded p-2 cursor-pointer "
    onClick={onClick}
    ref={ref}
  >
    {CustomIcon ? <CustomIcon className="text-gray-500 mr-2" /> : ""}

    <span>{value}</span>
  </div>
));

export default CustomInput;
