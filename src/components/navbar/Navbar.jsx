"use client";
import Image from "next/image";
import React, { useState } from "react";
import Login from "../auth/Login";

export const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Login handleClose={handleClose} show={show} />

      <nav className="flex w-screen  px-2 md:px-12 md:gap-12 content-center py-4 border-b shadow-md">
        <span className="md:w-3/12 pt-2">
          <Image
            src="/whole.png"
            alt=""
            height={200}
            width={200}
            className="h-[24px] w-[162.57px]"
          />
        </span>

        <div className="hidden md:flex md:w-6/12">
          <div className="float-right">
            <input
              className="appearance-none border rounded-full bg-gray-200 lg:w-[360px] py-2 px-3 text-gray-700 leading-tight bg-[#F2F2F2] focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        <div
          className="ml-auto text-sm md:text-md md:w-3/12 pt-2 cursor-pointer"
          onClick={handleShow}
        >
          Create Account.{" "}
          <span className="text-blue-700 font-semibold">Its free!</span>
        </div>
      </nav>
    </div>
  );
};
