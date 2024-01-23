import {
  Route,
  Routes,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";

import {
  HomePageHero,
  HomePageWhoWeAre,
  HomePageGrowYourTeam,
  LatestJob,
  HomePageBento,
  BottomCTA,
  Footer,
  Navbar,
  FindYourNextRoleHero,
  FindYourNextRoleIntro,
  FindYourNextRoleProcess,
  GrowYourTeamHero,
  GrowYourTeamIntro,
  GrowYourTeamSupport,
  GrowYourTeamSpecialities,
  FormContactUs,
  FormSendCV,
} from "./sections";

// Landing page
function HomePage() {
  return (
    <div className="mt-4">
      <Navbar />
      <HomePageHero />
      <HomePageWhoWeAre />
      <HomePageGrowYourTeam />
      <LatestJob />
      <HomePageBento />
      <BottomCTA />
      <Footer />
    </div>
  );
}

function FindYourNextRolePage() {
  return (
    <div className="mt-4">
      <Navbar />
      <FindYourNextRoleHero />
      <FindYourNextRoleIntro />
      <FindYourNextRoleProcess />
      <LatestJob />
      <Footer />
    </div>
  );
}

function GrowYourTeamPage() {
  return (
    <div className="mt-4">
      <Navbar />
      <GrowYourTeamHero />
      <GrowYourTeamIntro />
      <GrowYourTeamSupport />
      <GrowYourTeamSpecialities />
      <BottomCTA />
      <Footer />
    </div>
  );
}

function ContactUs() {
  return (
    <div className="">
      <Navbar />
      <FormContactUs />
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
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
