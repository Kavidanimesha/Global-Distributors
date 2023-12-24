import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Sales from '../src/pages/Sales'
import StockEnter from '../src/pages/StockEnter'
import StockRelease from '../src/pages/StockRelease'
import StockReturn from '../src/pages/StockReturn'
import Inventory from '../src/pages/Inventory'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/sales' element={<Sales />} />
      <Route path='/stockenter' element={<StockEnter />} />
      <Route path='/stockrelease' element={<StockRelease />} />
      <Route path='/stockreturn' element={<StockReturn />} />
      <Route path='/inventory' element={<Inventory />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
