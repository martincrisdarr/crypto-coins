import React from "react";

const styles = {
  container:
    "w-full hidden md:grid  grid-cols-4 md:grid-cols-7 text-xl font-semibold mt-8 px-6",
};
const mapeo = [
  "#",
  "Coin",
  "Price",
  "Max 24hs",
  "Min 24hs",
  "Total volume",
  "Market cap",
];
function TableDescriptions() {
  return (
    <div>
      <ul className={styles.container}>
        {mapeo.map((obj, index) => (
          <li key={index}>{obj}</li>
        ))}
      </ul>
    </div>
  );
}

export default TableDescriptions;
