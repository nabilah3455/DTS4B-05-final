import axios from "axios";
import CariBerita from "components/Landing/CariBerita";
import Loading from "components/Loading/Loading";
import React, { useEffect, useState } from "react";
import Icon from '../../assets/img/empty.png'

// components
import { useParams } from "react-router";

export default function Settings() {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataTgl, setDataTgl] = useState("");

  const openLink = (link) => {
    window.open(link, "_blank").focus();
  };

  let { tipe_kategori } = useParams();

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = () => {
    axios
      .get(
        `https://berita-indo-api.vercel.app/v1/okezone-news/` + tipe_kategori
      )
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

  const hasil = allData.filter((el) =>
    el.isoDate.slice(0, 10).includes(dataTgl)
  );

  console.log(hasil.length);

  return (
    <>
      {loading ? <Loading /> : null}
      <div className="container mx-auto overflow-hidden pb-20">
        <h1 className="text-5xl font-bold mt-32 text-center mb-12">
          {tipe.map((el) => (el.id === tipe_kategori ? el.data : null))}
        </h1>
        <hr />
        <CariBerita />
        <div className="mt-32 text-right">
          <span className="mr-2">Cari bedasarkan tanggal</span>
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
          <div className="w-full md:w-8/12 md:px-4 mr-auto mt-12">
            {hasil.map((el, index) => {
              return (
                <>
                  {hasil.length === 0 && dataTgl ? (
                    <div key={index} className="mt-4">
                    <img src={Icon} alt='...' />
                    </div>
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
