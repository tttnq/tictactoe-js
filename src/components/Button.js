import styled from 'styled-components'

const Button = (props) => {
  return (
    <ResetButton onClick={() => {
      props.setBoard()
      props.setTurn()
      props.setWinner()
    }}>
      reset
    </ResetButton>
    )
}

const ResetButton = styled.button`
  background-color: red;
  height: 30px;
  width: 60px;
  margin-top: 2%;
`

export default Button