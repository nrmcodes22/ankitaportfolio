import Hero from "./Hero";
import TestPapers from "./TestPapers";
import Assignments from "./Assignments";
import Videos from "./Videos";
import Feedback from "./Feedback";
import Contact from "./Contact";

import Mywork from "./mywork";
export default function Home() {
  return (
    <>
      <Hero />

     

      <section id="mywork">
  <Mywork />
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