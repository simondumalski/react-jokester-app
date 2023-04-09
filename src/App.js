import Joke from "./Joke";
import { useState, useEffect } from "react";

function App() {
  const [jokes, setJokes] = useState([]);
  const [joke, setJoke] = useState("");
  const [punchLine, setPunchLine] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setJokes([...jokes, { joke, punchLine }]);
    setJoke("");
    setPunchLine("");
  };

  useEffect(() => {}, [jokes]);

  return (
    <div className="App">
      <form>
        Joke:{" "}
        <input
          type="text"
          name="joke"
          value={joke}
          onChange={(e) => {
            setJoke(e.target.value);
          }}
        />
        <br />
        Punch Line:{" "}
        <input
          type="text"
          name="punchline"
          value={punchLine}
          onChange={(e) => {
            setPunchLine(e.target.value);
          }}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {jokes &&
        jokes.map((joke) => (
          <Joke key={joke.joke} joke={joke.joke} punchLine={joke.punchLine} />
        ))}
    </div>
  );
}

export default App;
