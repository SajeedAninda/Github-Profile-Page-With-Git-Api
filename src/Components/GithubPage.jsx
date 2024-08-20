import React from 'react';
import headerImage from "../assets/header.png";
import searchIcon from "../assets/Search.svg";

const GithubPage = () => {
    return (
        <div>
            <div className='relative upperDiv'>
                <div>
                    <img className='w-full' src={headerImage} alt="" />
                </div>

                <div className='searchBox absolute w-[38%] left-1/2 transform -translate-x-1/2 top-6'>
                    <input className='w-full rounded-xl py-4 pl-[55px] pr-6 text-[#CDD5E0] bg-[#212a3b] placeholder:text-[#4A5567] font-bold outline-none' placeholder='Username' type="text" />
                    <img className='absolute left-4 top-1/2 transform -translate-y-1/2' src={searchIcon} alt="" />
                </div>
            </div>
        </div>
    );
};

export default GithubPage;
