import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button,Container } from "react-bootstrap";
import "./App.css";
import Image from "./image";
import Name from "./name";
import Price from "./price";
import Description from "./description"; // Assuming you have a description component
import product from "./product";

function App() {
  return (
    <Container className="mt-5 cnt">
      <div className="header">
        <h1>Market Store</h1>
      </div>
     
     <div className="port">
      {product.map((item, idx) => (
          <Card className="pcards >
          " style={{ marginBottom: "20px", width: "50%",marginLeft: "auto", marginRight: "auto",height: "70vh" }}>
            <Image image={item.image} />
            <div
              className="card-body"
              style={{ height: "100%", width: "100%" }}
            >
              <Name name={item.name} />
              <Price price={item.price} />
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
