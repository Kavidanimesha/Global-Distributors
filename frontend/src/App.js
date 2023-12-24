import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Sales from '../src/pages/Sales'
import StockIn from '../src/pages/StockIn'
import StockRelease from '../src/pages/StockRelease'
import StockReturn from '../src/pages/StockReturn'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/sales' element={<Sales />} />
      <Route path='/stockin' element={<StockIn />} />
      <Route path='/stockrelease' element={<StockRelease />} />
      <Route path='/stockreturn' element={<StockReturn />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
