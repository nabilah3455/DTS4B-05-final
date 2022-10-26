import React from "react";

export default function Loading() {
  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none"
        //   onClick={() => setOtpModal(false)}
      >
        <div className="relative w-auto my-2 mx-auto font-roboto">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white ">
            {/*body*/}
            <div className="relative py-6 px-40 flex-col text-blue font-roboto">
              <label className="text-xs text-black block text-center pb-2"></label>
              <div className="text-center text-black text-sm pb-4">
                <div className="text-bold-700 font-bold text-blue text-2xl">
                  E-Meterai Dokumen
                </div>
                Saya menyetujui pembubuhan meterai digital <br /> untuk dokumen
                ini.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
