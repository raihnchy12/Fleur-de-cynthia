import React from "react";
import logoFC from "../assets/LogoFc.png";

export default function LogoEmblem({ className = "h-9 w-auto" }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 overflow-hidden rounded-full ${className}`}>
      <img
        src={logoFC}
        alt="Logo FC Fleur de Cynthia"
        className="h-full w-full object-cover object-center scale-100"
      />
    </div>
  );
}