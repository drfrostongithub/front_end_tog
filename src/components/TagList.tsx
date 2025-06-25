const TagList = ({
  tags,
  removeTag,
}: {
  tags: string[];
  removeTag: (index: number) => void;
}) => {
  return (
    <div
      style={{
        gap: "10px",
        marginBottom: "10px",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
      }}
    >
      {tags.map((tag, index) => (
        <div key={index} className="tag">
          <span
            style={{
              borderRadius: "16px",
              padding: "5px 10px",
              border: "1px solid #ccc",
            }}
          >
            {tag}
          </span>
          <button
            onClick={() => removeTag(index)}
            style={{
              backgroundColor: "red",
              color: "white",
              borderRadius: "50%",
              border: "none",
              padding: "0 5px",
              cursor: "pointer",
            }}
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
};

export default TagList;
