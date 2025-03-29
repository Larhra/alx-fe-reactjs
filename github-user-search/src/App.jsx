import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Route,
  RouterProvider,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;