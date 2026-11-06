import { buttonStyles } from "@/component/Atoms/Button";
import Template from "@/component/Templates/Template";
import Link from "next/link";


export default function About() {
  return (
    <Template
      eyebrow="OUR ISLAND, YOUR ESCAPE"
      title="A warmer way to discover Sri Lanka."
    >
      <p>
        Lanka Stayz brings together characterful villas, peaceful holiday homes,
        city apartments and intimate boutique stays across our island.
      </p>
      <p>
        We believe the right place changes the whole journey. From a morning in
        the tea hills to an evening by the southern sea, our collection helps
        you find a base that feels like you.
      </p>
      <Link href="/explore" className={buttonStyles}>
        Explore our sample collection ↗
      </Link>
      <p className="text-xs">
        Lanka Stayz is a technical assessment prototype. All properties, prices
        and ratings are fictional demonstration content.
      </p>
    </Template>
  );
}
