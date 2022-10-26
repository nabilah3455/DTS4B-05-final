import React from "react";

export default function BeritaTranding({ beritaTerbaru }) {
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
      <h1 className="font-bold text-5xl berita-new mb-4 mt-20 uppercase">
        Berita Terkini
      </h1>
      <div className="grid grid-cols-2 gap-4 w-full">
        {beritaTerbaru.slice(0, 4).map((el, index) => {
          return (
            <div key={index} className={`${index === 0 ? "row-span-3" : ""}`}>
              <button
                className="text-left focus:outline-none"
                onClick={() => openLink(el.link)}
              >
                <div className={`${index !== 0 ? "flex" : ""}`}>
                  <img
                    src={el.image.small}
                    alt='...'
                    width={index !== 0 ? "200" : "100%"}
                    height={index !== 0 ? "80" : ""}
                    className="mr-4"
                  />
                  <div className={`${index !== 0 ? "flex-row" : ""}`}>
                    <span className="text-light text-xs italic">
                      {formatter.format(Date.parse(el.isoDate))}
                    </span>
                    <br />
                    <h3 className="font-bold text-2xl justify-items-auto">
                      {el.title}
                    </h3>
                    <br />
                    {index === 0 ? (
                      <p className="text-sm">{el.content}</p>
                    ) : null}
                  </div>
                </div>
              </button>
              {index === 0 || index === 3 ? null : <hr className="mt-3" />}
            </div>
          );
        })}
      </div>
    </>
  );
}
