import "./styles.css";
import { useState } from "react";

export default function App() {
  const emojiDatabase = {
    "😎": "Smiling Face with Sunglases",
    "😭": "loudly crying",
    "🙂": "smiling",
    "😢": "crying face",
    "😞": "dissapointed",
    "😄": "grining face with smiley eyes",
    "🪝": "hook",
    "💖": "sparkling heart",
    "💻": "Laptop",
    "🛑": "Stop Sign",
    "⌚": "Watch"
  };

  const [userInput, setUserInput] = useState("");

  function changeEventHandler(event) {
    //Taking value from the user
    var userInput = event.target.value;
    // Accessing the meaning of the emoji
    var meaning = emojiDatabase[userInput];
    // Generating the output
    setUserInput(meaning);
  }

  return (
    <div className="App">
      <div className="TitleBar">
        <h1 className="Title">Know Your Emoji 😎</h1>
      </div>
      <div className="TxtBox">
        <h2>😭 🙂 😞 💖 🪝 💻 😢 😄 🛑 ⌚</h2>
        <h3>
          <input onChange={changeEventHandler} className="usrTxt"></input>
          <br />
          <br />
          Note: Enter the emoji shown above in the textbox
        </h3>
      </div>

      <div className="contentBox">
        <h2>{userInput}</h2>
      </div>
    </div>
  );
}
