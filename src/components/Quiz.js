import React, { useState } from 'react';

export const Quiz = () => {

  const questions = [
		{
			questionText: '¿Cuál es la capital de Chile?',
			answerOptions: [
				{ answerText: 'Arica', isCorrect: false },
				{ answerText: 'La Serena', isCorrect: false },
				{ answerText: 'Santiago', isCorrect: true },
				{ answerText: 'Concepción', isCorrect: false },
			],
		},
		{
			questionText: '¿Quién es el CEO de Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: '¿Que marca tiene lo mejor en calidad/precio?',
			answerOptions: [
				{ answerText: 'Xiaomi', isCorrect: true },
				{ answerText: 'Apple', isCorrect: false },
				{ answerText: 'Samsung', isCorrect: false },
				{ answerText: 'Nokia', isCorrect: false },
			],
		},
		{
			questionText: '¿Cómida típica chilena?',
			answerOptions: [
				{ answerText: 'Tacos', isCorrect: false },
				{ answerText: 'Sushi', isCorrect: false },
				{ answerText: 'Pizza', isCorrect: false },
				{ answerText: 'Empanadas', isCorrect: true },
			],
		},
  ];
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showResult, setShowResult] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowResult(true);
		}
	};

  return (
    <div className="quiz">

      {showResult &&
      <div className='send_data' showResult={false}>
        <p>Gracias por responder la trivia!</p>
        <a href="#">Enviar respuestas</a>
      </div>
      }

      {!showResult &&
      <>
      <p className="answer_text">{questions[currentQuestion].questionText}</p>
      <div className="answers">
      {
        questions[currentQuestion].answerOptions.map((answerOption) => (
					<span className="answer" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
            {answerOption.answerText}
          </span>
				))
      }
      </div>
      <span>Pregunta {currentQuestion + 1}/{questions.length}</span>
      </>
      }
    </div>
  )
}