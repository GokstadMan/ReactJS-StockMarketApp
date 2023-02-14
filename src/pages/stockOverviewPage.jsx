import {AutoComplete} from '../components/AutoComplete';
import {StockList} from '../components/StockList';


export const stockOverviewPage = () =>{
    return(
        <div>StockOverview
            <AutoComplete/>
            <StockList/>
        </div>
    )
}