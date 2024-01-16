import {
  Route,
  Routes,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";

import {
  Hero,
  WhoWeAre,
  GrowYourTeam,
  JobBoard,
  Testimonies,
  HomeBento,
  BottomCTA,
  Footer,
  NavContainer,
  HeroFindARole,
  StatisticalInsight,
  Process,
  HeroGrowYourTeam,
  GrowYourTeamIntro,
  GrowYourTeamSupport,
  GrowYourTeamSpecialities,
} from "./sections";

// Landing page
function HomePage() {
  return (
    <div className="mt-[8rem]">
      <NavContainer />
      <Hero />
      <WhoWeAre />
      <GrowYourTeam />
      <JobBoard />
      {/* <Testimonies /> */}
      <HomeBento />
      <BottomCTA />
      <Footer />
    </div>
  );
}

function FindYourNextRolePage() {
  return (
    <div className="mt-[8rem]">
      <NavContainer />
      <HeroFindARole />
      <StatisticalInsight />
      <Process />
      <JobBoard />
      {/* <BottomCTA /> */}
      <Footer />
    </div>
  );
}

function GrowYourTeamPage() {
  return (
    <div className="mt-[8rem]">
      <NavContainer />
      <HeroGrowYourTeam />
      <GrowYourTeamIntro />
      <GrowYourTeamSupport />
      <GrowYourTeamSpecialities />
      <BottomCTA />
      <Footer />
    </div>
  );
}

function App() {
  //
  return (
    <div className="relative z-0 mx-auto max-w-[112.5rem] overflow-hidden bg-[#F6F1FD] max-[112.5rem]:bg-noux-purple ring-gray-100 ring-opacirty-15 shadow-2xl">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/findyournextrole" element={<FindYourNextRolePage />} />
          <Route path="/growyourteam" element={<GrowYourTeamPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
