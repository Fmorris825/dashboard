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
