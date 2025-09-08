import React from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { Link, Links } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <>
      <Header />

      {/* Background Web page */}
      <div className="flex -scale-z-50 items-center mt-[-20vh] h-[100vh] justify-center stroke-1 saturate-50   bg-black sticky  bg-fixed ">
        <div className="absolute inset-60 bg-[radial-gradient(circle_at_center,_#ff0000,_#000000)] h-[80%] blur-[190px]">
          <div className=" h-[100%] bg-black/50 z-20 backdrop:blur-sm"></div>
        </div>
      </div>

      {/* Boddy of About Page */}
      <nav className="absolute top-[20vh] mt-8 px-[32vh] py-2 ">
        <span className="gap-2">
          <Link
            to="/"
            className=" text-gray-300 text-[15px] hover:text-gray-50"
          >
            Home
          </Link>
          <Link className="text-white  ml-2">/ Terms & Conditions</Link>
        </span>

        {/* Content for about us */}
        <div>
          <h2 className="text-white mt-9 text-3xl font-bold">
            Terms & Conditions
          </h2>
          <p className="text-white mt-5">
            Ticket Purchased Rule and Regulation
          </p>
          <p className="text-white mt-5">
            1. Every movie tickets purchased via the Sale Channels are strictly
            non-refundable and are not available for exchange under whatever
            circumstances.
          </p>
          <p className="text-white">
            2. Purchased tickets are not exchangeable for tickets at a different
            price, for another movie, or for another screening or day.
          </p>
          <p className="text-white">
            3. Movie tickets purchased via the Sales Channels will be available
            for collection at the relevant cinema from the ticket counter or at
            our KIOSK machine (where available) by producing the booking
            numbers/reservation sent by email or as available under the
            purchased history feature in Legend Mobile application or any other
            means that shall be introduced by Legend Cinema from time to time.
          </p>
          <p className="text-white">
            4. In case of any malfunctions of the reservation or purchase form
            placed on the website or mobile application, please contact us
            immediately at the following e-mail address hotline@legend.com.kh or
            contact our hotline 081300400 at least 30 minutes before the movie
            start. We would also like to inform you that it is the basis and
            condition for an effective complaint about the impossibility or
            difficulties in purchasing tickets online.
          </p>
          <p className="text-white">
            5. If the User fails to purchase a ticket for the screening for
            which he or she has reserved a seat in the Legend Cinema within the
            time limit specified in clause 4 above, the reservation of such a
            seat cannot be guaranteed.
          </p>
          <p className="text-white">
            6. Movie tickets are made available subject to the classification of
            relevant film given by the Film Censorship Board of Cambodia. Legend
            Cinema has a legal obligation to refuse admission to a person, who
            in the opinion of its duty manager, is under the minimum age
            required for NC15 and R18 classified films (including children in
            arms). Proof of age may be required in certain instances.
          </p>
          <p className="text-white mt-5">
            Legend Cinema reserved the rights to have term and condition
            changed. All rights reserved Legend Cinema Co, Ltd 2024.
          </p>
        </div>
      </nav>
      <Footer>
        <Footer />
      </Footer>
    </>
  );
};

export default TermsAndConditions;
