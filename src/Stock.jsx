import './Stock.css';

function Stock({symbol, price}) {

    return (
        <div className="Stock">
            <p>{symbol}: {price}</p>
            <div>
                <button>BUY</button>
                <button>SELL</button>
            </div>
        </div>
    );

}

export default Stock;
