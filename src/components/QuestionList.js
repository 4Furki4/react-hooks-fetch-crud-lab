import React, { useEffect } from "react";
import QuestionItem from "./QuestionItem";
import { useState } from "react";
function QuestionList() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((questions) => {
        setQuestions(questions);
      });
  }, [])
  function handleDelete(itemToDelete) {
    const updatedQuestions = questions.filter((question) => question.id !== itemToDelete)
    setQuestions(updatedQuestions)
  }
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {
          questions.map((question) => <QuestionItem key={question.id} question={question} onDelete={handleDelete} />)
        }
      </ul>
    </section>
  );
}

export default QuestionList;
