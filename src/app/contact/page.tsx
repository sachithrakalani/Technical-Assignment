import { buttonStyles } from "@/component/Atoms/Button";
import Template from "@/component/Templates/Template";
import Link from "next/link";



export default function Contact() {
  return (
    <Template
      eyebrow="LET’S TALK TRAVEL"
      title="Every great escape starts with a hello."
    >
      <p>
        Explore our six sample stays and use the booking request form on a
        property page to try the experience.
      </p>
      <h2 className="font-serif text-2xl text-emerald-950">
        Contact information
      </h2>
      <p>
        Colombo, Sri Lanka
        <br />
        hello@lankastayz.example
      </p>
      <p className="text-xs">
        This is a demonstration address and is not monitored. No customer
        support or real bookings are provided by this prototype.
      </p>
      <Link href="/explore" className={buttonStyles}>
        Find your stay ↗
      </Link>
    </Template>
  );
}
