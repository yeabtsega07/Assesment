import React from "react";
import Image from "next/image";

interface SearchBarProps {
    searchIconSrc: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchIconSrc, onChange }) => {
    return (
        <div className="flex items-center h-16 mx-20 my-10 shadow-xl rounded-xl">
            <Image className="ml-4 w-auto h-auto" src={"/searchIcon.svg"} alt="search" height={24} width={24} />
            <input
                className="flex-grow px-4 py-2 outline-none text-black"
                type="text"
                placeholder="Search..."
                onChange={onChange}
            />
            <button className="px-5 py-2 mr-4 text-white bg-blue-500 font-semibold border-none rounded-xl">
                Search
            </button>
        </div>
    );
};

export default SearchBar;