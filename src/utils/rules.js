const winningConditions = [
  [[0,0],[0,1],[0,2]],
  [[1,0],[1,1],[1,2]],
  [[2,0],[2,1],[2,2]],

  [[0,0],[1,0],[2,0]],
  [[0,1],[1,1],[2,1]],
  [[0,2],[1,2],[2,2]],

  [[0,0],[1,1],[2,2]],
  [[0,2],[1,1],[2,0]],
]

const checkWinner = (board) => {
  for (let i = 0; i < winningConditions.length; i++) {
    //double array destructing
    const [columnA, columnB, columnC] = winningConditions[i]
    const [x1, y1] = columnA
    const [x2, y2] = columnB
    const [x3, y3] = columnC

    if(board[x1][y1] === 'x' && board[x2][y2] === 'x' && board[x3][y3] === 'x') {
      console.log('x WIN')
      return 'x'
    } else if (board[x1][y1] === 'o' && board[x2][y2] === 'o' && board[x3][y3] === 'o') {
      console.log('o WIN')
      return 'o'
    }
  }

  return null
}

export default checkWinner