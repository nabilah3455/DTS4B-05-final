import React from "react";

export default function BeritaTeknologi({ beritaTeknologi }) {
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
      <h1 className="text-white text-2xl font-bold uppercase">Teknologi</h1>
      <div className="flex mt-6">
        {beritaTeknologi.slice(0, 4).map((el, index) => {
          return (
            <div
              className="relative flex flex-col mr-4 break-words mb-6 cursor-pointer"
              key={index}
              onClick={() => openLink(el.link)}
            >
              <img
                alt="..."
                src={el.image.large}
                className="w-full align-middle rounded mb-3"
                style={{
                  minHeight: "40%",
                  maxHeight: "40%",
                  minWidth: "100%",
                  maxWidth: "100%",
                  objectFit: "fill",
                }}
              />
              <blockquote className="mb-4 text-white" key={index}>
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
    </>
  );
}
