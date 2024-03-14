import Product from './components/product';
import Header from './components/header';
import Product_overview_page from './components/product_overview_page';
import { Routes, Route } from 'react-router-dom';



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
