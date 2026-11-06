import Container from "@/component/Atoms/Container";
import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 pt-14 text-stone-200">
      <Container>
        <div className="grid gap-9 pb-10 text-xs leading-7 text-stone-300 md:grid-cols-[2fr_1fr_1.4fr]">
          <div>
            <strong className="text-xl tracking-widest text-white">
              LANKA STAYZ
            </strong>
            <p>Discover · Stay · Explore</p>
            <p>Your next chapter starts on our island.</p>
          </div>
          <div>
            <h2 className="mb-3 font-semibold text-white">
              Explore the island
            </h2>
            <Link href="/explore" className="block">
              Explore stays
            </Link>
            <Link href="/about" className="block">
              About us
            </Link>
            <Link href="/contact" className="block">
              Contact
            </Link>
          </div>
          <div>
            <h2 className="mb-3 font-semibold text-white">Say hello</h2>
            <p>Colombo, Sri Lanka</p>
            <a href="mailto:hello@lankastayz.example">
              hello@lankastayz.example
            </a>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-all hover:border-white hover:bg-white hover:text-emerald-950"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-all hover:border-white hover:bg-white hover:text-emerald-950"
              >
                <FaFacebook size={18} />
              </a>
            </div>
          </div>
        </div>
        <p className="border-t border-white/15 py-5 text-[10px] leading-5 text-stone-400">
          © 2026 Lanka Stayz. Find and book the best accommodation across the
          island
        </p>
      </Container>
    </footer>
  );
}
