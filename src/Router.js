import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import News from "./pages/News";
import Info from "./pages/Info";
import LoginPage from "./pages/LoginPage";
import { AuthContextProvider } from "./store/auth-context";
import { CreatePostProvider } from "./store/dummy_db-context";
import CreatePostPage from "./pages/CreatePostPage";
// import your route components too

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
              <Route path="login" element={<LoginPage />} />
              <Route path="create_post" element={<CreatePostPage />} />
            </Routes>
          </BrowserRouter>
        </CreatePostProvider>
      </AuthContextProvider>
    </>
  );
};

export default Router;
