import {useEffect, useState} from 'react'
import GameBoard from './components/GameBoard'
import checkWinner from './utils/rules'
import styled from 'styled-components'
import Button from './components/Button'

const App = () => {
  const [turn, setTurn] = useState('x')
  const [winner, setWinner] = useState(null)
  const initialGameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]
  const [board, setBoard] = useState(initialGameBoard)

  useEffect(() => {
    setWinner(checkWinner(board))
  }, [board])

  const handleClick = ({y, x}) => {
    if (board[y][x] !== '' || winner !== null) {
      return
    }
    //deep copy gameBoard
    const newBoard = [...board.map(array => array.slice())]
    newBoard[y][x] = turn
    const newTurn  = turn === 'x' ? 'o' : 'x'

    setTurn(newTurn)
    setBoard(newBoard)
  }

  return (
    <Container>
      <h1>Tic Tac Toe</h1>
      <div>Turn:<strong> {turn}</strong></div>
      <GameBoard board={board} handleClick={handleClick} /> 
      {winner !== null ? <h3>{winner} is the winner</h3> : ''}
      
      <Button 
        label={'reset'}
        setBoard={() => setBoard(initialGameBoard)}
        setTurn={ () => setTurn('x')}
        setWinner={() => setWinner(null)}
      />
    </Container>
  );
}

const Container = styled.div`
  margin-left: 10%;
`

export default App;
