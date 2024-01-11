import React from "react";
import Navbar from "./Navbar";
import rolex from "../assets/images/rolex.png";
const Home = () => {
  return (
    <section className="">
      <div className="flex bg-slate-200 min-h-screen ">
        <div className="mt-8 ml-10 ">

          <div className="">
            <h1 className=" font-bold text-[70px]  ">
              TECHNOLOGY
              <br /> HACK YOU
              <br /> WON'T GET IN THE MARKET
            </h1>
          </div>
          <div className=" pb-10">
            <button
      
            className=" bg-blue-800 text-slate-300 rounded-lg py-3 px-5 mt-6 ">
              SHOP PRODUCT
            </button>
          </div>
        </div>

        {/*-----Image to right------ */}
        <div className="mt-14 mr-48">
          <img
            className=" "
            width={320}
            height={200}
            src={rolex}
            alt="Rolex watch"
          />
          <p><i>The finest watch you could get your hands on</i></p>
        </div>
      </div>
      <div className=" bg-white min-h-screen">
      
       <div className="flex gap-28 justify-center pt-8">
        
        <div>
        <h1>FREE DELIVERY</h1>
        <p> Enjoy the ease and savings<br/> of free shipping on all orders.</p>
        </div>
        <div>
        <h1>QUALITY GUARANTEE</h1>
        <p>Shop confidently knowing our<br/> products come with an unwavering<br/> commitment to excellence.</p>
        </div>

        <div>
        <h1>DAILY OFFERS</h1>
        </div>

        <div>
        <h1>100% SECURE PAYMENT</h1>
        </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
