import { GoToProfile, TagWrapper, Emoji, Name } from "./styles";

const InstructorTag = ({ instructor, goTo }) => {
  const { emoji, name, slug } = instructor;

  return (
    <div
      onClick={() => {
        goTo(`/instructors/${slug}`);
      }}
    >
      <TagWrapper>
        <Emoji>{emoji}</Emoji>
        <Name>{name}</Name>
        <GoToProfile>Go to profile</GoToProfile>
      </TagWrapper>
    </div>
  );
};

export default InstructorTag;
