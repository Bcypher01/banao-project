import React from "react";

const Jumbotron = () => {
  return (
    <div className="bg-scroll bg-[url('/banner.png')] h-[440px] w-screen relative">
      <div className="text-white absolute bottom-16 px-8 md:px-48">
        <h1 className="text-3xl font-semibold">Computer Engineering</h1>
        <p>142,765 Computer Engineers follow this</p>
      </div>
    </div>
  );
};

export default Jumbotron;
