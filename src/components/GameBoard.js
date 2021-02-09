import react from 'react'

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
  
            const stringKey = '' + y + x
            return <Block key={stringKey}  player={player} handleClick={() => handleClick({y, x})} />
          
          })
            
            )}
        </div>
    )
  }

  export default GameBoard