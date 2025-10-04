import React, {useState} from "react";
import styled from "styled-components";
import { SearchBarProps } from "../interface/weatherInterface";

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  gap: 8px;
  flex-wrap: wrap;
`;

const Input = styled.input`
   padding: 12px 16px;
   width: 338px;
   border-radius: 5px;
   font-size: 16px;
   border: none;
   outline: none;
   @media screen and (max-width: 480px){
    width: 80vw;
   }
`;

const Button = styled.button`
  color: white;
  background-color: #2563eb;
  padding: 12px 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #1e40af;
  }
  @media screen and (max-width: 480px){
    margin-top: 10px;
  }
`;

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [city, setCity] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if(city.trim()){
            onSearch(city.trim());
            setCity("");
        }
    }
    return (
        <SearchForm onSubmit={handleSearch}>
            <Input 
              type='text'
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter the city name"
            />
            <Button type='submit'>Search</Button>
        </SearchForm>
    );
};
export default SearchBar;