import { Header } from "../../components/Header/Header";
import { Title } from "../../components/Title";
import "./Crew.css";

export const Crew = () => {
  return (
    <>
      <section className="container-root-crew">
        <Header />
        <div className="container-crew">
          <div className="container-info-crew">
            <Title numTitle="02" title="MEET YOUR CREW" />
            <div className="container-name-and-info">
              <div className="container-cargo-name">
                <h3 className="cargo-crew">Commander</h3>
                <h2 className="name-crew">Douglas Hurley</h2>
              </div>
              <p className="info-crew">
                Douglas Gerald Hurley is an American engineer, former Marine Corps
                pilot and former NASA astronaut. He launched into space for the
                third time as commander of Crew Dragon Demo-2.
              </p>
            </div>
            <ul className="container-circles-nav">
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
            </ul>
          </div>

          <div className="container-img-crew">
            <img
              className="img-dauglas"
              src="/images/crew/image-douglas-hurley.webp"
              alt=""
            />
            <div className="img-blur-out"><div className="img-blur-in"></div></div>
          </div>
        </div>
      </section>
    </>
  );
};
