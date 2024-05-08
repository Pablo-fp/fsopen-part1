import { useState } from 'react'

const Header = ({title}) => <h1>{title}</h1>;

const Anecdote = ({ anecdote, vote }) => (
  <div>
    <div>
      {anecdote}
    </div>
    <div>
      has {vote} votes
    </div>
  </div>
)

const Button = ({ onClick, text }) => {
    return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes ] = useState(Array(anecdotes.length).fill(0))
  const mostVotedIndex = votes.indexOf(Math.max(...votes))

  const handleNextAnecdote = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
};

  const handleVote = () => {
    setVotes(votes.map((anec, index) => (index === selected ? anec + 1 : anec)))
  }

  return (
    <div>
      <Header title = 'Anecdote of the day' />
      <Anecdote anecdote={ anecdotes[selected] } vote={ votes[selected]} />
      <Button text="vote" onClick={handleVote} />
      <Button text="next anectode" onClick={handleNextAnecdote} />
      <Header title = 'Anecdote with most votes' />
      <Anecdote anecdote={ anecdotes[mostVotedIndex] } vote={ votes[mostVotedIndex]} />
    </div>
    
  )
}

export default App
