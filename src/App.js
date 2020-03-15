import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GoogleAnalytics from "react-ga";

import Navigation from "./components/navigation";
import Home from "./views/Home.js";
import AllChallenges from "./views/AllChallenges.js";
import Resources from "./views/Resources.js";
import Ch_01 from "./views/Challenges/Ch_01.js";
import Ch_02 from "./views/Challenges/Ch_02.js";
import Ch_03 from "./views/Challenges/Ch_03.js";
import Ch_04 from "./views/Challenges/Ch_04.js";
import Footer from "./components/footer";

function App() {
  GoogleAnalytics.initialize("UA-160732402-1");

  const tracker = ({ location }) => {
    GoogleAnalytics.set({ page: location.pathname });
    GoogleAnalytics.pageview(location.pathname);
    return null;
  };

  return (
    <div className="App">
      <Navigation />
      <Route render={tracker} />

      <Route exact path="/" component={Home} />
      <Route exact path="/all_challenges" component={AllChallenges} />
      <Route exact path="/resources" component={Resources} />
      <Route exact path="/challenge/01" component={Ch_01} />
      <Route exact path="/challenge/02" component={Ch_02} />
      <Route exact path="/challenge/03" component={Ch_03} />
      <Route exact path="/challenge/04" component={Ch_04} />
      <Footer />
    </div>
  );
}

export default App;
