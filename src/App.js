import {useEffect, useState} from 'react'
import GameBoard from './components/GameBoard'
import {winningConditions} from './utils/rules'
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
    const checkWinner = () => {
      for (let i = 0; i < winningConditions.length; i++) {
        const [columnA, columnB, columnC] = winningConditions[i]
        const [x1, y1] = columnA
        const [x2, y2] = columnB
        const [x3, y3] = columnC
  
        if(board[x1][y1] === 'x' && board[x2][y2] === 'x' && board[x3][y3] === 'x') {
          console.log('x WIN')
          setWinner('x')
        } else if (board[x1][y1] === 'o' && board[x2][y2] === 'o' && board[x3][y3] === 'o') {
          console.log('o WIN')
          setWinner('o')
        }
      }
    }

    checkWinner()

  }, [board])

  const handleClick = ({y, x}) => {
    if (board[y][x] !== '') {
      return
    }

    //should deep copy gameBoard
    const newBoard = [...board.map(array => array.slice())]
    newBoard[y][x] = turn
    const newTurn  = turn === 'x' ? 'o' : 'x'

    setTurn(newTurn)
    setBoard(newBoard)
  }

  return (
    <Container>
      <h1>Tic Tac Toe</h1>
      <div>Turn<strong> {turn}</strong></div>
      {winner === null ?
        <GameBoard board={board} handleClick={handleClick}/> :
        <h1>{winner} is the winner</h1>
      }
      
      <Button 
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
