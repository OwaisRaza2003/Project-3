import Header from '../components/header';
import AboutMe from '../components/AboutMe';
import Skills from '../components/skills';
import Journey from '../components/journey';
import Contact from '../components/contact';

export default function Home() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Skills />
      <Journey />
      <Contact />
    </div>
  );
}
