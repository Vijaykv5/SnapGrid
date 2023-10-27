import React, { useState } from 'react';

interface SelectionMenuProps {
  links: { title: string }[];
  handleSelection: (index: number) => void;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}

const SelectionMenu: React.FC<SelectionMenuProps> = ({
  links,
  handleSelection,
  active,
  setActive,
}) => {
  return (
    <div className='hide-scrollbar flex md:justify-center  md:overflow-x-hidden menu-container flex-wrap'>
      {links.map((value, index) => (
        <button
          key={value.title}
          onClick={() => {
            handleSelection(index);
            setActive((active) => (active = index));
          }}
          className={`my-2 text-white bg-violet-500 p-1 px-2 rounded-md dark:bg-transparent dark:text-violet-300 dark:border-2 dark:border-violet-500 hover:dark:bg-violet-500 hover:dark:text-white ${
            active === index ? 'dark:bg-violet-500 dark:text-white' : ''
          } ${index !== 0 ? 'ml-3' : ''}`}
        >
          {value.title}
        </button>
      ))}
    </div>
  );
};

export default SelectionMenu;
