import Header from "../../../components/Header";
const NewsCard = ({ article }) => {
  return (
    <div className="carouselSlide">
      <Header headerText="Daily News" />
      <h3 className="slideText">{article.title}</h3>
      <a href={article.url} target="_blank" className="newsImageContainer">
        <img className="newsImage" src={article.urlToImage} alt="Article Img" />
      </a>
    </div>
  );
};

export default NewsCard;
