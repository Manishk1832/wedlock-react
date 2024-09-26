import React from "react";



const questions = [
  {
    id: 1,
    text: "I am a",
    options: ["Man", "Woman", "Non-binary"],
  },
  {
    id: 2,
    text: "I am looking for a",
    options: ["Man", "Woman", "Non-binary"],
  },
];



type QuestionProps = {
  selectedOptions: { questionId: number; answerValue: string | string[] }[];
  handleOptionChange: (questionId: number, answerValue: string | string[]) => void;
};


const Question1 : React.FC<QuestionProps> = ({ selectedOptions, handleOptionChange }) => {


  return (
    <div>
      {questions.map((question) => (
        <div key={question.id} className="my-2">
          <h2 className="w-full text-left text-2xl font-bold md:text-center md:text-4xl mb-4">
            {question.text}
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3  md:w-auto py-4">
            {question.options.map((option, index) => (
            <label
            key={index}
            className={`flex items-center justify-between  rounded-xl text-sm h-10 cursor-pointer px-6 ${
              selectedOptions.some(
                (sel) => sel.questionId === question.id && sel.answerValue === option
              )
                ? "bg-white text-[#007EAF] h-12"
                : "bg-[#FFFFFF80] text-white"
            }`}
          >
                {option} 
                <input
                  type="checkbox"
                  className="ml-2 w-4 h-4 "
                  checked={selectedOptions.some(
                    (sel) => sel.questionId === question.id && sel.answerValue === option
                  )}  onChange={() => handleOptionChange(question.id, option)}
                  />
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Question1;
