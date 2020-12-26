import { GoToGithub, Wrapper, Emoji, Name } from "./styles";

const InstructorTag = ({ emoji, name, github }) => {
  const goToGitHubPage = () => window.open(`https://github.com/${github}`);

  return (
    <Wrapper onClick={goToGitHubPage}>
      <Emoji>{emoji}</Emoji>
      <Name>{name}</Name>
      <GoToGithub>Go to GitHub</GoToGithub>
    </Wrapper>
  );
};

export default InstructorTag;
