"use client";
import { useState } from "react";
import Jumbotron from "@/components/Jumbotron";
import Image from "next/image";

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
                <g clip-path="url(#clip0_1_839)">
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
                <g clip-path="url(#clip0_1_859)">
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
      <div className="flex mx-8 lg:mx-36 space-x-8">
        <section className="w-full md:w-9/12">
          <div className="border my-2 rounded">
            <Image
              src="/Rectangle5.png"
              alt="Post1"
              height={200}
              width={200}
              className="w-full h-full mb-4"
            />
            <div className="p-4">
              <h1 className="font-semibold text-sm py-2">Article</h1>
              <div className="flex w-full">
                <span className="w-10/12">
                  <h1 className="font-bold text-xl">
                    What if famous brands have regular fonts? Regular Meet
                    Regular
                  </h1>
                </span>
                <div className="w-2/12">
                  <span className="float-right">
                    <svg
                      width="20"
                      height="6"
                      className="mt-2"
                      viewBox="0 0 20 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.6667 2.99996C14.6667 4.28329 15.7167 5.33329 17 5.33329C18.2834 5.33329 19.3334 4.28329 19.3334 2.99996C19.3334 1.71663 18.2834 0.666626 17 0.666626C15.7167 0.666626 14.6667 1.71663 14.6667 2.99996ZM12.3334 2.99996C12.3334 1.71663 11.2834 0.666626 10 0.666626C8.71671 0.666626 7.66671 1.71662 7.66671 2.99996C7.66671 4.28329 8.71671 5.33329 10 5.33329C11.2834 5.33329 12.3334 4.28329 12.3334 2.99996ZM5.33337 2.99996C5.33337 1.71662 4.28337 0.666625 3.00004 0.666625C1.71671 0.666625 0.666708 1.71662 0.666708 2.99996C0.666708 4.28329 1.71671 5.33329 3.00004 5.33329C4.28337 5.33329 5.33337 4.28329 5.33337 2.99996Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <p className="text-gray-600 py-4 text-md">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Delectus numquam natus libero...
              </p>
            </div>
            <div className="flex p-3">
              <span className="w-3/6 space-x-2 flex">
                <Image
                  src="/user.png"
                  alt="Post1"
                  height={200}
                  width={200}
                  className="w-8 h-8"
                />
                <h1 className="pt-1">Sarthak Kamra</h1>
              </span>
              <div className="w-3/6">
                <div className="flex space-x-12 float-right">
                  <span className="flex space-x-2 pt-2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="icon/action/visibility_24px">
                        <path
                          id="icon/action/visibility_24px_2"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z"
                          fill="#525252"
                        />
                      </g>
                    </svg>

                    <p className="text-sm">1.4K Views</p>
                  </span>
                  <button className="bg-gray-200 p-2 rounded">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1_968)">
                        <path
                          d="M13.5 12.06C12.93 12.06 12.42 12.285 12.03 12.6375L6.6825 9.525C6.72 9.3525 6.75 9.18 6.75 9C6.75 8.82 6.72 8.6475 6.6825 8.475L11.97 5.3925C12.375 5.7675 12.9075 6 13.5 6C14.745 6 15.75 4.995 15.75 3.75C15.75 2.505 14.745 1.5 13.5 1.5C12.255 1.5 11.25 2.505 11.25 3.75C11.25 3.93 11.28 4.1025 11.3175 4.275L6.03 7.3575C5.625 6.9825 5.0925 6.75 4.5 6.75C3.255 6.75 2.25 7.755 2.25 9C2.25 10.245 3.255 11.25 4.5 11.25C5.0925 11.25 5.625 11.0175 6.03 10.6425L11.37 13.7625C11.3325 13.92 11.31 14.085 11.31 14.25C11.31 15.4575 12.2925 16.44 13.5 16.44C14.7075 16.44 15.69 15.4575 15.69 14.25C15.69 13.0425 14.7075 12.06 13.5 12.06Z"
                          fill="#2D2D2D"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_968">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border my-2 rounded">
            <Image
              src="/Rectangle2.png"
              alt="Post1"
              height={200}
              width={200}
              className="w-full h-full mb-4"
            />
            <div className="p-4">
              <h1 className="font-semibold text-sm py-2">Education</h1>
              <div className="flex w-full">
                <span className="w-10/12">
                  <h1 className="font-bold text-xl">
                    Tax Benefits for Investment under National Pension Scheme
                    launched by Government
                  </h1>
                </span>
                <div className="w-2/12">
                  <span className="float-right">
                    <svg
                      width="20"
                      height="6"
                      className="mt-2"
                      viewBox="0 0 20 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.6667 2.99996C14.6667 4.28329 15.7167 5.33329 17 5.33329C18.2834 5.33329 19.3334 4.28329 19.3334 2.99996C19.3334 1.71663 18.2834 0.666626 17 0.666626C15.7167 0.666626 14.6667 1.71663 14.6667 2.99996ZM12.3334 2.99996C12.3334 1.71663 11.2834 0.666626 10 0.666626C8.71671 0.666626 7.66671 1.71662 7.66671 2.99996C7.66671 4.28329 8.71671 5.33329 10 5.33329C11.2834 5.33329 12.3334 4.28329 12.3334 2.99996ZM5.33337 2.99996C5.33337 1.71662 4.28337 0.666625 3.00004 0.666625C1.71671 0.666625 0.666708 1.71662 0.666708 2.99996C0.666708 4.28329 1.71671 5.33329 3.00004 5.33329C4.28337 5.33329 5.33337 4.28329 5.33337 2.99996Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <p className="text-gray-600 py-4 text-md">
                I’ve worked in UX for the better part of a decade. From now on,
                I plan to rei…
              </p>
            </div>
            <div className="flex p-3">
              <span className="w-3/6 space-x-2 flex">
                <Image
                  src="/user1.png"
                  alt="Post1"
                  height={200}
                  width={200}
                  className="w-8 h-8"
                />
                <h1 className="pt-1">Sarah West</h1>
              </span>
              <div className="w-3/6">
                <div className="flex space-x-12 float-right">
                  <span className="flex space-x-2 pt-2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="icon/action/visibility_24px">
                        <path
                          id="icon/action/visibility_24px_2"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z"
                          fill="#525252"
                        />
                      </g>
                    </svg>

                    <p className="text-sm">1.4K Views</p>
                  </span>
                  <button className="bg-gray-200 p-2 rounded">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1_968)">
                        <path
                          d="M13.5 12.06C12.93 12.06 12.42 12.285 12.03 12.6375L6.6825 9.525C6.72 9.3525 6.75 9.18 6.75 9C6.75 8.82 6.72 8.6475 6.6825 8.475L11.97 5.3925C12.375 5.7675 12.9075 6 13.5 6C14.745 6 15.75 4.995 15.75 3.75C15.75 2.505 14.745 1.5 13.5 1.5C12.255 1.5 11.25 2.505 11.25 3.75C11.25 3.93 11.28 4.1025 11.3175 4.275L6.03 7.3575C5.625 6.9825 5.0925 6.75 4.5 6.75C3.255 6.75 2.25 7.755 2.25 9C2.25 10.245 3.255 11.25 4.5 11.25C5.0925 11.25 5.625 11.0175 6.03 10.6425L11.37 13.7625C11.3325 13.92 11.31 14.085 11.31 14.25C11.31 15.4575 12.2925 16.44 13.5 16.44C14.7075 16.44 15.69 15.4575 15.69 14.25C15.69 13.0425 14.7075 12.06 13.5 12.06Z"
                          fill="#2D2D2D"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_968">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border my-2 rounded">
            <Image
              src="/Rectangle2.png"
              alt="Post1"
              height={200}
              width={200}
              className="w-full h-full mb-4"
            />
            <div className="p-4">
              <h1 className="font-semibold text-sm py-2">Meetup</h1>
            </div>
            <div className="flex w-full px-4">
              <span className="w-10/12">
                <h1 className="font-bold text-xl">
                  Finance & Investment Elite Social Mixer @Lujiazui
                </h1>
                <div className="flex space-x-12">
                  <span className="flex space-x-2 py-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1_895)">
                        <path
                          d="M15.8333 2.49992H15V0.833252H13.3333V2.49992H6.66667V0.833252H5V2.49992H4.16667C3.24167 2.49992 2.50833 3.24992 2.50833 4.16659L2.5 15.8333C2.5 16.7499 3.24167 17.4999 4.16667 17.4999H15.8333C16.75 17.4999 17.5 16.7499 17.5 15.8333V4.16659C17.5 3.24992 16.75 2.49992 15.8333 2.49992ZM15.8333 15.8333H4.16667V6.66658H15.8333V15.8333ZM5.83333 8.33325H10V12.4999H5.83333V8.33325Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_895">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="text-sm">Fri, 12 Oct, 2018</p>
                  </span>
                  <span className="flex space-x-2 py-2">
                    <svg
                      width="12"
                      height="18"
                      viewBox="0 0 12 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.99996 0.666748C2.77496 0.666748 0.166626 3.27508 0.166626 6.50008C0.166626 10.8751 5.99996 17.3334 5.99996 17.3334C5.99996 17.3334 11.8333 10.8751 11.8333 6.50008C11.8333 3.27508 9.22496 0.666748 5.99996 0.666748ZM1.83329 6.50008C1.83329 4.20008 3.69996 2.33342 5.99996 2.33342C8.29996 2.33342 10.1666 4.20008 10.1666 6.50008C10.1666 8.90008 7.76663 12.4918 5.99996 14.7334C4.26663 12.5084 1.83329 8.87508 1.83329 6.50008Z"
                        fill="black"
                      />
                      <path
                        d="M5.99996 8.58341C7.15055 8.58341 8.08329 7.65067 8.08329 6.50008C8.08329 5.34949 7.15055 4.41675 5.99996 4.41675C4.84937 4.41675 3.91663 5.34949 3.91663 6.50008C3.91663 7.65067 4.84937 8.58341 5.99996 8.58341Z"
                        fill="black"
                      />
                    </svg>

                    <p className="text-sm">Ahmedabad, India</p>
                  </span>
                </div>
              </span>
              <div className="w-2/12">
                <span className="float-right">
                  <svg
                    width="20"
                    height="6"
                    className="mt-2"
                    viewBox="0 0 20 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.6667 2.99996C14.6667 4.28329 15.7167 5.33329 17 5.33329C18.2834 5.33329 19.3334 4.28329 19.3334 2.99996C19.3334 1.71663 18.2834 0.666626 17 0.666626C15.7167 0.666626 14.6667 1.71663 14.6667 2.99996ZM12.3334 2.99996C12.3334 1.71663 11.2834 0.666626 10 0.666626C8.71671 0.666626 7.66671 1.71662 7.66671 2.99996C7.66671 4.28329 8.71671 5.33329 10 5.33329C11.2834 5.33329 12.3334 4.28329 12.3334 2.99996ZM5.33337 2.99996C5.33337 1.71662 4.28337 0.666625 3.00004 0.666625C1.71671 0.666625 0.666708 1.71662 0.666708 2.99996C0.666708 4.28329 1.71671 5.33329 3.00004 5.33329C4.28337 5.33329 5.33337 4.28329 5.33337 2.99996Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="mx-2 my-2">
              <button className="w-full py-1 bg-white text-center text-red-400 rounded border border-gray-200">
                Visit Website
              </button>
            </div>
            <div className="flex p-3">
              <span className="w-3/6 space-x-2 flex">
                <Image
                  src="/user1.png"
                  alt="Post1"
                  height={200}
                  width={200}
                  className="w-8 h-8"
                />
                <h1 className="pt-1">Ronal Johnson</h1>
              </span>
              <div className="w-3/6">
                <div className="flex space-x-12 float-right">
                  <span className="flex space-x-2 pt-2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="icon/action/visibility_24px">
                        <path
                          id="icon/action/visibility_24px_2"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.75 9C2.0475 5.7075 5.25 3.375 9 3.375C12.75 3.375 15.9525 5.7075 17.25 9C15.9525 12.2925 12.75 14.625 9 14.625C5.25 14.625 2.0475 12.2925 0.75 9ZM15.615 9C14.3775 6.4725 11.8425 4.875 9 4.875C6.1575 4.875 3.6225 6.4725 2.385 9C3.6225 11.5275 6.1575 13.125 9 13.125C11.8425 13.125 14.3775 11.5275 15.615 9ZM9 7.125C10.035 7.125 10.875 7.965 10.875 9C10.875 10.035 10.035 10.875 9 10.875C7.965 10.875 7.125 10.035 7.125 9C7.125 7.965 7.965 7.125 9 7.125ZM5.625 9C5.625 7.14 7.14 5.625 9 5.625C10.86 5.625 12.375 7.14 12.375 9C12.375 10.86 10.86 12.375 9 12.375C7.14 12.375 5.625 10.86 5.625 9Z"
                          fill="#525252"
                        />
                      </g>
                    </svg>

                    <p className="text-sm">1.4K Views</p>
                  </span>
                  <button className="bg-gray-200 p-2 rounded">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1_968)">
                        <path
                          d="M13.5 12.06C12.93 12.06 12.42 12.285 12.03 12.6375L6.6825 9.525C6.72 9.3525 6.75 9.18 6.75 9C6.75 8.82 6.72 8.6475 6.6825 8.475L11.97 5.3925C12.375 5.7675 12.9075 6 13.5 6C14.745 6 15.75 4.995 15.75 3.75C15.75 2.505 14.745 1.5 13.5 1.5C12.255 1.5 11.25 2.505 11.25 3.75C11.25 3.93 11.28 4.1025 11.3175 4.275L6.03 7.3575C5.625 6.9825 5.0925 6.75 4.5 6.75C3.255 6.75 2.25 7.755 2.25 9C2.25 10.245 3.255 11.25 4.5 11.25C5.0925 11.25 5.625 11.0175 6.03 10.6425L11.37 13.7625C11.3325 13.92 11.31 14.085 11.31 14.25C11.31 15.4575 12.2925 16.44 13.5 16.44C14.7075 16.44 15.69 15.4575 15.69 14.25C15.69 13.0425 14.7075 12.06 13.5 12.06Z"
                          fill="#2D2D2D"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_968">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="hidden md:block md:w-3/12">
          <div className="flex border-b">
            <div className="flex space-x-2">
              <svg
                width="12"
                height="18"
                viewBox="0 0 12 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.99996 0.666748C2.77496 0.666748 0.166626 3.27508 0.166626 6.50008C0.166626 10.8751 5.99996 17.3334 5.99996 17.3334C5.99996 17.3334 11.8333 10.8751 11.8333 6.50008C11.8333 3.27508 9.22496 0.666748 5.99996 0.666748ZM1.83329 6.50008C1.83329 4.20008 3.69996 2.33342 5.99996 2.33342C8.29996 2.33342 10.1666 4.20008 10.1666 6.50008C10.1666 8.90008 7.76663 12.4918 5.99996 14.7334C4.26663 12.5084 1.83329 8.87508 1.83329 6.50008Z"
                  fill="black"
                />
                <path
                  d="M5.99996 8.58341C7.15055 8.58341 8.08329 7.65067 8.08329 6.50008C8.08329 5.34949 7.15055 4.41675 5.99996 4.41675C4.84937 4.41675 3.91663 5.34949 3.91663 6.50008C3.91663 7.65067 4.84937 8.58341 5.99996 8.58341Z"
                  fill="black"
                />
              </svg>
              <p className="text-sm">Noida, India</p>
            </div>
            <div className="ml-auto">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_848)">
                  <path
                    d="M2.5 14.375V17.5H5.625L14.8417 8.28334L11.7167 5.15834L2.5 14.375ZM17.2583 5.86667C17.5833 5.54167 17.5833 5.01667 17.2583 4.69167L15.3083 2.74167C14.9833 2.41667 14.4583 2.41667 14.1333 2.74167L12.6083 4.26667L15.7333 7.39167L17.2583 5.86667Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_848">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
