import axios from "axios";
import CariBerita from "components/Landing/CariBerita";
import React, { useEffect, useState } from "react";

// components
import { useParams } from "react-router";
import Icon from "../../assets/img/empty.png";

export default function Berita() {
  const [allData, setAllData] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const [dataTgl, setDataTgl] = useState("");
  const [loading, setLoading] = useState(true);

  const openLink = (link) => {
    window.open(link, "_blank").focus();
  };

  let { tipe_kategori } = useParams();

  useEffect(() => {
    getData();
  }, []);

  const { judul } = useParams();

  const getData = () => {
    axios
      .get(`https://berita-indo-api.vercel.app/v1/okezone-news`)
      .then((res) => {
        setAllData(res.data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const tipe = [
    {
      id: "breaking",
      data: "Berita Terkini",
    },
    {
      id: "sport",
      data: "Olahraga",
    },
    {
      id: "economy",
      data: "Ekonomi",
    },
    {
      id: "lifestyle",
      data: "Gaya Hidup",
    },
    {
      id: "celebrity",
      data: "Selebriti",
    },
    {
      id: "bola",
      data: "Sepak Bola",
    },
    {
      id: "techno",
      data: "Teknologi",
    },
  ];

  const handleTgl = (e) => {
    const tgl = e.target.value;
    setDataTgl(tgl);
  };

  const resetTgl = () => {
    setDataTgl("");
  };

  return (
    <>
      <div className="container mx-auto overflow-hidden pb-20">
        <h1 className="text-5xl font-bold mt-32 text-center uppercase mb-12">
          {judul}
        </h1>
        <hr />
        <CariBerita />
        <div className="mt-32 text-right">
          <input
            type="date"
            className="filter-tgl"
            value={dataTgl}
            onChange={handleTgl}
          />
          {dataTgl ? (
            <button className="ml-4" onClick={resetTgl}>
              Reset
            </button>
          ) : null}
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-8/12 md:px-4 mr-auto mt-6">
            {allData
              .filter(
                (el) =>
                  el.title.toLowerCase().includes(judul) &&
                  el.isoDate.includes(dataTgl)
              )
              .map((el, index) => {
                return (
                  <>
                  {console.log(allData.length)}
                    {el[index] === null? (
                      <img src={Icon} />
                    ) : (
                      <div key={index} className="mt-4">
                        <button
                          className="text-left focus:outline-none"
                          onClick={() => openLink(el.link)}
                        >
                          <div className="flex">
                            <div className="flex-row">
                              <br />
                              <h3 className="font-bold text-2xl justify-items-auto">
                                {el.title}
                              </h3>
                              <br />
                              <p className="text-sm">{el.content}</p>
                            </div>
                            <img
                              alt="..."
                              src={el.image.small}
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
                    )}
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
