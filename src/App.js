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

    <!-- Footer (START) -->
    <footer class="footer">
      <div class="footer-container">
        <!-- Footer Head -->
        <div class="footer-head">
          <h2>Contact Me</h2>
        </div>

        <!-- Footer Icons -->
        <div class="footer-content">
          <div class="footer-icon">
            <a href="https://www.github.com/harshv1741"
              ><img src="icon/footer-github.svg" alt="Go to my github"
            /></a>
          </div>
          <div class="footer-icon">
            <a href="https://www.facebook.com/harshv1741"
              ><img src="icon/footer-facebook.svg" alt="Go to my facebook"
            /></a>
          </div>
          <div class="footer-icon">
            <a href="https://instagram.com/harshv1741"
              ><img src="icon/footer-instagram.svg" alt="Go to my instagram"
            /></a>
          </div>
          <div class="footer-icon">
            <a href="https://www.twitter.com/harshv1741"
              ><img src="icon/footer-twitter.svg" alt="Go to my twitter"
            /></a>
          </div>
          <div class="footer-icon">
            <a href="https://www.linkedin.com/in/harshv1741"
              ><img src="icon/footer-linkedin.svg" alt="Go to my linkedin"
            /></a>
          </div>
          <div class="footer-icon">
            <a href="mailto:harshv1741@gmail.com"
              ><img src="icon/footer-gmail.svg" alt="Mail me on Gmail"
            /></a>
          </div>
          <div class="footer-icon">
            <a href="mailto:harshv1741@outlook.com"
              ><img src="icon/footer-outlook.svg" alt="Mail me on Outlook"
            /></a>
          </div>
          <br />
          <h3 id="#page-end">
            <br />
            Made with 💖 by Harsh Vyapari <br /><br />
            Powered by Netlify
          </h3>
        </div>
        <br />
      </div>
    </footer>
    <!-- Footer (END) -->
    </div>
  );
}
