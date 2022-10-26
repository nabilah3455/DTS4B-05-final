import React from "react";

export default function Kategori({ tipe }) {

  const getKategori = (id) => {
    console.log(id)
  }
  return (
    <div className="relative flex flex-col min-w-0 w-full mb-6 md:mt-0 vertical-line">
      <h3 className="text-xl mb-2 font-semibold leading-normal uppercase ml-4 text-red">
        Kategori
      </h3>
      <div className="flex flex-wrap">
        {tipe.map((el, index) => {
          return (
            <div
              key={index}
              className="ml-4 tipe-label mt-4 rounded-lg text-center cursor-pointer"
              onClick={() => getKategori(el.id)}
            >
              {el.data}
            </div>
          );
        })}
      </div>
    </div>
  );
}
