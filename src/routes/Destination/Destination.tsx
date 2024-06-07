import "./Destination.css";
import { Link, Outlet } from "react-router-dom";
// import { Nav } from "../../routes/Nav";
import { Header } from "../../components/Header/Header";
import { Title } from "../../components/Title/Title";

type propDestination = {
  // style:React.CSSProperties;
  imgPlanet: string;
  namePlanet: string;
  infoPlanet: string;
  avgDistance: string;
  travelTime: string;
};

export const Destination = (props: propDestination) => {
  const { namePlanet, imgPlanet, infoPlanet, avgDistance, travelTime } = props;

  // const bgDestination: React.CSSProperties = {
  //   backgroundImage: "url(background-destination-mobile.jpg)",
  // };

  return (
    <>
      <div id="detail">
        <Outlet />
      </div>
      <section className="container-bg-destination">
        <Header marca="" marca2="div-link-1" marca3="" marca4="" />
        <section className="container-destination">
          <div className="container-title-img">
            <Title numTitle="01" title="PICK YOUR DESTINATION" />
            <div className="container-img-moon">
              <img
                className="img-moon"
                src={imgPlanet}
                alt="Image of one of the planets to which one will travel"
              />
            </div>
          </div>
          <div className="container-info-moon">
            <aside className="container-aside">
              <ul className="container-li">
                <li>
                  <Link to="/destination/moon">MOON</Link>
                </li>
                <li>
                  <Link to="/destination/mars">MARS</Link>
                </li>
                <li>
                  <Link to="/destination/europa">EUROPA</Link>
                </li>
                <li>
                  <Link to="/destination/titan">TITAN</Link>
                </li>
              </ul>
            </aside>
            <div className="text-moon">
              <h2>{namePlanet}</h2>
              <p>{infoPlanet}</p>
            </div>
            <div className="line-moon"></div>
            <div className="info-moon">
              <div className="info-dis-moon">
                <span>AVG. DISTANCE</span>
                <span>{avgDistance}</span>
              </div>
              <div className="info-travel-moon">
                <span>Est. travel time</span>
                <span>{travelTime}</span>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
