"use client"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Exo } from 'next/font/google';
import { useState } from 'react';
const exo = Exo({
  variable: "exo",
  subsets: ["latin"],
  weight: "600"
});

const Dropdown = ({ season, activeSeason, handleSeasons }) => {
    const [isOpen, setIsOpen] = useState(false);
  const handleClick = (seasonName, seasonId, e) => {
    e.preventDefault();  // Prevent the default anchor behavior (page jumping to top)
    handleSeasons(seasonName, seasonId); 
    setIsOpen(false);
    
  };
  const handleDropdownToggle = () => {
    setIsOpen(true); // Toggle the dropdown open/close
  };

  return (
    <>
      <Menu as="div" className="relative">
        <div className="w-[200px]">
          <MenuButton 
          onClick={handleDropdownToggle}
          className={`inline-flex w-full justify-between items-center gap-x-1.5 bg-[#f40] h-[42px] cursor-pointer border-none outline-none px-[20px] py-[15px] text-[18px] text-white transform skew-x-[-15deg] uppercase ${exo.className}`}>
            {activeSeason}
            <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-white" />
          </MenuButton>
        </div>

        {isOpen && (
        <MenuItems
            
          transition
          className="w-[200px] absolute left-0 top-10 z-10 mt-2 origin-bottom-right text-white transition-all duration-200 ease-in-out"
        >
          <div className="py-1">
            {season.map((data, i) => (
              <MenuItem key={i}>
                <a
                  href=""
                  onClick={(e) => handleClick(data.cat_name, data.id, e)} // Pass the selected season's details
                  className="flex justify-center items-center h-[42px] px-4 py-2 mb-1 text-sm text-white bg-[#ff7500] hover:bg-[#f40]"
                >
                  {data.cat_name}
                </a>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      )}
      </Menu>
    </>
  );
};

export default Dropdown;
