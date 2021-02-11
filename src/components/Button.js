import styled from 'styled-components'

const Button = (props) => {
  return (
    <ResetButton onClick={() => {
      props.setBoard()
      props.setTurn()
      props.setWinner()
    }}>
      {props.label}
    </ResetButton>
    )
}

const ResetButton = styled.button`
  background-color: darkgrey;
  height: 30px;
  width: 60px;
  margin-top: 2%;
`

export default Button