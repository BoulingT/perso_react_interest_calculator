import {useState} from "react";

const initialInvestments = {
    initialInvestment: 100000,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
}

export default function UserInput({investments, onChange}) {
    return (
        <section id="user-input">
            <div className='input-group'>
                <p>
                    <label>Initial Investment</label>
                    <input type='number' required value={investments.initialInvestment}
                           onChange={(event) => onChange('initialInvestment', event.target.value)}/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type='number' required value={investments.annualInvestment}
                           onChange={(event) => onChange('annualInvestment', event.target.value)}/>
                </p>
            </div>
            <div className='input-group'>
                <p>
                    <label>Expected return</label>
                    <input type='number' required value={investments.expectedReturn}
                           onChange={(event) => onChange('expectedReturn', event.target.value)}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type='number' required value={investments.duration}
                           onChange={(event) => onChange('duration', event.target.value)}/>
                </p>
            </div>
        </section>
    );
}