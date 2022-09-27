import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCoins, cryptosSelectors } from "../features/cryptos/cryptosSlice";
import Coin from "../Cards/Coin";
import Navbar from "../Navbar/Navbar";
import TableDescriptions from "./TableDescriptions";

const styles = {
  container: "w-full h-full flex flex-col gap-2 px-6",
};
function CoinsMap() {
  const dispatch = useDispatch();
  const allCryptos = useSelector(cryptosSelectors.selectAll);
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState(null);

  useEffect(() => {
    dispatch(getCoins());
    if (message === "") {
      setSearch(null);
    }
  }, [message]);

  const handleChange = (e) => {
    setMessage(e.target.value);
    setSearch(
      allCryptos.filter((crypto) =>
        crypto.name.toLowerCase().includes(message.toLowerCase())
      )
    );
  };

  return (
    <>
      <Navbar message={handleChange} search={message} />
      <div className={styles.container}>
        <TableDescriptions />
        {search
          ? search.map((obj) => <Coin key={obj.id} coin={obj} />)
          : allCryptos.map((crypto) => <Coin key={crypto.id} coin={crypto} />)}
      </div>
    </>
  );
}

export default CoinsMap;
