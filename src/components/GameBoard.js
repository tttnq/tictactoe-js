import styled from 'styled-components'

const Block = (props) => {
  return (
    <BlockContainer  onClick={props.handleClick} >
      <BlockText>{props.player}</BlockText>
    </BlockContainer>      
  )
}

const GameBoard = ({board, handleClick}) => {
  return (
    <BoardContainer> 
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
          
      }))}
    </BoardContainer>
  )
}

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 80px);
  grid-template-rows: 80px 80px 80px;
`;

const BlockContainer = styled.div`
  border: 1px solid black;
  font-size: large;
  border-radius: 5%;
  width: 75px;
  height: 75px;
  &:hover  {
    width: 80px;
    height: 80px;
  }
`;

const BlockText = styled.div`
  font-size: 60px;
  text-align: center;
`

export default GameBoard