import "./App.css";
import Greeting from "./components/Greeting/Greeting";
import Message from "./components/Message/Message";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <Greeting name="Semen" />
      <Message text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi orci odio, porta sit amet condimentum vel, mollis sed sem. Quisque laoreet elit nec risus finibus, et auctor velit finibus." />
      <Button onClick={() => onClick('hello')} />
    </>
  );
}

function onClick(message) {
  console.log(message);
}

export default App;
