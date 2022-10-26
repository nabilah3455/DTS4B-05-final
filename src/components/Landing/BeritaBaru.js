import React from "react";

export default function BeritaBaru({ allData }) {
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
    <div className="no-scroll">
      <h2 className="uppercase text-2xl font-bold text-red">Berita Terbaru</h2>
      <div
        className=" w-12/12 px-12 mt-6 md:px-10 mr-auto ml-auto flex"
        style={{ overflowX: "scroll" }}
      >
        {allData?.slice(0, 10).map((el, index) => {
          return (
            <div
              className="relative flex flex-col mr-4 break-words mb-6 shadow-lg rounded-lg cursor-pointer"
              key={index}
              onClick={() => openLink(el.link)}
            >
              <img
                alt="..."
                src={el.image.large}
                className="w-full align-middle rounded-t-lg"
                width={50}
                style={{
                  minHeight: "40%",
                  objectFit: "fill",
                  maxHeight: "40%",
                }}
              />
              <blockquote
                className="p-4 mb-4 bg-white"
                style={{ width: "16rem" }}
              >
                <span className="text-xs italic">
                  {formatter.format(Date.parse(el.isoDate))}
                </span>
                <h4 className="text-md font-bold">{el.title}</h4>
                <p className="text-sm font-light mt-2">{el.content}</p>
              </blockquote>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}
