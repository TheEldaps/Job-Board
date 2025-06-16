import Nav from "./Nav";
import Hero from "./Hero";
import { useState } from "react";

export default function NavAndHero() {
  const [showNav, setShowNav] = useState(false);

  return (
    <section>
      <Nav />
      <Hero showNav={showNav} />
    </section>
  );
}
