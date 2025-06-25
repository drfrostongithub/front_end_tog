import { useState } from "react";
import TagList from "./TagList";
import TagInput from "./TagInput";
import TagButton from "./TagButton";

const TagComponent = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addTag = () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue && !tags.includes(trimmedValue)) {
      setTags([...tags, trimmedValue]);
      setInputValue("");
    }
  };

  const removeTag = (index: number) => {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  };

  return (
    <div className="tag-input">
      <TagList tags={tags} removeTag={removeTag} />
      <TagInput
        inputValue={inputValue}
        handleKeyDown={handleKeyDown}
        handleInputChange={handleInputChange}
      />
      <TagButton onClick={addTag} />
    </div>
  );
};

export default TagComponent;
