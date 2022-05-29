import React from "react";

const Dialogue = ({ characters }) => {
  if (!characters.length) {
    return <h2>No Character Prompts Available</h2>;
  }

  return (
    <>
        {characters && characters.map((dialogueText) => (
        <div key={dialogueText._id}>
          <h2>{dialogueText.prompt}</h2>
        </div>
          ))}
    </>
  );
};

export default Dialogue;
