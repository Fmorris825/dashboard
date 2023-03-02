import { Card, Row } from "antd";
import LinkedIn from "./ContactPNGs/Linked.png";
import Github from "./ContactPNGs/Github.png";
import Portfolio from "./ContactPNGs/PortfolioThumbnail.png";
import Resume from "./ContactPNGs/ResumeThumbnail.png";
import "./ContactPage.css";

const { Meta } = Card;

const ContactPage = () => {
  return (
    <div>
      <Row className="contactContainer">
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="LinkedIn" src={LinkedIn} />}
        >
          <Meta
            title={
              <a
                href="https://www.linkedin.com/in/fredmorrisdeveloper/"
                target="_blank"
              >
                Fred's LinkedIn
              </a>
            }
            description="https://www.linkedin.com"
          />
        </Card>{" "}
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="Github" src={Github} />}
        >
          <Meta
            title={
              <a href="https://github.com/Fmorris825" target="_blank">
                Fred's Github
              </a>
            }
            description="https://www.github.com"
          />
        </Card>{" "}
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="Portolio" src={Portfolio} />}
        >
          <Meta
            title={
              <a href="https://portfolio-v1-mocha.vercel.app/" target="_blank">
                Fred's Portfolio Website
              </a>
            }
            description="Fred Morris Portfolio"
          />
        </Card>{" "}
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt="Resumé" src={Resume} />}
        >
          <Meta
            title={
              <a
                href="https://drive.google.com/file/d/1gL8skql4yXF-OOviznoia--6UlTfQGtC/view?usp=sharing"
                target="_blank"
              >
                Fred's Resumé
              </a>
            }
            description="Fred Morris Resume"
          />
        </Card>{" "}
      </Row>
    </div>
  );
};

export default ContactPage;
