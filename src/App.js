import {useEffect, useState} from 'react'

const Block = (props) => {
  const blockstyle = {
    "border": "1px solid black",
    "width": 75,
    "height": 75
  }
  
  return (
    <>
      <div style={blockstyle} onClick={props.handleClick} >
        {props.player}
      </div>
    </>
  )
}

const GameBoard = ({board, handleClick}) => {
  const container = {
    "display": "grid",
    "gridTemplateColumns": "repeat(3, 80px)",
    "gridTemplateRows": "80px 80px 80px"
  }

  return (
    <div style={container}> 
        {board.map((row, y) => row.map((column, x) => { 
          let player = ''
          
          if (column === 'o') {
            player = 'o'
          } else if (column === 'x') {
            player = 'x'
          } else {
            player = ''
          }
          
          return <Block  player={player} handleClick={() => handleClick({y, x})} />
        
        })
          
          )}
      </div>
  )
}

const App = () => {
  const [turn, setTurn] = useState('x')
  const [winner, setWinner] = useState()
  const initialGameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]
  const winningConditions = [
    [[0,0],[0,1],[0,2]],
    [[1,0],[1,1],[2,1]],
    [[2,0],[2,1],[2,2]],

    [[0,0],[1,0],[2,0]],
    [[0,1],[1,1],[2,1]],
    [[0,2],[1,2],[2,2]],

    [[0,0],[1,1],[2,2]],
    [[0,2],[1,1],[2,0]],
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
    //should deep copy gameBoard
    const newBoard = [...board.map(array => array.slice())]
    newBoard[y][x] = turn
    const helpTurn  = turn === 'x' ? 'o' : 'x'
    setTurn(helpTurn)
    setBoard(newBoard)
  }

  
  
  return (
    <div className="App" >
      <h1>Test</h1>
      <strong>Turn {turn}</strong>
      <GameBoard board={board} handleClick={handleClick}/>
      <button onClick={() => {
        setBoard(initialGameBoard)
        setTurn('x')
        }}>
          reset
      </button>
    </div>
  );
}

export default App;
