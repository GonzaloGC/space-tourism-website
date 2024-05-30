import "./Destination.css";
import { Link, Outlet } from "react-router-dom";
// import { Nav } from "../../routes/Nav";
import { Header } from "./Header";

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
        <Header />
        <section className="container-destination">
          <div className="container-title-img">
            <h1 className="container-title">
              <span>01</span>
              <span>PICK YOUR DESTINATION</span>
            </h1>
            <div className="container-img-moon">
              <img className="img-moon" src={imgPlanet} alt="" />
            </div>
          </div>
          <div className="container-info-moon">
            <aside className="container-aside">
              <ul className="container-li">
                <li>
                  <Link to="/destination">MOON</Link>
                </li>
                <li>
                  <Link to="/destination/destinationmoon">MARS</Link>
                </li>
                <li>
                  <Link to="#">EUROPA</Link>
                </li>
                <li>
                  <Link to="#">TITAN</Link>
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
