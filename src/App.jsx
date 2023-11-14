import Description from "./components/description/Description";
import Image from "./components/image/Image";
import Price from "./components/price/Price";
import Name from "./components/name/Name";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Card from "react-bootstrap/Card";

// prompt to ask user for first name
let yourName = prompt("What's your First Name, Buddy?").trim();

function App() {
  return (
    <>
      <div className="container-fluid mx-auto align-items-center pt-3 d-flex flex-column">
        <Card className="container--card">
          <Image />
          <Card.Body>
            <Card.Title>
              <Name />
            </Card.Title>
            <Card.Text>
              <Description />
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Price />
          </Card.Footer>
        </Card>

        {/* Check to see if name is entered */}
        <div className="px-5 mt-5 container--card fs-3 fw-semibold bg-white">
          {yourName ? (
            <div className="d-flex justify-space-between align-items-center">
              <p className="pe-5 pt-2">Hello {yourName}</p>
              <img
                className="user--img"
                src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-person-icon.png"
                alt=""
              />
            </div>
          ) : (
            "Hello There!"
          )}
        </div>
      </div>
    </>
  );
}

export default App;
