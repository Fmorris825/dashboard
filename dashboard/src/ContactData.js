import Portfolio from "./Pages/ContactPage/ContactPNGs/PortfolioThumbnail.png";
import LinkedIn from "./Pages/ContactPage/ContactPNGs/Linked.png";
import Github from "./Pages/ContactPage/ContactPNGs/Github.png";
import Resume from "./Pages/ContactPage/ContactPNGs/ResumeThumbnail.png";

const contactResources = [
  {
    imgAlt: "Portolio",
    href: "https://portfolio-v1-mocha.vercel.app/",
    description: "Fred Morris Portfolio",
    imgSrc: Portfolio,
    anchorText: "Fred's Portfolio",
  },
  {
    imgAlt: "LinkedIn",
    href: "https://www.linkedin.com/in/fredmorrisdeveloper/",
    description: "https://www.linkedin.com",
    imgSrc: LinkedIn,
    anchorText: "Fred's LinkedIn",
  },
  {
    imgAlt: "Github",
    href: "https://github.com/Fmorris825",
    description: "https://www.github.com",
    imgSrc: Github,
    anchorText: "Fred's Github",
  },
  {
    imgAlt: "Resumé",
    href: "https://drive.google.com/file/d/1gL8skql4yXF-OOviznoia--6UlTfQGtC/view?usp=sharing",
    description: "Fred Morris Resumé",
    imgSrc: Resume,
    anchorText: "Fred's Resumé",
  },
];

export default {
  contactResources,
};
