import "./Home.css";
import "@fontsource/bellefair";
import "@fontsource/barlow";
import "@fontsource/barlow-condensed";
import { Header } from "../../components/Header/Header";


export const Home = () => {

  return (
    <>
      <section className="container-bg" >
        <Header />
        <section className="container-home">
          <main className="container-main">
            <span>SO, YOU WANT TO TRAVEL TO</span>
            <h1 className="title-main">SPACE</h1>
            <p className="paragraph-main">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </main>
          <section className="container-button-circle">
            <button className="button-cicle">
              <a href="">EXPLORE</a>
            </button>
          </section>
        </section>
      </section>
    </>
  );
};
