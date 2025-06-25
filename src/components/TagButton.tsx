type TagButtonProps = {
  onClick: () => void;
};

const TagButton = ({ onClick }: TagButtonProps) => {
  return (
    <button type="button" onClick={onClick}>
      Add
    </button>
  );
};

export default TagButton;
