import Hero from "./Hero";
import TestPapers from "./TestPapers";
import Assignments from "./Assignments";
import Videos from "./Videos";
import Feedback from "./Feedback";
import Contact from "./Contact";


export default function Home() {
  return (
    <>
      <Hero />

     

      <section id="test-papers">
  <TestPapers />
</section>

<section id="assignments">
  <Assignments />
</section>

<section id="videos">
  <Videos />
</section>

<section id="feedback">
  <Feedback />
</section>

<section id="contact">
  <Contact />
</section>
    </>
  );
}