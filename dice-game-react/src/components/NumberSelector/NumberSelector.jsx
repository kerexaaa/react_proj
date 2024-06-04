import styled from "styled-components";

const NumberSelector = ({ error, setError, selectedNumber, setSelectedNumber }) => {

    const arrayNumbers = [1, 2, 3, 4, 5, 6];

    const selectNumber = (number) => {
        setSelectedNumber(number);
        setError("");
    }

    return (
        <Container>
            {error !== "" && <Error>{error}</Error>}
            <div className="wrapper">
                {arrayNumbers.map((number,index) => (
                    <Box selected={number == selectedNumber} key={index} onClick={() => selectNumber(number)}>{number}</Box>
                ))}
            </div>
            <p>
                Select Number
            </p>
        </Container>
    )
}

export default NumberSelector

const Error = styled.p`
    font-family: Poppins;
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    color: #FF0C0C;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;

    .wrapper {
        display: flex;
        gap: 24px;
    }

    p {
        font-family: Poppins;
        margin-top: 24px;
        font-size: 24px;
        font-weight: 700;
        line-height: 36px;
    }
`

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-family: Poppins;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    transition: all .2s ease-in;
    background-color: ${(props) => props.selected ? "black" : "white"};
    color: ${(props) => props.selected ? "white" : "black"};
    cursor: pointer;

    &:hover {
        background-color: black;
        color: white;
    }
`