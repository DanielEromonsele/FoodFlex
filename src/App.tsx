import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./components/router/mainRouter";



const App = () => {
  return (
    <div>
      
            <RouterProvider router={mainRouter} />
    </div>
  );
};

export default App;