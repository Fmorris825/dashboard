import { Card, Row } from "antd";
import LinkedIn from "./ContactPNGs/Linked.png";
import Github from "./ContactPNGs/Github.png";

const { Meta } = Card;

const ContactPage = () => {
  return (
    <div>
      <Row>
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
      </Row>
      <Row>
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
                Fred's LinkedIn
              </a>
            }
            description="https://www.github.com"
          />
        </Card>{" "}
      </Row>
    </div>
  );
};

export default ContactPage;
