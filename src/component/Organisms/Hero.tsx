import Container from "../Atoms/Container";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-120  items-center bg-cover bg-no-repeat bg-center px-5 py-16 text-white sm:min-h-137.5 sm:px-8 sm:py-20 md:min-h-150 md:bg-position-[center_52%] lg:min-h-162.5 lg:px-[8%] lg:pt-17.5 lg:pb-37.5"
      style={{
        backgroundImage: `
      linear-gradient(90deg,#052a27cc,#052a2720),
      url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=2000&q=90')
    `,
      }}
    >
      <Container className="pt-16 pb-28">
        <h1 className="mb-6 font-serif text-5xl leading-[1.1] tracking-tight md:text-7xl">
          Discover your perfect
          <br />
          stay in <em className="text-amber-100">Sri Lanka.</em>
        </h1>
        <p className="text-sm leading-8 md:text-base">
          Find and book the best accommodation
          <br />
          across the island
        </p>
        <a
          href="#stays"
          className="mt-8 inline-flex items-center gap-3 border-b border-white/50 pb-2 text-sm"
        >
          Explore the collection 
        </a>
      </Container>
    </section>
  );
}
