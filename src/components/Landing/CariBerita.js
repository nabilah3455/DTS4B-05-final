import React, { useState } from "react";
import { useHistory } from "react-router";

export default function CariBerita() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const histori = useHistory()

  const searchNews = () => {
    histori.push('/admin/cari_berita='+search)
  }

  return (
    <>
      <section className="relative pt-12 text-center">
        <div className="">
          <label className="text-red font-bold text-3xl mb-4">
            Cari Berita
          </label>
          <div className="mx-auto">
            <input
              type="text"
              className="search-news"
              onChange={handleSearch}
            />
            <button className="focus:outline-none" onClick={searchNews}>
              <i className="fas fa-search search-icon"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
