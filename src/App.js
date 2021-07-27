import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './App.css';
import Coin from './coin';

function App() {

  const [coins,setCoins]=useState([]);
  const [search,setSearch]=useState('');

  useEffect( ()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then( res=>{
      setCoins(res.data);
      //console.log(res.data);
    }).catch(error => console.log(error))
  },[]);

const handleChange = e => {
  setSearch(e.target.value);
}

const filteredCoins = coins.filter(coin =>
  coin.name.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div className="coinApp">
         <div className="coinSearch">
            <h1 className="coinText">Enter a Crypto</h1>
            <form>
                <input className="coinInput" type='text' placeHolder='Search' onChange={handleChange}/>
            </form>
        </div>

      <table>
        <tr>
          <th>name</th>
          <th>symbol</th>
          <th>price</th>
          <th>volume</th>
          <th>priceChange</th>
          <th>marCap</th>
        </tr>
      </table>

      {filteredCoins.map(coin =>{
        return (<Coin
            key={coin.id}
            image={coin.image}
            name={coin.name}
            symbol={coin.symbol}
            price={coin.current_price}
            volume={coin.total_volume}
            priceChange={coin.price_change_percentage_24h}
            marCap={coin.market_cap}
        />);
      })}

    </div>
  );
}

export default App;
