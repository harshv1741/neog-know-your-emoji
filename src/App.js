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
    "⌚": "Watch",
  };

  const [emoji, setemoji] = useState("....");
  const [meaning, setmeaning] = useState("....");

  const emojis = Object.keys(emojiDatabase);

  function changeEventHandler(event) {
    //Taking value from the user
    const input = event.target.value;
    setemoji(input);

    // Accessing the meaning of the emoji
    if (input in emojiDatabase) {
      setmeaning(emojiDatabase[input]);
    } else {
      setemoji("...");
      setmeaning("...");
    }
  }

  function emojiHandler(emoji) {
    setemoji(emoji);
    setmeaning(emojiDatabase[emoji]);
  }

  return (
    <div className="App">
      <div className="TitleBar">
        <h1 className="Title">Know Your Emoji 😎</h1>
      </div>
      <div className="TxtBox">
        {/* <h2>😭 🙂 😞 💖 🪝 💻 😢 😄 🛑 ⌚</h2> */}
        {
          /** Bonus feature; if time permmits */
          /**
           * concepts to cover: mapping a list
           * click handler on list item
           */
          emojis.map((emoji) => (
            <span
              onClick={() => emojiHandler(emoji)}
              style={{ fontSize: "30px", paddingTop: "10px", cursor: "pointer" }}
            >
              {" "}
              {emoji}{" "}
            </span>
          ))
        }

        <br />
        <br />
        <input
          placeholder={"Search Your Emoji"}
          onChange={changeEventHandler}
          className="usrTxt"
        ></input>
        <br />
        <br />
        <h3>Note: Enter the emoji shown above in the textbox</h3>
      </div>

      <div className="contentBox">
        <h2>
          {emoji} <br /> <br /> {meaning}
        </h2>
      </div>

      <footer class="footer">
        <div class="footer-container">
          <h3 id="#page-end">
            <br />
            Made with 💖 by Harsh Vyapari <br />
            <br />
            Powered by Vercel
          </h3>
          <br />
        </div>
      </footer>
    </div>
  );
}
