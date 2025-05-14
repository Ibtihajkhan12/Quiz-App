    // import React from "react";
// import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
// import "./Resultpage.css";

// function ResultPage() {
//   const location = useLocation();
//   const navigate = useNavigate(); // Hook to navigate

//   const { userAnswers, scorePercentage } = location.state;

//   const handleRestart = () => {
//     navigate("/quiz"); // Assuming /quiz is the quiz route
//   };

//   return (
//     <div className="result-container">
//       <h2>Quiz Results</h2>
//       <div className="score">
//         <h3>Your Score: {scorePercentage}%</h3>
//       </div>
//       <div className="answers">
//         <h4>Your Answers:</h4>
//         {userAnswers.map((answer, idx) => (
//           <div
//             key={idx}
//             className={`answer ${answer.correct ? "correct" : "incorrect"}`}
//           >
//             <div className="question">{answer.question}</div>
//             <div className="user-answer">
//               Answered: <b>{answer.selected}</b>
//             </div>
//             <div className="correct-answer">
//               Correct Answer:{" "}
//               <b>
//                 {answer.correct
//                   ? answer.selected
//                   : answer.correct
//                   ? answer.selected
//                   : "No Answer"}
//               </b>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="restart-container">
//         <button className="restart-btn" onClick={handleRestart}
//         navigate>
//           Restart Quiz
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ResultPage;




import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Resultpage.css";

function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate(); // 👈 Use this to navigate

  const { userAnswers, scorePercentage } = location.state;

  // Navigate to quiz route
  const handleRestart = () => {
    navigate("/quiz"); // 👈 Adjust route if needed
  };

  return (
    <div className="result-container">
      <h2>Quiz Results</h2>
      <div className="score">
        <h3>Your Score: {scorePercentage}%</h3>
      </div>
      <div className="answers">
        <h4>Your Answers:</h4>
        {userAnswers.map((answer, idx) => (
          <div key={idx} className={`answer ${answer.correct ? "correct" : "incorrect"}`}>
            <div className="question">{answer.question}</div>
            <div className="user-answer">
              Answered: <b>{answer.selected || "No Answer"}</b>
            </div>
            <div className="correct-answer">
              Correct Answer: <b>{answer.answer}</b>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Restart Quiz Button */}
      <div className="restart-container">
        <button className="restart-btn" onClick={() => navigate("/QuizApp")}>
          Restart Quiz
        </button>
      </div>

    </div>
  );
}

export default ResultPage;
