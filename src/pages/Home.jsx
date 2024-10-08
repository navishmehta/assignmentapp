import React, { useState } from "react";
import image from "../assets/pic1.jpg";
import image2 from "../assets/pic2.jpg";
import { RiShakeHandsFill } from "react-icons/ri";
import { FaHouseChimneyWindow } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import { IoIosSearch } from "react-icons/io";
import { GiSettingsKnobs } from "react-icons/gi";

const Home = () => {
  return (
    <div>
      {/* navbar */}
      <div
        className={`flex flex-col items-center bg-[url(${image2})] bg-cover h-[500px] mx-auto`}
      >
        <div className="flex items-center justify-between w-11/12 mx-auto">
          <div className="text-white">LOGO</div>
          {/* navbar */}
          <Navbar />
          <div>
            <button className="text-sm bg-slate-200 font-bold rounded-full px-4 py-2 mt-4 hover:bg-slate-300">
              LOGIN
            </button>
          </div>
        </div>

        <div>
          <h1 className="flex items-center justify-center text-white font-bold text-4xl mt-10">
            Discover Your Place
          </h1>
          <h2 className="flex items-center justify-center text-white mt-4">
            Get Started in Few Clicks
          </h2>
        </div>

        <div className="flex w-10/12 text-xl font-bold mt-28">
            <div className="bg-white text-black p-2">For rent</div>
            <div className="bg-black text-white p-2">For sale</div>

        </div>
        <div className="flex flex-col w-10/12 bg-white pb-4 pl-4">
          <div className="flex justify-evenly items-center gap-x-2 mt-4">
            <input
              type="text"
              placeholder="Enter Keywords"
              className="border-black border-[1px] px-2 py-2"
            />
            <select
              name="Property Types"
              id=""
              className="border-[1px] border-black px-4 py-2"
            >
              <option value="">Property Types</option>
              <option value="Property1">Property 1</option>
              <option value="Property2">Property 2</option>
              <option value="Property3">Property 3</option>
            </select>
            <select
              name="Property Types"
              id=""
              className="border-[1px] border-black px-4 py-2"
            >
              <option value="">Neighbourhoods</option>
              <option value="Property1">Property 1</option>
              <option value="Property2">Property 2</option>
              <option value="Property3">Property 3</option>
            </select>
            <div className="border-[1px] border-black px-[10px] py-[10px]">
              <GiSettingsKnobs />
            </div>
            <div className="">
              <button className="bg-blue-500 text-white flex justify-center items-center gap-x-2 px-2 py-1 border-black border-[1px]">
                Search
                <IoIosSearch size={18} fill="white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-11/12 h-full justify-center items-center space-x-10 mx-auto m-10">
        <div className="flex flex-col justify-center items-center bg-blue-800 h-[130px] w-[180px] hover:bg-blue-700">
          <div className="flex space-x-16">
            <RiShakeHandsFill size={30} fill="white" />
            <FaArrowRightLong size={30} fill="white" />
          </div>
          <h1 className="text-white text-sm mt-4 pr-8">Buy a property</h1>
        </div>
        <div className="flex flex-col justify-center items-center bg-blue-800 h-[130px] w-[180px] hover:bg-blue-700">
          <div className="flex space-x-16">
            <RiShakeHandsFill size={30} fill="white" />
            <FaArrowRightLong size={30} fill="white" />
          </div>
          <h1 className="text-white text-sm mt-4 pr-8">Buy a property</h1>
        </div>
        <div className="flex flex-col justify-center items-center bg-blue-800 h-[130px] w-[180px] hover:bg-blue-700">
          <div className="flex space-x-16">
            <RiShakeHandsFill size={30} fill="white" />
            <FaArrowRightLong size={30} fill="white" />
          </div>
          <h1 className="text-white text-sm mt-4 pr-8">Buy a property</h1>
        </div>
      </div>

      {/* hero section */}
      <div
        className={`flex flex-col items-end bg-cover h-[430px] bg-[url(${image})]`}
      >
        <div className="flex flex-col items-center h-full w-[500px] mt-10">
          <div className="font-bold text-3xl">
            <h1>Engage in lively urban lifestyle from outstanding property.</h1>
          </div>

          <div className="flex flex-col items-center h-full w-[350px] mt-8 font-semibold text-gray-500">
            At the heart of each of our investments is a strategy to build or
            buy a portfolio of real estate with 12+ years of experience in a
            specific user group. We believe that by doing this well, we create
            better outcomes, not only for our investors, but for society as a
            whole. Matter invests in companies.
          </div>

          <div className="space-x-4 mt-10 mb-20 flex items-center h-full w-[350px] ml-6">
            <button className="shadow-slate-800 shadow-md text-[12px] bg-purple-600 text-white px-3 py-2 font-semibold hover:bg-purple-700">
              About Company
            </button>
            <button className="shadow-slate-800 shadow-md text-[12px] bg-gray-200 text-gray-800 px-4 py-2 font-semibold hover:bg-gray-300">
              Find property
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-11/12 mx-auto space-y-4 mb-10">
        <h1 className="mt-10 mb-6 font-bold text-3xl">
          Universe of apartments types
        </h1>
        <div className="flex space-x-4">
          <div className="flex border-black border-[1px] px-4 py-1 rounded-full space-x-2 bg-slate-200">
            <div className="flex items-center">
              <FaHouseChimneyWindow size={40} />
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-xl">Villa</h1>
              <h2 className="font-bold text-gray-400">15 Property</h2>
            </div>
          </div>
          <div className="flex border-black border-[1px] px-4 py-1 rounded-full space-x-2 bg-slate-200">
            <div className="flex items-center">
              <FaHouseChimneyWindow size={40} />
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-xl">Villa</h1>
              <h2 className="font-bold text-gray-400">15 Property</h2>
            </div>
          </div>
          <div className="flex border-black border-[1px] px-4 py-1 rounded-full space-x-2 bg-slate-200">
            <div className="flex items-center">
              <FaHouseChimneyWindow size={40} />
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-xl">Villa</h1>
              <h2 className="font-bold text-gray-400">15 Property</h2>
            </div>
          </div>
          <div className="flex border-black border-[1px] px-4 py-1 rounded-full space-x-2 bg-slate-200">
            <div className="flex items-center">
              <FaHouseChimneyWindow size={40} />
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-xl">Villa</h1>
              <h2 className="font-bold text-gray-400">15 Property</h2>
            </div>
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="flex border-black border-[1px] px-4 py-1 rounded-full space-x-2 bg-slate-200">
            <div className="flex items-center">
              <FaHouseChimneyWindow size={40} />
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-xl">Villa</h1>
              <h2 className="font-bold text-gray-400">15 Property</h2>
            </div>
          </div>
          <div className="flex border-black border-[1px] px-4 py-1 rounded-full space-x-2 bg-slate-200">
            <div className="flex items-center">
              <FaHouseChimneyWindow size={40} />
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-xl">Villa</h1>
              <h2 className="font-bold text-gray-400">15 Property</h2>
            </div>
          </div>
          <div className="flex border-black border-[1px] px-4 py-1 rounded-full space-x-2 bg-slate-200">
            <div className="flex items-center">
              <FaHouseChimneyWindow size={40} />
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-xl">Villa</h1>
              <h2 className="font-bold text-gray-400">15 Property</h2>
            </div>
          </div>
          <div className="flex border-black border-[1px] px-4 py-1 rounded-full space-x-2 bg-slate-200">
            <div className="flex items-center">
              <FaHouseChimneyWindow size={40} />
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-xl">Villa</h1>
              <h2 className="font-bold text-gray-400">15 Property</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
