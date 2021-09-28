import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Listing from "./Pages/Listing/Listing";
import Scroll from "./Pages/Scroll/Scroll";
import StateAnim from "./Pages/StateAnim/StateAnim";

const App = () => {
  return (
    <Router>
      <div className="global-container">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Listing} />
          <Route path="/stateAnim" exact component={StateAnim} />
          <Route path="/scroll" exact component={Scroll} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
