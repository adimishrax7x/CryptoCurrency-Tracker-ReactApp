import React from 'react'
import './coin.css';

function Coin(props) {
    return (
        <div className="coinContainer">
            <div className="coinRow">
                <div className="coin">

                    <img src={props.image} alt='coin-img'/>
                        <h1 >{props.name}</h1>
                        <p className="coinSymbol">{props.symbol}</p>
                </div>
                <div className="coinData">

                    <p className="coinPrice" >₹{props.price.toLocaleString()}</p>
                    <p className="coinVolume" >₹{props.volume.toLocaleString()}</p>
                    {props.priceChange <0 ? (
                        <p className="coinPercentage red" >{props.priceChange.toFixed(2)}%</p>
                    ):(
                        <p className="coinPercentage green" >{props.priceChange.toFixed(2)}%</p>
                    )}
                    <p className="coinMarketCap" >₹{props.marCap.toLocaleString()}</p>
                </div>

            
            </div>
            
        </div>
    )
}

export default Coin;
