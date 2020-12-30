import { GoToGithub, TagWrapper, Emoji, Name } from "./styles";

const InstructorTag = ({ emoji, name, github }) => {
  const goToGitHubPage = () => window.open(`https://github.com/${github}`);

  return (
    <TagWrapper onClick={goToGitHubPage}>
      <Emoji>{emoji}</Emoji>
      <Name>{name}</Name>
      <GoToGithub>Go to GitHub</GoToGithub>
    </TagWrapper>
  );
};

export default InstructorTag;
