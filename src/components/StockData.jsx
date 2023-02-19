import { useState,useEffect } from 'react';
import finnHub from "../apis/finnHub";

export const StockData=({symbol}) =>{
    
    const [StockData,setStockData] = useState();
    
    useEffect(() => {
        let isMounted = true;
        const fetchData = async () =>{
            try{
               const response = await finnHub.get("/stock/profile2",{
                params:{
                    symbol
                }
               })
               if (isMounted) {
                setStockData(response.data)
               }
            } catch(err){

            }
        }
        fetchData();
        return() => (isMounted = false)
    },[symbol])

    return <div>
        {StockData && (
            <div className='row border bg-white rounded shadow-sm p-4 mt-5'>
               <div className='col'>
                    <div>
                        <span className='fw-bold'>Navn: </span>
                        {StockData.name}
                    </div>
                    <div>
                        <span className='fw-bold'>Land: </span>
                        {StockData.country}
                    </div>
                    <div>
                        <span className='fw-bold'>Ticker: </span>
                        {StockData.ticker}
                    </div>
                </div> 
               <div className='col'>
                    <div>
                        <span className='fw-bold'>Børs: </span>
                        {StockData.exchange}
                    </div>
                    <div>
                        <span className='fw-bold'>Industri: </span>
                        {StockData.finnhubIndustry}
                    </div>
                    <div>
                        <span className='fw-bold'>IPO: </span>
                        {StockData.ipo}
                    </div>
                </div> 
               <div className='col'>
                    <div>
                        <span className='fw-bold'>MarketCap: </span>
                        {StockData.marketCapitalization}
                    </div>
                    <div>
                        <span className='fw-bold'>Antall aksjer: </span>
                        {StockData.shareOutstanding}
                    </div>
                    <div>
                        <span className='fw-bold'>url: </span>
                        <a href={StockData.weburl}>{StockData.weburl}</a>
                    </div>
                </div> 
            </div>
        )}
    </div>
    
}
