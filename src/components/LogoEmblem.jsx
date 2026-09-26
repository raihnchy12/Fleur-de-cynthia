import React from "react";
import logoFC from "../assets/LogoFc.png"; // Sesuaikan path lokasi gambarmu

export default function LogoEmblem({ className = "h-20 w-20" }) {
  return (
    <div className={`relative overflow-hidden rounded-full ${className}`}>
      <img
        src={logoFC}
        alt="Logo FC Fleur de Cynthia"
        className="h-full w-full object-cover object-center scale-[1.78]"
      /* h-20 w-20 memperbesar lingkaran dasar menjadi 80px x 80px.
         scale-[1.85] memastikan gambar di-zoom lebih pas agar teks bawah 
         dan background kartu benar-benar terpotong rapi. */
      />
    </div>
  );
}