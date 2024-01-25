import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import CardCharacter from "./CardCharacter";

export default class SearchHar extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      searchResult: [],
      searching: false,
      results: false,
    };
  }

  handleSearch = async () => {
    this.setState({ searching: true });
    try {
      const response = await axios.get(
        `https://swapi.dev/api/people/?search=${this.state.searchTerm}`
      );
      this.setState({ searchResult: response.data.results });
      if (!response.data.results.length) {
        this.setState({ results: true });
      }
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ searching: false });
    }
  };

  render() {
    return (
      <Wrapper>
        <h1>Star Wars Searcher</h1>
        <div>
          <InputMain
            type="text"
            placeholder="Enter character name"
            value={this.state.searchTerm}
            onChange={(e) => {
              this.setState({ searchTerm: e.target.value });
            }}
          />
          <ButtonMain onClick={this.handleSearch}>Search</ButtonMain>
        </div>
        {this.state.searching && <p>Searching...</p>}
        {this.state.searchResult.length ? (
          <div>
            <h2>Search Results:</h2>
            <CharacterList>
              {this.state.searchResult.map((character, index) => (
                <CardCharacter key={index} character={character} />
              ))}
            </CharacterList>
          </div>
        ) : this.state.results ? (
          !this.state.searching && <h2>No results</h2>
        ) : (
          !this.state.searching && <h2>Start searching</h2>
        )}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  text-align: center;
  h1 {
    color: #ffe81f;
  }
`;
const InputMain = styled.input`
  padding: 10px;
  margin-right: 10px;
`;
const ButtonMain = styled.button`
  padding: 10px 20px;
  background-color: #ffe81f;
  color: #000;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.4s;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

const CharacterList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
