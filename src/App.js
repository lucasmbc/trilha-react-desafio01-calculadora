import Input from "./components/Input";
import Button from "./components/Button";

import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
    const [currentNumber, setCurrentNumber] = useState("0");
    const [firstNumber, setFirstNumber] = useState("0");
    const [operation, setOperation] = useState("");
    console.log("Current Number: ", currentNumber);
    console.log("First Number: ", firstNumber);

    const formatNumberForCalculation = (numberString) => {
        return numberString.replace(",", ".");
    };

    const calculatePercentage = (firstNumber, currentNumber) => {
        return Number(firstNumber) * (Number(currentNumber) / 100);
    };

    const calculateSquareRoot = (number) => {
        return Math.sqrt(Number(number));
    };

    const toggleSignal = (number) => {
        return number.startsWith("-") ? number.slice(1) : `-${number}`;
    };

    const handleOnClear = () => {
        setCurrentNumber("0");
        setFirstNumber("0");
        setOperation("");
    };

    const handleAddNumber = (num) => {
        setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
    };

    const handleAddDecimal = () => {
        if (!currentNumber.includes(",")) {
            if (currentNumber === "0") {
                setCurrentNumber("0,");
            } else {
                setCurrentNumber((prev) => `${prev},`);
            }
        }
    };

    const handleSumNumbers = () => {
        if (firstNumber === "0") {
            setFirstNumber(String(currentNumber));
            setCurrentNumber("0");
            setOperation("+");
        } else {
            const sum =
                Number(formatNumberForCalculation(firstNumber)) +
                Number(formatNumberForCalculation(currentNumber));
            setCurrentNumber(sum.toString().replace(".", ","));
            setOperation("");
        }
    };

    const handleMinusNumbers = () => {
        if (firstNumber === "0") {
            setFirstNumber(String(currentNumber));
            setCurrentNumber("0");
            setOperation("-");
        } else {
            const minus =
                Number(formatNumberForCalculation(firstNumber)) -
                Number(formatNumberForCalculation(currentNumber));
            setCurrentNumber(minus.toString().replace(".", ","));
            setOperation("");
        }
    };

    const handleMultiplyNumbers = () => {
        if (firstNumber === "0") {
            setFirstNumber(String(currentNumber));
            setCurrentNumber("0");
            setOperation(".");
        } else {
            const multiply =
                Number(formatNumberForCalculation(firstNumber)) *
                Number(formatNumberForCalculation(currentNumber));
            setCurrentNumber(multiply.toString().replace(".", ","));
            setOperation("");
        }
    };

    const handleDivideNumbers = () => {
        if (firstNumber === "0") {
            setFirstNumber(String(currentNumber));
            setCurrentNumber("0");
            setOperation("/");
        } else {
            const divide =
                Number(Number(formatNumberForCalculation(firstNumber))) /
                Number(formatNumberForCalculation(currentNumber));
            setCurrentNumber(divide.toString().replace(".", ","));
            setOperation("");
        }
    };

    const handleSquareRootNumbers = () => {
        const squareRoot = calculateSquareRoot(currentNumber);
        setCurrentNumber(String(squareRoot));
    };

    const handlePercentNumbers = () => {
        if (firstNumber === "0") {
            setFirstNumber(String(currentNumber));
            setCurrentNumber("0");
            setOperation("%");
        } else {
            const percent = calculatePercentage(firstNumber, currentNumber);
            setCurrentNumber(String(percent));
            setOperation("");
        }
    };

    const handleToggleSignal = () => {
        const newNumber = toggleSignal(currentNumber);
        setCurrentNumber(newNumber);
    };

    const handleEquals = () => {
        if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
            switch (operation) {
                case "+":
                    handleSumNumbers();
                    break;
                case "-":
                    handleMinusNumbers();
                    break;
                case ".":
                    handleMultiplyNumbers();
                    break;
                case "/":
                    handleDivideNumbers();
                    break;
                default:
                    break;
            }
        }
    };

    return (
        <Container>
            <Content>
                <Input value={currentNumber} />
                <Row>
                    <Button label="%" onClick={handlePercentNumbers} />
                    <Button label="&radic;" onClick={handleSquareRootNumbers} />
                    <Button label="c" onClick={handleOnClear} />
                    <Button label="&divide;" onClick={handleDivideNumbers} />
                </Row>
                <Row>
                    <Button label="7" onClick={() => handleAddNumber("7")} />
                    <Button label="8" onClick={() => handleAddNumber("8")} />
                    <Button label="9" onClick={() => handleAddNumber("9")} />
                    <Button label="x" onClick={handleMultiplyNumbers} />
                </Row>
                <Row>
                    <Button label="4" onClick={() => handleAddNumber("4")} />
                    <Button label="5" onClick={() => handleAddNumber("5")} />
                    <Button label="6" onClick={() => handleAddNumber("6")} />
                    <Button label="-" onClick={handleMinusNumbers} />
                </Row>
                <Row>
                    <Button label="1" onClick={() => handleAddNumber("1")} />
                    <Button label="2" onClick={() => handleAddNumber("2")} />
                    <Button label="3" onClick={() => handleAddNumber("3")} />
                    <Button label="+" onClick={handleSumNumbers} />
                </Row>
                <Row>
                    <Button label="&plusmn;" onClick={handleToggleSignal} />
                    <Button label="0" onClick={() => handleAddNumber("0")} />
                    <Button label="," onClick={handleAddDecimal} />
                    <Button label="=" onClick={handleEquals} />
                </Row>
            </Content>
        </Container>
    );
};

export default App;
