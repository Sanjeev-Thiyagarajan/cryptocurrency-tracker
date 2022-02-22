import React from "react";

const CoinData = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div className="bg-white mt-3 p-2 rounded border row">
          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">Market Cap</span>
              <span>{data.market_cap ? data.market_cap.toLocaleString() : 'N/A'}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">
                Total Supply
              </span>
              <span>{data.total_supply ? data.total_supply.toLocaleString() : 'N/A'}</span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">Volume(24H)</span>
              <span>{(data.total_volume ? data.total_volume.toLocaleString() : 'N/A')}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">high 24h</span>
              <span>{data.high_24h ? data.high_24h.toLocaleString() : 'N/A'}</span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">
                Circulating Supply
              </span>
              <span>{data.circulating_supply ? data.circulating_supply.toLocaleString() : 'N/A'}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">low 24h</span>
              <span>{data.low_24h ? data.low_24h.toLocaleString() : 'N/A'}</span>
            </div>
          </div>
        </div>
      );
    }
  };
  
  return <div>{renderData()}</div>;
};

export default CoinData;
