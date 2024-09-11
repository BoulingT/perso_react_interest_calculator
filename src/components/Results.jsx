import {calculateInvestmentResults, formatter} from "../util/investment.js";

export default function Results({input}) {
    const resultsData = calculateInvestmentResults(input);
    const initialInvestment = input.initialInvestment;

    return (
        <table id='result'>
            <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>InvestedCapital</th>
            </tr>
            </thead>
            <tbody>
            {resultsData.map((yearData) => {
                const totalInterestValue = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                const totalAmountInvested = yearData.valueEndOfYear - totalInterestValue;
                return (
                    <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterestValue)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}