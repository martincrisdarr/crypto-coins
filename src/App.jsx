import { useEffect, useState, useSelector, useDispatch } from "react"
import axios from 'axios'
import { setAddCrypto } from "./Components/features/counter/cryptosSlice";
function App() {
  const [info, setInfo] = useState([])

  const cryptos = useSelector(setAddCrypto);
  const dispatch = useDispatch()
  const getData = async() => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    dispatch(setAddCrypto(res.data))
  }
  useEffect(()=> {
    getData()    
  },[])
  return (
    <>
      <div>
        {info.map(i => (
          <p key={i.id}>{i.symbol}</p>
        ))}
      </div>
    </>
  )
}

export default App
