import React from "react";

export default function Loading() {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none">
        <div className="relative w-auto my-2 mx-auto font-roboto">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white ">
            {/*body*/}
            <div className="relative py-2 px-2 flex-col text-blue font-roboto">
              <div className="lds-ellipsis bg-white">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
