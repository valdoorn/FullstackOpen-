import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);

  const startVotes = new Array(anecdotes.length).fill(0);

  const [votes, setVotes] = useState(startVotes);

  const getRandomAnecdote = () => {
    const randomAnecdoteIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomAnecdoteIndex);
  };

  const handleVoteClicks = () => {
    const newVoteClick = [...votes];
    console.log(newVoteClick);
    newVoteClick[selected] += 1;
    setVotes(newVoteClick);
  };

  const maxVoteIndex = votes.indexOf(Math.max(...votes));

  return (
    <>
      <h2>Anecdote of the Day</h2>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>
      <button onClick={getRandomAnecdote}>Next Anecdote</button>
      <button onClick={handleVoteClicks}>Vote</button>
      <h2>Anecdote with most Votes</h2>
      {votes[maxVoteIndex] === 0 ? (
        <p>No vote(s) given</p>
      ) : (
        <>
          <p>{anecdotes[maxVoteIndex]}</p>
          <p>Has {votes[maxVoteIndex]} vote(s)</p>
        </>
      )}
    </>
  );
};

export default App;
