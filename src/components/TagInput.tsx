type TagInputProps = {
  inputValue: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const TagInput = ({
  inputValue,
  handleInputChange,
  handleKeyDown,
}: TagInputProps) => {
  return (
    <input
      type="text"
      placeholder="Add a tag"
      value={inputValue}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default TagInput;
