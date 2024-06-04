import styled from 'styled-components'
import dices from '/images/dices_main.png'

const StartGame = ({ toggle }) => {

  const startGame = () => {
    document.querySelector(`.${Container.styledComponentId}`).classList.add('removed');
    setTimeout(() => {
      toggle();
    }, 200);
  }

  return (
    <Container>
      <div>
        <img draggable={false} src={dices} alt="" />
      </div>
      <div className="content">
        <h1>
          dice game
        </h1>
        <Button onClick={startGame}>play now</Button>
      </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  height: 100dvh;
  max-width: 1180px;
  align-items: center;
  opacity: 1;
  transition: all 0.2s ease;

  &.removed{
    opacity: 0;
    pointer-events: none;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: end;
  }

  .content h1 {
    font-size: 96px;
    font-family: Poppins;
    text-transform: uppercase;
    white-space: nowrap;
  }
`

const Button = styled.button`
  font-family: "Poppins";
  padding: 10px 18px;
  min-width: 220px;
  background: #000;
  color: #FFF;
  border-radius: 5px;
  text-transform: capitalize;
  border: 1px solid black;
  outline: none;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  transition: all .2s ease-in;
  cursor: pointer;
  
  &:hover {
    background-color: #FFF;
    color: black;
    transition: all .2s ease-in;
  }
`