import React, { useState } from 'react';
import Button from './Button';
import { add, subtract, multiply, divide } from '../utils/calculations';

const Calculator: React.FC = () => {
    const [input, setInput] = useState<string>(''); // The input string from the user
    const [result, setResult] = useState<string>(''); // The calculated result

    const handleButtonClick = (value: string) => {
        if (value === '=') {
            try {
                // Parse and perform calculation
                const calculationResult = calculate(input);
                setResult(calculationResult.toString());
            } catch (error) {
                setResult('Error');
            }
            setInput('');
        } else if (value === 'C') {
            // Clear input and result
            setInput('');
            setResult('');
        } else {
            // Append the clicked value to the input string
            setInput((prev) => prev + value);
        }
    };

    // Helper function to evaluate the input expression manually
    const calculate = (expression: string) => {
        // Split the input expression by operators
        const operands = expression.split(/[\+\-\*\/]/).map((num) => parseFloat(num.trim()));
        const operators = expression.match(/[\+\-\*\/]/g);

        if (!operators || operands.length <= 1) return operands[0];

        // Perform the calculations step by step
        let result = operands[0];
        for (let i = 0; i < operators.length; i++) {
            switch (operators[i]) {
                case '+':
                    result = add(result, operands[i + 1]);
                    break;
                case '-':
                    result = subtract(result, operands[i + 1]);
                    break;
                case '*':
                    result = multiply(result, operands[i + 1]);
                    break;
                case '/':
                    result = divide(result, operands[i + 1]);
                    break;
                default:
                    throw new Error('Invalid operator');
            }
        }

        return result;
    };

    return (
        <div className="calculator">
            <div className="display">
                <div className="input">{input}</div>
                <div className="result">{result}</div>
            </div>
            <div className="buttons">
                {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', 'C', '0', '=', '/'].map((label) => (
                    <Button key={label} label={label} onClick={() => handleButtonClick(label)} />
                ))}
            </div>
        </div>
    );
};

export default Calculator;
