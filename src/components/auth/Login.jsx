import Image from "next/image";

function Login({ show, handleClose }) {
  return (
    <>
      <div
        id="defaultModal"
        tabIndex="-1"
        className={`fixed grid place-items-center ${
          show ? "" : "hidden"
        } h-full z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-2rem)] max-h-full`}
      >
        <div className="relative w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow">
            <div className="flex items-start justify-between p-2 border-b rounded-t bg-[#EFFFF4]">
              <h3 className="text-sm text-[#008A45] pt-1.5">
                Lets learn, share & inspire each other with our passion for
                computer engineering. Sign up now
              </h3>
              <button
                type="button"
                className="text-gray-400  hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                data-modal-hide="defaultModal"
                onClick={handleClose}
              >
                <svg
                  className="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="flex p-6 space-x-3">
              <div className="w-full md:w-6/12">
                <h1 className="font-semibold text-2xl">Create Account</h1>
                <div className="my-4">
                  <form>
                    <div className="grid grid-cols-2">
                      <div className="relative">
                        <input
                          type="text"
                          className="block min-h-[auto] w-full rounded border bg-[#D9D9DB] px-3 py-[0.52rem] outline-none "
                          id="exampleInput123"
                          placeholder="First name"
                        />
                      </div>

                      <div className="relative">
                        <input
                          type="text"
                          className="block min-h-[auto] w-full rounded border bg-[#D9D9DB] px-3 py-[0.52rem] outline-none "
                          id="exampleInput124"
                          placeholder="Last name"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        className="block min-h-[auto] w-full rounded border bg-[#D9D9DB] px-3 py-[0.52rem] outline-none "
                        id="exampleInput125"
                        placeholder="Email address"
                      />
                    </div>

                    <div className="relative">
                      <input
                        type="password"
                        className="block min-h-[auto] w-full rounded border bg-[#D9D9DB] px-3 py-[0.52rem] outline-none "
                        id="exampleInput126"
                        placeholder="Password"
                      />
                    </div>

                    <div className="relative">
                      <input
                        type="password"
                        className="block min-h-[auto] w-full rounded border bg-[#D9D9DB] px-3 py-[0.52rem] outline-none "
                        id="exampleInput126"
                        placeholder="Confirm Password"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-block w-full rounded-full bg-blue-600 my-6 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-500"
                    >
                      Create Account
                    </button>

                    <div className="inline-block w-full rounded border cursor-pointer grid place-items-center bg-transparent my-6 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black">
                      <span className="flex space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="25"
                          height="25"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#039be5"
                            d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                          ></path>
                          <path
                            fill="#fff"
                            d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                          ></path>
                        </svg>
                        <p className="pt-1 text-xs">Sign up with facebook</p>
                      </span>
                    </div>
                    <div className="inline-block w-full rounded border cursor-pointer grid place-items-center bg-transparent my-6 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black">
                      <span className="flex space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="25"
                          height="25"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#fbc02d"
                            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                          ></path>
                          <path
                            fill="#e53935"
                            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                          ></path>
                          <path
                            fill="#4caf50"
                            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                          ></path>
                          <path
                            fill="#1565c0"
                            d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                          ></path>
                        </svg>
                        <p className="pt-1 text-xs">Sign up with Google</p>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
              <div className="hidden md:block md:w-6/12">
                <span className="flex text-sm float-right mr-10">
                  Already have an account?
                  <p className="text-blue-800"> Sign in</p>
                </span>
                <div className="h-[320px] w-[320px] my-8">
                  <Image
                    src={"/Group3.png"}
                    alt="Sign up"
                    height={200}
                    width={200}
                    className="h-full w-full"
                  />
                  <p className="text-center text-sm">
                    By signing up, you agree to our Terms & conditions, Privacy
                    policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
