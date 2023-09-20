import React from 'react';

const SelectionMenu = ({ links, handleSelection }) => {
  return (
    <div className="flex overflow-x-scroll menu-container">
      {links.map((value) => (
        <button
          key={value.title}
          onClick={() => handleSelection(value.title)}
          className="text-white bg-violet-500 p-1 px-2 rounded-md ml-3"
        >
          {value.title}
        </button>
      ))}
    </div>
  );
};

export default SelectionMenu;
