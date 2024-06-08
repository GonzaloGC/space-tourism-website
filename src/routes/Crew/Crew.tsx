import { Header } from "../../components/Header/Header";
import { Title } from "../../components/Title/Title";
import { Link } from "react-router-dom";
import "./Crew.css";

type crewProps = {
  role: string;
  name: string;
  info: string;
  image: string;
  circle1: string;
  circle2: string;
  circle3: string;
  circle4: string;
};

export const Crew = (props: crewProps) => {
  const { role, name, info, image, circle1, circle2, circle3, circle4 } = props;

  return (
    <>
      <section className="container-root-crew">
        <Header marca="" marca2="" marca3="div-link-2" marca4="" />
        <div className="container-crew">
          <div className="container-info-crew">
            <Title numTitle="02" title="MEET YOUR CREW" />
            <div className="container-name-and-info">
              <div className="container-cargo-name">
                <h3 className="cargo-crew">{role}</h3>
                <h2 className="name-crew">{name}</h2>
              </div>
              <p className="info-crew">{info}</p>
            </div>
            <ul className="container-circles-nav">
              <Link className={`circle ${circle1}`} to="/crew/douglashurley">
                <li></li>
              </Link>
              <Link className={`circle ${circle2}`} to="/crew/mark">
                <li></li>
              </Link>
              <Link className={`circle ${circle3}`} to="/crew/Victor">
                <li></li>
              </Link>
              <Link className={`circle ${circle4}`} to="/crew/anousheh">
                <li></li>
              </Link>
            </ul>
          </div>

          <div className="container-img-crew">
            <img
              className="img-dauglas"
              src={image}
              alt="image with a crew member of the trip to space"
            />
            <div className="img-blur-out">
              <div className="img-blur-in"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
