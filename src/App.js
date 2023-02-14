import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import {stockOverviewPage} from './pages/stockOverviewPage';
import {stockDetailPage} from './pages/stockDetailPage';

const App = () => {
  return (
    <main className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<stockOverviewPage />}/>
          <Route path='detail/:symbol' element = {<stockDetailPage />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App;

