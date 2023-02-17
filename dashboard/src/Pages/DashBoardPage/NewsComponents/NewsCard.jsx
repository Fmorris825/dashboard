const NewsCard = ({ article }) => {
  const ImgShort = article.files[0];

  return (
    <div>
      <h3 className="carouselSlide">{article.articlesName}</h3>
      {/* <img src={ImgShort.urlCdn} alt="Article Img" /> */}
    </div>
  );
};

export default NewsCard;
