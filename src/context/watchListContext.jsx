import { createContext, useState , useEffect } from "react";

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {

  const [watchList, setWatchlist] = useState(
    localStorage.getItem("watchList")?.split(",") || ["MSFT", "GOOGL", "AMZN"]
  )

  useEffect(() => {
    localStorage.setItem("watchList",watchList)
  },[watchList])

  const addStock = (stock) => {
    if (watchList.indexOf(stock) === -1) {
      setWatchlist([...watchList, stock]);
    }
  };

  const deleteStock = (stock) => {
    setWatchlist(
      watchList.filter((el) => {
        return el !== stock;
      })
    );
  };

  return (
    <WatchListContext.Provider value={{ watchList, addStock, deleteStock }}>
      {props.children}
    </WatchListContext.Provider>
  );
};
