import React, { useRef } from "react";
import Hero from "../Componets/Hero/Hero";
import Popular from "../Componets/Popular/Popular";
import Offers from "../Componets/Offers/Offers";
import NewCollections from "../Componets/NewCollections/NewCollections";
import NewsLetter from "../Componets/NewsLetter/NewsLetter";

export default function Shop() {
  const newsCollectionsRef = useRef(null);

  const scrollToNewsCollections = () => {
    newsCollectionsRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
      <Hero scrollToNewsCollections={scrollToNewsCollections} />
      <Popular />
      <Offers />
      <div ref={newsCollectionsRef}>
        <NewCollections />
      </div>
      <NewsLetter />
    </div>
  );
}
