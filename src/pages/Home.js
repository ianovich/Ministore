import React from "react";
import Navbar from "./Navbar";
import rolex from "../assets/images/rolex.png";
const Home = () => {
  return (
    <section>
      <div className="flex  ">
        <div className="mt-8 ml-10">

          <div className="">
            <h1 className=" font-bold text-[70px]  ">
              TECHNOLOGY
              <br /> HACK YOU
              <br /> WON'T GET IN THE MARKET
            </h1>
          </div>
          <div className=" pb-10">
            <button className=" bg-blue-800 text-slate-300 rounded-lg py-2 px-4 mt-6 ">
              SHOP PRODUCT
            </button>
          </div>
        </div>

        {/*-----Image to right------ */}
        <div className="mt-14 ml-48">
          <img
            className=" "
            width={350}
            height={200}
            src={rolex}
            alt="Rolex watch"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
