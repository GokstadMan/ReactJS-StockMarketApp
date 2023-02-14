import {useState,useEffect} from 'react'
import {BsFillCaretDownFill, BsFillCaretUpFill} from 'react-icons/bs'
import finnHub from '../apis/finnHub';

export const StockList = () =>{
    const [stock,setStock] = useState([]);
    const [watchList,setWatchlist] = useState(["GOOGL","MSFT","AMZN"]);

    const changeColor =(change) => {
        return change>0 ? "info":"danger"
    }

    const renderIcon = (change) => {
        return change>0 ? <BsFillCaretUpFill/> : <BsFillCaretDownFill/>
    }
    
    useEffect(()=> {
        let isMounted = true;
        const fetchData = async() =>{
            try{
                const responses = await Promise.all(watchList.map((stock)=>{
                    return finnHub.get("/quote",{
                        params:{
                            symbol:stock
                        }
                    })
                }))
                
                const data = responses.map((response) => {
                    return{
                        data:response.data,
                        symbol:response.config.params.symbol
                    }
                });
                console.log(data);
                if(isMounted){
                    setStock(data);
                }
                

            } catch(err) {
        }
    }
    fetchData()
    
    return ()=>(isMounted=false)


    },[])

    return <div>
        <table className='table hover mt-5 table-striped'>
            <thead style = {{color: "rgb(79,89,102)"}}>
                <tr>
                    <th scope='col'>Navn</th>
                    <th scope='col'>Siste</th>
                    <th scope='col'>Endring</th>
                    <th scope='col'>Endring%</th>
                    <th scope='col'>Høy</th>
                    <th scope='col'>Lav</th>
                    <th scope='col'>Start</th>
                    <th scope='col'>Siste</th>
                </tr>
            </thead>
            <tbody>
                {stock.map((stockData) => {
                    return(
                        <tr className='table-row' key={stockData.symbol}>
                            <th scope='row'>{stockData.symbol}</th>
                            <td>{stockData.data.c}</td>
                            <td className={`text-${changeColor(stockData.data.d)}`}>{stockData.data.d} {renderIcon(stockData.data.d)}</td>
                            <td className={`text-${changeColor(stockData.data.d)}`}>{stockData.data.dp} {renderIcon(stockData.data.d)}</td>
                            <td>{stockData.data.h}</td>
                            <td>{stockData.data.l}</td>
                            <td>{stockData.data.o}</td>
                            <td>{stockData.data.pc}</td>
                        </tr>
                    )
                })

                }
            </tbody>
        </table>
    </div>
}
    