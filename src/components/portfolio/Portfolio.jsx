import { useEffect, useState } from "react";
import PortfolioList from "../portfoliolist/Portfoliolist";
import "./portfolio.scss";
import { ExternalLink } from "react-external-link";
import {
  featuredPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
      info: "Featured"
    },
    
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="projects">
      <h1>Projects</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <ExternalLink href={d.url}>
            <div className="item">
              <img
                src={d.img}
                alt=""
              />
              <h3><span className="titlespan">{d.title}</span> <br /> <br /> {d.info} <br /> <span>{d.tech}</span> <br /><br />
              <ExternalLink href={d.src} className="src-code">View Source Code</ExternalLink></h3>
            </div>
          </ExternalLink>
        ))}
      </div>
    </div>
  );
}
