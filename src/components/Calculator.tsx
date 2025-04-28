import React, { useState } from 'react';
import Button from './Button';
import { add, subtract, multiply, divide } from '../utils/calculations';

const Calculator: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [result, setResult] = useState<string>('');

    const handleButtonClick = (value: string) => {
        if (value === '=') {
            try {
                const evalResult = eval(input); // Note: eval is used for simplicity, consider a safer alternative for production
                setResult(evalResult.toString());
            } catch (error) {
                setResult('Error');
            }
            setInput('');
        } else if (value === 'C') {
            setInput('');
            setResult('');
        } else {
            setInput(prev => prev + value);
        }
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