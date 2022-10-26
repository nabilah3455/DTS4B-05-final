import React from "react";

export default function BeritaLainnya({ beritaSport }) {
  const formatter = new Intl.DateTimeFormat("id-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  const openLink = (link) => {
    window.open(link, "_blank").focus();
  };
  return (
    <>
      <h3 className="text-3xl mb-2 font-semibold leading-normal uppercase text-red">
        Berita Lainnya
      </h3>
      {beritaSport.slice(0, 10).map((el, index) => {
        return (
          <div key={index} className="mt-4">
            <button
              className="text-left focus:outline-none"
              onClick={() => openLink(el.link)}
            >
              <div className="flex">
                <div className="flex-row">
                  <span className="text-light text-xs italic text-black">
                    {formatter.format(Date.parse(el.isoDate))}
                  </span>
                  <br />
                  <h3 className="font-bold text-2xl justify-items-auto">
                    {el.title}
                  </h3>
                  <br />
                  <p className="text-sm">{el.content}</p>
                </div>
                <img
                  src={el.image.small}
                  alt='...'
                  className="text-right ml-3"
                  style={{
                    maxWidth: "30%",
                    minWidth: "30%",
                    maxHeight: "10%",
                    minHeight: "10%",
                  }}
                />
              </div>
            </button>
            <hr className="mt-3" />
          </div>
        );
      })}
    </>
  );
}
