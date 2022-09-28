import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCrypto } from "../store/features/cryptos/cryptosSlice";
import Navbar from "../Components/Navbar/Navbar";
import Rechart from "../Components/Rechart/Rechart";
import ArrowLeftLineIcon from "@rsuite/icons/ArrowLeftLine";
const styles = {
  fullContainer:
    "w-full h-full mt-16 relative flex justify-center items-center animate__animated animate__fadeInLeft ",
  container:
    "w-[80%] h-[80%] md:flex justify-between items-center border border-white shadow-2xl rounded-xl p-4 md:p-8 capitalize ",
  leftContainer: " flex flex-col gap-4 text-start ",
  rightContainer: "md:w-1/2 ",
  arrow:
    "absolute hidden md:flex  left-8 text-5xl border-2 hover:border-blue-300 rounded-full",
  title: "md:text-[75px]",
  titleContainer: "flex flex-col md:flex-row gap-4 items-start",
  titleSpan: 'flex items-start',
  symbol: "text-2xl text-gray-400 uppercase",
  image: "w-16 object-contain",
  price: "text-5xl md:ml-16 mt-6  tracking-wider text-green-500",
  listLeftSide:
    "w-full h-full mt-4 ml-8 text-2xl text-gray-400 flex flex-col gap-4 ",
};
function DinamicCoin() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { cryptoSelected } = useSelector((state) => state.cryptos);

  useEffect(() => {
    dispatch(selectCrypto(id));
  }, []);

  return (
    <>
      <Navbar display="hidden" />
      {cryptoSelected && (
        <main className={styles.fullContainer}>
          <Link to="/">
            <ArrowLeftLineIcon className={styles.arrow} />
          </Link>
          <div className={styles.container}>
            <div className={styles.leftContainer}>
              <section className={styles.titleContainer}>
                <span className={styles.titleSpan}>
                  <img
                    src={cryptoSelected.image}
                    alt="crypto image"
                    className={styles.image}
                  />
                  <h1 className={styles.title}>{cryptoSelected.id}</h1>
                </span>
                <p className={styles.symbol}>({cryptoSelected.symbol})</p>
              </section>
              <h2 className={styles.price}>${cryptoSelected.current_price}</h2>
              <div>
                <ul className={styles.listLeftSide}>
                  <li>
                    Max 24hs:{" "}
                    <span className="text-green-500">
                      ${cryptoSelected.high_24h.toLocaleString("es-ar")}
                    </span>
                  </li>
                  <li>
                    Min 24hs:{" "}
                    <span className="text-red-500">
                      ${cryptoSelected.low_24h.toLocaleString("es-ar")}
                    </span>
                  </li>
                  <li>
                    Market Cap: $
                    {cryptoSelected.market_cap.toLocaleString("es-ar")}
                  </li>
                  <li>Total Volume: ${cryptoSelected.total_volume}</li>
                  <li></li>
                </ul>
              </div>
            </div>
            <div className={styles.rightContainer}>
              <Rechart />
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default DinamicCoin;
