import Product from './components/Product';
import Header from './components/Header';
import Product_overview_page from './components/Product_overview_page';
import { Routes, Route } from 'react-router-dom';
import './styles/style.css';
import './styles/index.css';

function App() {
  return (<div className="App">

    <Header/>
    <Routes>
    <Route path="/" element={<Product/>} />
    <Route path="Product_overview_page" element={<Product_overview_page/>} />



    </Routes>


    
    
    
    <>
  
</>
</div>
  );
}

export default App;
