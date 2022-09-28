import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllCryptos,
  filterCryptos,
} from "../../store/features/cryptos/cryptosSlice";
import Coin from "../Cards/Coin";
import Navbar from "../Navbar/Navbar";
import TableDescriptions from "./TableDescriptions";

const styles = {
  container: "w-full h-full flex flex-col gap-2 px-6",
};
function CoinsMap() {
  const dispatch = useDispatch();
  const { cryptos } = useSelector((state) => state.cryptos);
  useEffect(() => {
    dispatch(getAllCryptos());
  }, []);

  const arraySearch = (array, keyword) => {
    const searchTerm = keyword.toLowerCase();
    return array.filter((value) => {
      return value.name.toLowerCase().match(new RegExp(searchTerm, "g"));
    });
  };
  const handleChange = async (e) => {
    const { value } = e.target;
    if (value.length > 2) {
      const search = await arraySearch(cryptos, value);
      dispatch(filterCryptos(search));
    } else {
      dispatch(getAllCryptos());
    }
  };

  return (
    <>
      <div className="animate__animated animate__fadeInRight">
        <Navbar message={handleChange} />

        <div className={styles.container}>
          <TableDescriptions />
          {cryptos.length &&
            cryptos.map((crypto) => <Coin key={crypto.id} coin={crypto} />)}
        </div>
      </div>
    </>
  );
}

export default CoinsMap;
