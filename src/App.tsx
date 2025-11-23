import Message from "./components/Message";
import ListGroup from "./components/ListGroup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card/Card.tsx";
import Button from "./components/Button/Button";
import { BrowserRouter as Router } from "react-router-dom";
import Student from "./components/Student/Student";
import UserGreeting from "./components/UserGreeting/UserGreeting.tsx";

function App() {
  return (
    <>
      <Router>
        <Header />
      </Router>
      <UserGreeting isLoggedIn={false} username="Long" />
      <Student name="John Doe" age={21} />
      <Card name="Alice" age={23} />
      <ListGroup />
    </>
  );
}
export default App;
