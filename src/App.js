import { RouterProvider } from "react-router-dom";
import router from './Routes/route'
// import CoinProvider from "./Context/CoinProvider";
import CoinProvider from "./Context/CoinProvider";
function App() {
  return (
    <CoinProvider>
      <RouterProvider router={router}/>
    </CoinProvider>
    
  );
}

export default App;
