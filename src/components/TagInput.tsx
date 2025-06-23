import { useState } from "react";

const TagInput = () => {
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
      <div>
        {tags.map((tag, index) => (
          <div key={index} className="tag">
            <span
              style={{
                borderRadius: "16px",
                textAlign: "center",
                padding: "5px",
                margin: "5px",
                border: "1px solid #ccc",
              }}
            >
              {tag}
            </span>
            <button onClick={() => removeTag(index)}>x</button>
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Add a tag"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button type="button" onClick={addTag}>
        Add
      </button>
    </div>
  );
};

export default TagInput;
