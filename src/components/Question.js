// Considered a Molecule

import Button from "./Button";

export default function Question({ question, options, onAnswer }) {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto">
      <h2 className="text-xl font-bold text-center mb-4">{question}</h2>
      <div className="flex flex-col space-y-3">
        {options.map((option, index) => (
          <Button key={index} theme="primary" onClick={() => onAnswer(option)}>
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
}
