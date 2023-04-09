import { useState } from "react";

export default function Joke({ joke, punchLine }) {
  const [hidden, setHidden] = useState(true);

  return (
    <div>
      <p>Joke: {joke}</p>
      <p hidden={hidden}>Punch Line: {punchLine}</p>
      <button onClick={() => setHidden(!hidden)}>Show/Hide Punch Line</button>
    </div>
  );
}
