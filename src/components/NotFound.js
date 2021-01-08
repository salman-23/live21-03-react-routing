import { Button } from "./styles";
const NotFound = ({ goTo }) => (
  <>
    <h2>404 this page does not exist!</h2>
    <div onClick={() => goTo("/")}>
      <Button>Go back home!</Button>
    </div>
  </>
);

export default NotFound;
