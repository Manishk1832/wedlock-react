import React from 'react';
import Select from 'react-select';

const question = [
  {
    id: 7,
    text: "I am age",
    summary:
      "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    options: ["18", "19", "20", "21", "22", "23", "24", "26"],
  },
];

type SelectedOption = { questionId: number; answerValue: string | string[] };

type QuestionProps = {
  selectedOptions: SelectedOption[];
  handleOptionChange: (questionId: number, answerValue: string | string[]) => void;
};

const Question6: React.FC<QuestionProps> = ({ selectedOptions, handleOptionChange }) => {
  const ageOptions = question[0].options.map((option) => ({
    value: option,
    label: option,
  }));

  // Find the selected option for the specific question ID
  const selectedOption = selectedOptions.find(
    (selected) => selected.questionId === question[0].id
  );

  return (
    <div>
      {question.map((ques) => (
        <div className="text-left md:text-center" key={ques.id}>
          <h2 className="w-full text-2xl font-bold md:text-3xl mb-4">
            {ques.text}
          </h2>
          <p className="text-[#FFFFFF90]">{ques.summary}</p>

          <div className="md:w-auto py-4">
            <Select
              options={ageOptions}
              value={ageOptions.find(option => option.value === selectedOption?.answerValue)}
              onChange={(selected) =>
                handleOptionChange(ques.id, selected?.value || "")
              }
              className="w-full text-black"
              placeholder="Select your age"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Question6;
