import {AutoComplete} from '../components/AutoComplete';
import {StockList} from '../components/StockList';


export const StockOverviewPage = () =>{
    return(
        <div>StockOverview
            <AutoComplete/>
            <StockList/>
        </div>
    )
}