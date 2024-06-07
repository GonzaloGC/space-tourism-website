import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Title } from "../../components/Title/Title";
import "./Technology.css";

type technologyProps = {
  image: string;
  name: string;
  description: string;
  active1: string
  active2: string
  active3: string
};

export const Technology = (props: technologyProps) => {
  const { image, name, description, active1, active2, active3 } = props;

  return (
    <section className="container-bg-tech">
      <Header marca="" marca2="" marca3="" marca4="div-link-3" />
      <div className="container-tech">
        <div className="continer-title-tech">
          <Title numTitle="03" title="SPACE LAUNCH 101" />
        </div>
        <div className="container-img-tech">
          <img
            className="img-launch-tech"
            src={image}
            alt="Image of the rockets that will be used for the trip"
          />
        </div>
        <div className="container-info-tech">
          <ul className="container-links-tech">
            <li>
              <Link className={`${active1} hover-circle`} to="/technology/launch">1</Link>
            </li>
            <li>
              <Link className={`${active2} hover-circle`} to="/technology/spaceport">2</Link>
            </li>
            <li>
              <Link className={`${active3} hover-circle`} to="/technology/spacecapsule">3</Link>
            </li>
          </ul>
          <div className="container-title-p">
            <h2>THE TERMINOLOGY…</h2>
            <h1>{name}</h1>
            <p className="paragraph-tech">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
