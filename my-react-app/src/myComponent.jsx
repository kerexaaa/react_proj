import React, {useState} from 'React'

export default function MyComponent() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmploy] = useState(false);

    const updateName = () => {
        setName("kerexaaa");
    }

    const incrementAge = () => {
        setAge(age + 2);
    }

    const toggleIsEmployed = () => {
        setIsEmploy(!isEmployed);
    }

    return(
        <>
            <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>

                <p>Age: {age}</p>
                <button onClick={incrementAge}>Increment Age</button>

                <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
                <button onClick={toggleIsEmployed}>Toggle status</button>
            </div>
        </>
    );
}