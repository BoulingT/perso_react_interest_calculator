import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import {Fragment, useState} from "react";
import Results from "./components/Results.jsx";

const initialInvestments = {
    initialInvestment: 10000,
    annualInvestment: 3600,
    expectedReturn: 8,
    duration: 10,
}

function App() {
    const [userInput, setUserInput] = useState(initialInvestments);

    const isInputValid = userInput.duration >= 1;

    function handleUserInputChange(inputIdentifier, newValue) {
        setUserInput(previousInvestments => {
            return {
                ...previousInvestments,
                [inputIdentifier]: +newValue,
            };
        });
    }

    return (
        <Fragment>
            <Header/>
            <UserInput investments={userInput} onChange={handleUserInputChange}/>
            {!isInputValid && <p>Please enter a duration greater than 0</p>}
            {isInputValid && <Results input={userInput}/>}
        </Fragment>

    )
}

export default App
