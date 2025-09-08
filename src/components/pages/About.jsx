import React from "react";
import { Link, Links } from "react-router-dom";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";

const About = () => {
  return (
    <>
      <Header />
      <div>
        <div className="mt-[-160px] brightness-30 ">
          <img
            src="https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/33983385-b6fd-4413-a906-98491d180531.jpeg"
            alt="About Banner"
            className="bg-cover bg-fixed"
          />
        </div>
      </div>
      <span className="w-[140vh]  rounded-xl flex m-auto brightness-100 justify-center mt-[-68vh]">
        <img
          src="https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/33983385-b6fd-4413-a906-98491d180531.jpeg"
          alt="About Banner "
          className="w-[100%] rounded-xl "
        />
      </span>
      {/* Background Web page */}
      <div className="flex -scale-z-50 items-center h-[60vh] justify-center stroke-1 saturate-50   bg-black sticky  bg-fixed ">
        <div className="absolute inset-60 bg-[radial-gradient(circle_at_center,_#ff0000,_#000000)] h-[80%] blur-[190px]">
          <div className=" h-[100%] bg-black/50 z-20 backdrop:blur-sm"></div>
        </div>
      </div>

      {/* Boddy of About Page */}
      <nav className="absolute top-[90vh] mt-8 px-[32vh] py-2 ">
        <span className="gap-2">
          <Link
            to="/"
            className=" text-gray-300 text-[15px] hover:text-gray-50"
          >
            Home
          </Link>
          <Link className="text-white  ml-2">/ About Legend Cinema</Link>
        </span>

        {/* Content for about us */}
        <div>
          <h2 className="text-white mt-9 text-3xl font-bold">
            About Legend Cinema
          </h2>
          <p className="text-white mt-9">About Legend Cinema Cambodia.</p>
          <p className="text-white mt-1">
            Legend Cinema is the no.1 and the first International standard
            Cinema in Cambodia, created and operated by khmer since 2011. Our
            rapid growth and expansion from 1 to 13 cinema locations in the past
            12 years across the country, has shown our strength in delivery and
            influence in the film and entertainment industry.
          </p>
          <p className="text-white">
            Today, we have successfully implemented and deployed advanced cinema
            technologies and levelled up our offerings, beyond cinema norms. Our
            team is dedicated to providing top tier immersive cinema experience
            and excellent services with the essence of Khmer hospitality. With
            our new direction in place, we are determined to inspire, drive
            change and make an impact in the industry, and exceed expectations.{" "}
          </p>
        </div>
      </nav>
      <Footer>
        <Footer />
      </Footer>
    </>
  );
};

export default About;
