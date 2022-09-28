import axios from "axios";
export const getAllQuery = async () => {
  let query;
  try {
    query = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    return query;
  } catch (err) {
    return Promise.reject(err.response.data ? err.response.data : query);
  }
};
