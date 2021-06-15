import React from "react";
import ReactDOM from "react-dom";
import { Card, Container, Header } from "semantic-ui-react";

import RESTAPI from "./components/RESTAPI";


const App = ({ children }) => (
  <>
  
  <Container style={{ margin: 20 , alignItems: "center" , justifyContent: "center" , display: "flex" }}>
    
    {children}
  </Container>
  </>
);

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
  <App className="App"  style={{backgroundColor: "blue"}}>
    <Card.Group>
  
      <RESTAPI/>
    </Card.Group>
    
  </App>,
  document.getElementById("root")
);
