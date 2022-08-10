import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import News from "./pages/News";
import Info from "./pages/Info";
import { AuthContextProvider } from "./store/auth-context";
import { CreatePostProvider } from "./store/dummy_db-context";

const Router = () => {
  return (
    <>
      <AuthContextProvider>
        <CreatePostProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="news" element={<News />} />
              <Route path="info" element={<Info />} />
            </Routes>
          </BrowserRouter>
        </CreatePostProvider>
      </AuthContextProvider>
    </>
  );
};

export default Router;
