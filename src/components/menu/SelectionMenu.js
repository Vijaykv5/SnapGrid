import React from "react";

const SelectionMenu = ({ links, handleSelection }) => {
  return (
    <div className="flex overflow-x-scroll">
      {links.map((value, index) => (
        <button
          key={value.title}
          onClick={() => handleSelection(index)}
          className="text-white bg-violet-500 p-1 px-2 rounded-md ml-3"
        >
          {value.title}
        </button>
      ))}
    </div>
  );
};

export default SelectionMenu;
