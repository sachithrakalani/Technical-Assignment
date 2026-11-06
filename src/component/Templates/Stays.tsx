"use client";
import { useState } from "react";
import Link from "next/link";
import { emptySearch } from "@/lib/stays";
import Hero from "../Organisms/Hero";
import Container from "../Atoms/Container";
import SearchForm from "../Organisms/SearchForm";
import PropertyCollection from "../Organisms/PropertyCollection";

export default function Stays({ explore = false }: { explore?: boolean }) {
  const [search, setSearch] = useState(emptySearch);
  return (
    <main>
      {!explore && <Hero />}
      <Container>
        <div className={explore ? "pt-10" : "relative z-10 -mt-12"}>
          <SearchForm
            onSearch={(values) => {
              setSearch(values);
              document
                .getElementById("stays")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
        <PropertyCollection
          destination={search.destination}
          guests={search.guests}
          explore={explore}
          onDestination={(destination) => setSearch({ ...search, destination })}
          onReset={() => setSearch(emptySearch)}
        />
      </Container>
    </main>
  );
}
