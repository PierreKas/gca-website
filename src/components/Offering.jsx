import React from "react";
import OfferingPicture from "../assets/offrande.jpeg";
import hearderPicture from "../assets/program-pictures/f-serv1.jpg";
const Offering = () => {
  return (
    <div>
      <img
        src={hearderPicture}
        className="absolute inset-0 w-full h-72  object-cover z-10"
        alt=""
      />
      <div className="absolute inset-0 bg-black h-72 opacity-50 z-20"></div>
      <div className="absolute top-28 left-0 right-0 flex flex-col z-30">
        <h1 className="uppercase text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide bg-gradient-to-r from-white to-zinc-100 text-transparent font-bold bg-clip-text">
          Offering
        </h1>
        <p className="mt-2.5 text-xl text-white text-center max-w-3xl mx-auto">
          Giving time is always a blessing time for us{" "}
        </p>
      </div>
      <div className="text-center py-20 bg-gradient-to-br from-yellow-100 to-amber-50">
        <img
          src={OfferingPicture}
          alt="offering info"
          className="w-full max-w-4xl h-auto mx-auto mt-40 rounded-4xl shadow-lg object-cover"
        />
      </div>
    </div>
  );
};

export default Offering;
