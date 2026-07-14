import { useState } from "react";

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick}>{props.text}</button>
    </>
  );
};

const StatisticLine = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.text}</td>
        <td>{Math.round(props.value * 10) / 10}</td>
      </tr>
    </tbody>
  );
};

const Statistics = (props) => {
  if (!(props.good || props.neutral || props.bad)) {
    return "No feedback given";
  }

  if (props.text === "positive") {
    return props.value + " %";
  }

  return (
    <table>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine
        text="all"
        value={props.good + props.neutral + props.bad}
      />
      <StatisticLine
        text="average"
        value={
          (props.good - props.bad) / (props.good + props.neutral + props.bad)
        }
      />
      <StatisticLine
        text="positive"
        value={(props.good * 100) / (props.good + props.neutral + props.bad)}
      />
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClicked = () => setGood(good + 1);

  const handleNeutralClicked = () => setNeutral(neutral + 1);

  const handleBadClicked = () => setBad(bad + 1);

  return (
    <>
      <h2>give feedback</h2>
      <Button onClick={handleGoodClicked} text="good" />
      <Button onClick={handleNeutralClicked} text="neutral" />
      <Button onClick={handleBadClicked} text="bad" />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
