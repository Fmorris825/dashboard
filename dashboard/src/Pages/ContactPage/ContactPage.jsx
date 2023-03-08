import { Card, Row } from "antd";
import LinkedIn from "./ContactPNGs/Linked.png";
import Github from "./ContactPNGs/Github.png";
import Portfolio from "./ContactPNGs/PortfolioThumbnail.png";
import Resume from "./ContactPNGs/ResumeThumbnail.png";
import "./ContactPage.css";
import ContactData from "../../ContactData";

const { Meta } = Card;

const ContactPage = () => {
  return (
    <div>
      <Row className="contactContainer Container">
        {ContactData.contactResources.map((resource) => {
          return (
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={<img alt={resource.imgAlt} src={resource.imgSrc} />}
            >
              <Meta
                title={
                  <a href={resource.href} target="_blank">
                    Fred's LinkedIn
                  </a>
                }
                description={resource.description}
              />
            </Card>
          );
        })}
      </Row>
    </div>
  );
};

export default ContactPage;
