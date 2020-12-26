import { AppWrapper } from "./components/styles";
import InstructorTag from "./components/InstructorTag";

function App() {
  return (
    <AppWrapper>
      <h2>When in doubt, ask for help!</h2>
      <InstructorTag emoji="🌚" name="Hamza" github="DarthHamza" />
      <InstructorTag emoji="🐥" name="Laila" github="Lailz" />
      <InstructorTag emoji="🦍" name="Hasan" github="thehasanas" />
    </AppWrapper>
  );
}

export default App;
