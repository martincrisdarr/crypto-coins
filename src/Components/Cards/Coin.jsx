import React from "react";

const styles = {
  container:
    "w-full h-16 grid grid-cols-7 text-gray-400 items-center text-lg px-6 border border-slate-500 hover:border-blue-400 rounded-xl",
  coin: "flex gap-2 items-center font-semibold",
  coinImage: "w-6"
};
function Coin({ coin }) {
  return (
    <div>
      <ul className={styles.container}>
        <li>{coin.market_cap_rank}</li>
        <li className={styles.coin}>
          <img src={coin.image} alt="coin logo" className={styles.coinImage} />
          {coin.id}
        </li>
        <li>${coin.current_price}</li>
        <li>${coin.high_24h}</li>
        <li>${coin.low_24h}</li>
        <li>${coin.total_volume}</li>
        <li>${coin.market_cap}</li>
      </ul>
    </div>
  );
}

export default Coin;
