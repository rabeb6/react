import { Card, Button,Container } from "react-bootstrap";
import "./App.css";
import Image from "./images.jsx";
import Name from "./name.jsx";
import Description from "./description.jsx"; // Assuming you have a description component
import Players from "./players.js"; // Importing the players data


function App() {
  return (
    <Container >
      <div className="header">
        <h1>the famous players in 2025</h1>
      </div>
     
     <div className="port">
      {Players.map((item, _idx) => (
          <Card className="pcards" key={item.id}
          style={{ marginBottom: "20px", width: "70%", marginLeft: "auto", marginRight: "auto", height: "70vh" }}>
            <Image images={item.image} />
            <div
              className="card-body"
              style={{ height: "100%", width: "100" }}
            >
              <Name names={item.name} />
              <Description description={item.description} />
              <Button variant="primary">Buy Now</Button>
            
            </div>
          </Card>
      ))}
      </div>
    </Container>
  );
}

export default App;
