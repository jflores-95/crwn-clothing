import React from "react";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import "./pages/homepage/homepage.styles.scss";
import { Switch, Route } from "react-router-dom";

const HatsPage = () => {
  return (
    <div>
      <h1>Hats</h1>
    </div>
  );
};

const TopicList = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Topics</h1>
    </div>
  );
};

const TopicDetail = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Topic detail {`${props.match.params.topicId}`}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/topics" component={TopicList} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
