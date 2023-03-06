import axios from "axios";

async function getRequest(url, param, header, setDataFunciton) {
  try {
    const response = await axios.get(url, { params: param, headers: header });
    setDataFunciton(response.data);
    if (response.status === 200) {
      console.log(response);
    }
  } catch (error) {
    console.log(error.response.data);
  }
}

export default { getRequest };

// Weather API Request //
// async function getWeather() {
//   try {
//     const response = await axios.get(
//       "https://yahoo-weather5.p.rapidapi.com/weather",
//       {
//         params: { location: "Irving", format: "json", u: "f" },
//         headers: {
//           "X-RapidAPI-Key":
//             "e79d90cae2msh5521f68907c95b5p178094jsncb7add5f2fc5",
//           "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
//         },
//       }
//     );
//     setYahooWeather(response.data);
//     setIsLoading(true);
//     if (response.status === 200) {
//       console.log(response);
//     }
//   } catch (error) {
//     console.log(error.response.data);
//   }
// }

// News API Request //
// async function getNews() {
//   try {
//     const response = await axios.get(
//       `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${keys.newsApiKey}`
//     );
//     setNews(response.data);
//     if (response.status === 200) {
//       console.log(response);
//     }
//   } catch (error) {
//     console.log(error.response.data);
//   }
// }
