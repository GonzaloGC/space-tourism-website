import "./Destination.css";

export const Destination = () => {
  const imgContainDestin = {
    backgroundImage: "url(background-destination-mobile.jpg)",
  };

  return (
    <section className="container-destination" style={imgContainDestin}>
      <div className="container-title-img">
        <h1 className="container-title">
          <span>01</span>
          <span>PICK YOUR DESTINATION</span>
        </h1>
        <div className="container-img-moon">
          <img className="img-moon" src="/image-moon.webp" alt="" />
        </div>
      </div>
      <div className="container-info-moon">
        <aside className="container-aside">
          <ul className="container-li">
            <li>
              <a href="#">MOON</a>
            </li>
            <li>
              <a href="#">MARS</a>
            </li>
            <li>
              <a href="#">EUROPA</a>
            </li>
            <li>
              <a href="#">TITAN</a>
            </li>
          </ul>
        </aside>
        <div className="text-moon">
          <h2>MOON</h2>
          <p>
            See our planet as you’ve never seen it before. A perfect relaxing trip
            away to help regain perspective and come back refreshed. While you’re
            there, take in some history by visiting the Luna 2 and Apollo 11
            landing sites.
          </p>
        </div>
        <div className="line-moon"></div>
        <div className="info-moon">
          <div className="info-dis-moon">
            <span>AVG. DISTANCE</span>
            <span>384,400 km</span>
          </div>
          <div className="info-travel-moon">
            <span>Est. travel time</span>
            <span>3 days</span>
          </div>
        </div>
      </div>
    </section>
  );
};
