/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import axios from "axios";
import Loading from "components/Loading/Loading";
import BeritaTranding from "components/Landing/BeritaTranding";
import CariBerita from "components/Landing/CariBerita";
import BeritaBaru from "components/Landing/BeritaBaru";
import BeritaTeknologi from "components/Landing/BeritaTeknologi";
import BeritaLainnya from "components/Landing/BeritaLainnya";
import Kategori from "components/Landing/Kategori";

export default function Index() {
  const [allData, setAllData] = useState([]);
  const [beritaTerbaru, setBeritaTerbaru] = useState([]);
  const [beritaTeknologi, setBeritaTetknologi] = useState([]);
  const [beritaSport, setBeritaSport] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    semuaBerita();
    beritaLatest();
    getTeknologi();
    getSport();
  }, []);

  const semuaBerita = () => {
    axios
      .get(`https://berita-indo-api.vercel.app/v1/okezone-news`)
      .then((res) => {
        setAllData(res.data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const beritaLatest = () => {
    axios
      .get(`https://berita-indo-api.vercel.app/v1/okezone-news/breaking`)
      .then((res) => {
        setBeritaTerbaru(res.data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const getTeknologi = () => {
    axios
      .get(`https://berita-indo-api.vercel.app/v1/okezone-news/techno`)
      .then((res) => {
        setBeritaTetknologi(res.data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const getSport = () => {
    axios
      .get(`https://berita-indo-api.vercel.app/v1/okezone-news/sport`)
      .then((res) => {
        setBeritaSport(res.data.data);
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

  return (
    <>
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full px-4">
            <div className="pt-32 sm:pt-0">
              <BeritaTranding beritaTerbaru={beritaTerbaru} />
            </div>
          </div>
        </div>
      </section>

      <hr className="mx-auto line-sub" style={{ marginTop: "100px" }} />
      <CariBerita />
      <section className="mt-20 md:mt-30 pb-40 relative">
        <div className="container mx-auto">
          <BeritaBaru allData={allData} />
          <div className="flex flex-row items-center bg-blue rounded-lg mt-12">
            <div className="w-full md:w-12/12 px-12 py-6">
              <BeritaTeknologi beritaTeknologi={beritaTeknologi} />
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap">
            <div className="w-full md:w-8/12 md:px-4 mr-auto mt-16">
              <BeritaLainnya beritaSport={beritaSport} />
            </div>
            <div className="w-full md:w-4/12 mt-32">
              <Kategori tipe={tipe} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
