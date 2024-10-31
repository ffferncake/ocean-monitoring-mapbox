import axios from "axios";

export const api_getTideHeight = async () => {
  const URL = `https://www.khoa.go.kr/api/oceangrid/tideObsPre/search.do?ServiceKey=${process.env.NEXT_PUBLIC_OCEAN_TOKEN}&ObsCode=DT_0001&Date=20241031&ResultType=json`;
  try {
    const { data } = await axios.get(URL, {
      headers: {},
    });
    console.log("api_getTideHeight success", data);
    return data;
  } catch (error) {
    console.log("api_getTideHeight fail", error);
    return error;
  }
};
