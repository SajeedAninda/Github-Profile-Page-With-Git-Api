import React, { useEffect, useState } from 'react';
import headerImage from "../assets/header.png";
import searchIcon from "../assets/Search.svg";
import chieldIcon from "../assets/Chield_alt.svg";
import nestingIcon from "../assets/Nesting.svg";
import starIcon from "../assets/Star.svg";

const GithubPage = () => {
    const [username, setUsername] = useState('sajeedaninda');
    const [userData, setUserData] = useState({});
    const [reposData, setReposData] = useState([]);

    useEffect(() => {
        fetchUserData();
        fetchReposData();
    }, []);

    const fetchUserData = () => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => {
                setUserData(data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const fetchReposData = () => {
        fetch(`https://api.github.com/users/${username}/repos`)
            .then(response => response.json())
            .then(data => {
                setReposData(data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleSearch = () => {
        fetchUserData();
        fetchReposData();
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div>
            <div className='relative upperDiv'>
                <div className='h-[40vh]'>
                    <img className='w-full h-full object-cover' src={headerImage} alt="" />
                </div>

                <div className='searchBox absolute w-[90%] lg:w-[38%] left-1/2 transform -translate-x-1/2 top-6'>
                    <input
                        className='w-full rounded-xl py-4 pl-[55px] pr-6 text-[#CDD5E0] bg-[#212a3b] placeholder:text-[#4A5567] font-bold outline-none'
                        placeholder='Username'
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <img className='absolute left-4 top-1/2 transform -translate-y-1/2' src={searchIcon} alt="" />
                    <button onClick={handleSearch} className='hidden'>Search</button>
                </div>
            </div>

            <div className='bottomDiv h-fit pb-16 bg-[#20293A] relative'>
                <div className='w-[90%] mx-auto '>
                    <div className="profileInfo flex items-center justify-start">
                        <div className='absolute -top-12'>
                            <img className='w-[126px] rounded-xl border-8 border-[#20293A]' src={userData?.avatar_url} alt="" />
                        </div>

                        <div className='flex flex-col lg:flex-row items-start lg:items-center gap-5 ml-36 mt-4'>
                            <div className='bg-[#111729] px-5 py-4 rounded-xl flex justify-center items-center'>
                                <div className='pr-3 border-r border-[#4A5567]'>
                                    <p className='text-[#4A5567] text-[16px] font-semibold'>
                                        Followers
                                    </p>
                                </div>

                                <div className='pl-3'>
                                    <p className='text-[#CDD5E0] text-[16px] font-semibold'>
                                        {userData?.followers}
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
                                        {userData?.following}
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
                                        {userData?.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='name&bio mt-8'>
                        <h1 className='text-[32px] font-bold text-[#CDD5E0]'>
                            {userData?.name}
                        </h1>
                        <h3 className='text-[16px] font-bold text-[#4A5567]'>
                            {userData?.bio}
                        </h3>
                    </div>

                    <div className="repos grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                        {
                            reposData?.map(repo =>
                                <div key={repo.id} className="repoCard h-[167px] bg-gradient-to-r from-[#111729] to-[#1D1B48] rounded-xl p-4">
                                    <h3 className='text-[20px] font-semibold text-[#CDD5E0]'>
                                        {repo?.name}
                                    </h3>
                                    <h3 className='text-[16px] text-[#97a2b4] mt-2'>
                                        {repo?.description || 'No description available'}
                                    </h3>

                                    <div className='mt-4 flex justify-start items-center gap-4'>
                                        <div className='flex items-center gap-2'>
                                            <img src={chieldIcon} alt="" />
                                            <h4 className='text-[16px] font-medium text-[#CDD5E0]'>
                                                MIT
                                            </h4>
                                        </div>

                                        <div className='flex items-center gap-2'>
                                            <img src={nestingIcon} alt="" />
                                            <h4 className='text-[16px] font-medium text-[#CDD5E0]'>
                                                {repo?.forks_count}
                                            </h4>
                                        </div>

                                        <div className='flex items-center gap-2'>
                                            <img src={starIcon} alt="" />
                                            <h4 className='text-[16px] font-medium text-[#CDD5E0]'>
                                                {repo?.stargazers_count}
                                            </h4>
                                        </div>

                                        <h5 className='text-[12px] font-semibold text-[#97a2b4]'>
                                            Updated on {formatDate(repo?.updated_at)}
                                        </h5>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GithubPage;
