import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import {StockOverviewPage} from './pages/stockOverviewPage';
import {StockDetailPage} from './pages/StockDetailPage';

const App = () => {
  return (
    <main className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<StockOverviewPage />}/>
          <Route path='detail/:symbol' element = {<StockDetailPage />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App;

