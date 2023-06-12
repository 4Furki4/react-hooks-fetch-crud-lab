import React from "react";

function QuestionItem({ question, onDelete }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
  function handleDeleteClick(id) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    }).then(() => {
      onDelete(id)
    })
  }
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={() => handleDeleteClick(id)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
