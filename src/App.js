import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from "./components/Header";
import MessageList from "./components/MessageList";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <MessageList path="/" />
        <UserProfile path="/user" />
      </Router>
    </div>
  );
}

export default App;
