import styled from "styled-components"

const RollDice = ({ currentDice, rollDice }) => {

    return (
        <DiceContainer>
            <div className="dice" onClick={rollDice}>
                <img draggable={false} src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    )
}

export default RollDice

const DiceContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 48px;
    flex-direction: column;
    align-items: center;

    .dice {
        cursor: pointer;
    }

    p {
        font-family: Poppins;
        font-size: 24px;
        font-weight: 500;
        line-height: 36px;
    }
`