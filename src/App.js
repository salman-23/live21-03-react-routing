import { AppWrapper } from "./components/styles";
import "./App.css";
import InstructorTag from "./components/InstructorTag";

function App() {
  return (
    <>
      <AppWrapper>
        <h2>When in doubt, ask for help!</h2>
        <InstructorTag emoji="🌚" name="Hamza" github="DarthHamza" />
        <InstructorTag emoji="🐥" name="Laila" github="Lailz" />
        <InstructorTag emoji="🦍" name="Hasan" github="thehasanas" />
      </AppWrapper>
      {/* <div className="AppWrapper">
        <h2>When in doubt, ask for help!</h2>

        <div
          className="TagWrapper"
          onClick={() => window.open(`https://github.com/DarthHamza`)}
        >
          <span className="Emoji">🌚</span>
          <span className="Name">Hamza</span>
          <span className="GoToGithub">Go to GitHub</span>
        </div>

        <div
          className="TagWrapper"
          onClick={() => window.open(`https://github.com/Lailz`)}
        >
          <span className="Emoji">🐥</span>
          <span className="Name">Laila</span>
          <span className="GoToGithub">Go to GitHub</span>
        </div>

        <div
          className="TagWrapper"
          onClick={() => window.open(`https://github.com/thehasanas`)}
        >
          <span className="Emjkoji">🦍</span>
          <span className="Name">Hasan</span>
          <span className="GoToGithub">Go to GitHub</span>
        </div>
      </div> */}
    </>
  );
}

export default App;
