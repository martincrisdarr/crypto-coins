import React from "react";
import { Link } from 'react-router-dom'
const styles = {
  container:
    "w-full h-16 grid grid-cols-3 md:grid-cols-7 text-gray-400 items-center text-lg px-6 border border-slate-500 hover:border-blue-400 rounded-xl ",
  coin: "flex gap-2 items-center font-semibold ",
  coinImage: "w-6",
  max: "hidden md:flex text-green-500",
  min: " hidden md:flex text-red-500",
  responsiveHidden: 'hidden md:flex'
};
function Coin({ coin }) {
  return (
    <Link to={`/coin/${coin.id}`} className='hover:no-underline'>
      <div>
        <ul className={styles.container}>
          <li>{coin.market_cap_rank.toLocaleString('es-ar')}</li>
          <li className={styles.coin}>
            <img
              src={coin.image}
              alt="coin logo"
              className={styles.coinImage}
            />
            {coin.id}
          </li>
          <li>${coin.current_price}</li>
          <li className={styles.max}>${coin.high_24h.toLocaleString('es-ar')}</li>
          <li className={styles.min}>${coin.low_24h.toLocaleString('es-ar')}</li>
          <li className={styles.responsiveHidden}>${coin.total_volume.toLocaleString('es-ar')}</li>
          <li className={styles.responsiveHidden}>${coin.market_cap.toLocaleString('es-ar')}</li>
        </ul>
      </div>
    </Link>
  );
}

export default Coin;
