import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Tweets from "./pages/Tweets/Tweets";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
