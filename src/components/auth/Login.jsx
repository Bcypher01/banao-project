import Image from "next/image";

function Login({ show, handleClose }) {
  return (
    <>
      <div
        id="defaultModal"
        tabindex="-1"
        aria-hidden="true"
        class={`fixed grid place-items-center ${
          show ? "" : "hidden"
        } h-screen z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div class="relative w-full max-w-2xl max-h-full">
          <div class="relative bg-white rounded-lg shadow">
            <div class="flex items-start justify-between p-2 border-b rounded-t bg-[#EFFFF4]">
              <h3 class="text-sm text-[#008A45]">
                Lets learn, share & inspire each other with our passion for
                computer engineering. Sign up now
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                data-modal-hide="defaultModal"
                onClick={handleClose}
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <div class="flex p-6 space-x-3">
              <div className="w-6/12">
                <h1 className="font-semibold text-2xl">Create Account</h1>
              </div>
              <div className="w-6/12">
                <span className="flex text-sm float-right">
                  Already have an account?
                  <p className="text-blue-800">Sign in</p>
                </span>
                <Image
                  src={"/Group3.png"}
                  alt="Sign up"
                  height={200}
                  width={200}
                  className="my-6 h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
