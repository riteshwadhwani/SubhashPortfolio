import React from 'react'
import { Link } from 'react-router-dom';
import myimage from '../../../src/assets/subhash.jpg';


const Home = () => {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold text-slate-600 sm:text-5xl">
                            Subhash Baviskar
                            
                        </h2>

                        <Link
                            className="  animate-bounce inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            Hire Me
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96 rounded-sm" src={myimage} alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48 rounded-sm" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
            </div>
        </div>
    );
}

export default Home
