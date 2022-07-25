import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import News from "./pages/News";
import Info from "./pages/Info"
// import your route components too

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="info" element={<Info />} />
          {/* <Route index element={<Home />} />
          <Route path="teams" element={<Teams />} />
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
