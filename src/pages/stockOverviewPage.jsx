import { AutoComplete } from "../components/AutoComplete";
import { StockList } from "../components/StockList";

export const StockOverviewPage = () => {
  return (
    <div>
      <h1 className="display1 text-info text-center">Bens Aksjeside</h1>
      <AutoComplete />
      <StockList />
    </div>
  );
};
