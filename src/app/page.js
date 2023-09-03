"use client";
import { useState } from "react";
import Jumbotron from "@/components/Jumbotron";
import Image from "next/image";
import { Posts } from "@/components/posts/Posts";

export default function Home() {
  return (
    <div>
      <Jumbotron />
      <div className="mx-8 lg:mx-36">
        <nav className="my-6 hidden md:flex border-b border-gray-300">
          <ul className="text-gray-500 flex space-x-8">
            <li className="border-b-2 cursor-pointer border-black pb-2">
              All post (32)
            </li>
            <li className="hover:border-b-2 cursor-pointer border-black pb-2">
              Article
            </li>
            <li className="hover:border-b-2 cursor-pointer border-black pb-2">
              Event
            </li>
            <li className="hover:border-b-2 cursor-pointer border-black pb-2">
              Education
            </li>
            <li className="hover:border-b-2 cursor-pointer border-black pb-2">
              Job
            </li>
          </ul>
          <div className="flex ml-auto space-x-4">
            <button className="flex space-x-2 mb-2 rounded px-3 py-1 bg-gray-200">
              <span>Write Post</span>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_839)">
                  <path
                    d="M6.41663 9.16663L11 13.75L15.5833 9.16663H6.41663Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_839">
                    <rect width="22" height="22" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button className="flex mb-2 space-x-2 rounded text-white px-3 py-1 bg-blue-700">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1_859)">
                  <path
                    d="M7.33333 9.16671H4.58333V6.41671H2.75V9.16671H0V11H2.75V13.75H4.58333V11H7.33333V9.16671ZM16.5 10.0834C18.0217 10.0834 19.2408 8.85504 19.2408 7.33337C19.2408 5.81171 18.0217 4.58337 16.5 4.58337C16.2067 4.58337 15.9225 4.62921 15.6658 4.71171C16.1883 5.45421 16.4908 6.35254 16.4908 7.33337C16.4908 8.31421 16.1792 9.20337 15.6658 9.95504C15.9225 10.0375 16.2067 10.0834 16.5 10.0834ZM11.9167 10.0834C13.4383 10.0834 14.6575 8.85504 14.6575 7.33337C14.6575 5.81171 13.4383 4.58337 11.9167 4.58337C10.395 4.58337 9.16667 5.81171 9.16667 7.33337C9.16667 8.85504 10.395 10.0834 11.9167 10.0834ZM17.985 12.0634C18.7458 12.7325 19.25 13.585 19.25 14.6667V16.5H22V14.6667C22 13.255 19.8275 12.3842 17.985 12.0634ZM11.9167 11.9167C10.0833 11.9167 6.41667 12.8334 6.41667 14.6667V16.5H17.4167V14.6667C17.4167 12.8334 13.75 11.9167 11.9167 11.9167Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_859">
                    <rect width="22" height="22" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>Join group</span>
            </button>
          </div>
        </nav>
      </div>
      <Posts />
    </div>
  );
}
