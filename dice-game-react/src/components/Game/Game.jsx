import styled from "styled-components"
import TotalScore from "../TotalScore.jsx/TotalScore"
import NumberSelector from "../NumberSelector/NumberSelector"
import RollDice from "../RollDice/RollDice"
import { Button, OutlineButton } from "./Buttons"
import { useState } from "react"

const Game = ({ isGameStarted }) => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice,setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [isRulesVisible, setIsRulesVisible] = useState(false);

  const generateRandomNumber = (min,max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const rollDice = () => {
    if(!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);


    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2 
        // {< 0 ? 0 : prev - 2}
      );
    }

    setSelectedNumber(undefined);
  }

  const resetScore = () => {
    setScore((prev) => 0);
  }

  const showRules = () => {
    setIsRulesVisible((prev) => !prev);
  }

  return (
    <MainContainer>
      {isRulesVisible && 
        <RulesContainer onClick={showRules}>
          <Rules>
            <h3>How to play dice game</h3>
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>if you get wrong guess then you will lose 2 points</p>
          </Rules>
        </RulesContainer>
      }
      <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      </div>
      <RollDice rollDice={rollDice} currentDice={currentDice}/>
      <div className="buttons">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={showRules}>Show Rules</Button>
      </div>
    </MainContainer>
  )
}

export default Game

const MainContainer = styled.main`
  padding-top: 70px;
  opacity: 1;
  transition: all .2s ease-in;

  &.started {
    opacity: 1;
  }

  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .buttons {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`

const RulesContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0.3);
  position: absolute;
  top: 0;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const Rules = styled.div`
  background-color: #FBF1F1;
  padding: 20px;

  h3 {
    font-family: Poppins;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    margin-bottom: 20px;
  }

  p {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    line-height: 28px;
  }
`