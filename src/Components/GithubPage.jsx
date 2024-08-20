import React from 'react';
import headerImage from "../assets/header.png";
import searchIcon from "../assets/Search.svg";
import profileImg from "../assets/87448831.jpg";


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


            <div className='bottomDiv h-screen bg-[#20293A] relative'>
                <div className='w-[90%] mx-auto '>
                    <div className="profileInfo flex items-center justify-start">
                        <div className='absolute -top-12'>
                            <img className='w-[126px] rounded-xl border-8 border-[#20293A]' src={profileImg} alt="" />
                        </div>

                        <div className='flex justify-center items-center gap-5 ml-36 mt-4'>
                            <div className='bg-[#111729] px-5 py-4 rounded-xl flex justify-center items-center'>
                                <div className='pr-3 border-r border-[#4A5567]'>
                                    <p className='text-[#4A5567] text-[16px] font-semibold'>
                                        Followers
                                    </p>
                                </div>

                                <div className='pl-3'>
                                    <p className='text-[#CDD5E0] text-[16px] font-semibold'>
                                        2
                                    </p>
                                </div>
                            </div>


                            <div className='bg-[#111729] px-5 py-4 rounded-xl flex justify-center items-center'>
                                <div className='pr-3 border-r border-[#4A5567]'>
                                    <p className='text-[#4A5567] text-[16px] font-semibold'>
                                        Following
                                    </p>
                                </div>

                                <div className='pl-3'>
                                    <p className='text-[#CDD5E0] text-[16px] font-semibold'>
                                        12
                                    </p>
                                </div>
                            </div>


                            <div className='bg-[#111729] px-5 py-4 rounded-xl flex justify-center items-center'>
                                <div className='pr-3 border-r border-[#4A5567]'>
                                    <p className='text-[#4A5567] text-[16px] font-semibold'>
                                        Location
                                    </p>
                                </div>

                                <div className='pl-3'>
                                    <p className='text-[#CDD5E0] text-[16px] font-semibold'>
                                        Dhaka, Bangladesh
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='name&bio mt-8'>
                        <h1 className='text-[32px] font-bold text-[#CDD5E0]'>
                            Sajeed Enayet Aninda
                        </h1>
                        <h3 className='text-[16px] font-bold text-[#4A5567]'>
                            Hi i am Sajeed, A MERN Stack developer. Crafting bridges between design and functionality. Let's build innovative, user-focused web applications together!
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GithubPage;
