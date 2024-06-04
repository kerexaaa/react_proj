import styled from 'styled-components'
import logo from '/logo.svg'
import { useEffect, useState } from 'react';
import SearchResult from './components/SearchResult/SearchResult';

export const BASE_URL = "http://localhost:9000"



const App = () => {

  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedButton, setSelectedButton] = useState("all");

  useEffect(() => {
    const fetchFoodData = async() => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
  
        const json = await response.json();
        
        setData(json);
        setFilteredData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data");
      }
    }
    fetchFoodData();
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;

    if (searchValue == "") {
      setFilteredData(null);
    }

    const filter = data?.filter(food => food.name.toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredData(filter);
  }

  const filterFood = (type) => {
    if (type == "all") {
      setFilteredData(data);
      setSelectedButton("all");
      return
    }
    
    const filter = data?.filter(food => food.type.toLowerCase().includes(type.toLowerCase()));
    setFilteredData(filter);
    setSelectedButton(type);
  }

  const filterButtons = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ]

  if (error) {
    return <div>{error}</div>
  }

  if (loading) {
    return <div>loading...</div>
  }

  return(
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>

          <div className="search">
            <input onChange={searchFood} type="text" placeholder="Search Food..."/>
          </div>
        </TopContainer>
        <FilterContainer>
          {
            filterButtons.map((button) => (
              <Button selected={selectedButton == button.type} key={button.name} onClick={() => filterFood(button.type)}>{button.name}</Button>
            ))
          }
        </FilterContainer>
      </Container>
      <SearchResult data={filteredData}></SearchResult>
    </>
  );
};

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto; 
`

const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  
  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;

      &::placeholder {
        color: white;
      }
    }
  }

  @media (0px < width < 600px) {
    flex-direction: column;
    min-height: 120px;
  }
`

const FilterContainer = styled.section`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`

export const Button = styled.button`
  text-transform: capitalize;
  background:  ${(props) => props.selected ? "#ff1212" : "#FF4343"};
  outline: 1px solid ${(props) => props.selected ? "white" : "#FF4343"};
  border-radius: 5px;
  padding: 6px 12px;
  color: white;
  border: none;
  cursor: pointer;
  transition: all .2s ease;

  &:hover {
    background-color: #ff1212;
  }
`