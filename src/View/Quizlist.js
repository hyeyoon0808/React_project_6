import React, { Component } from "react";
import Quizitem from "./Quizitem";
import { ItemGroup } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import styled from "styled-components";
import Add from "../Material/Add";
import Import from "../Material/Import";

const MapList = styled.div`
  box-shadow: 0px 0px 4px #b3b3b3;
  height: 100%;
  overflow: scroll;
  .center {
    display: block;
    margin: 0 auto;
  }
  .import>button{margin-top:100px;}
`

class Quizlist extends Component {
  render() {
    const arr = [1, 2, 3, 4, 5];
    const {
      quizs,
      onRemove,
      onSelect,
      onAddQuiz,
      selectquiz,
      onItemMouseOver,
      hoverquiz,
    } = this.props;

    const quizlist = quizs.map((quiz, index) => (
      <Quizitem
        index={index + 1}
        quiz={quiz}
        onRemove={onRemove}
        onSelect={onSelect}
        onAddQuiz={onAddQuiz}
        selectquiz={selectquiz}
        onItemMouseOver={onItemMouseOver}
        hoverquiz={hoverquiz}
      />
    ));

    return (
      <MapList>
        <ItemGroup>{quizlist}</ItemGroup>

<<<<<<< Updated upstream
        <Add onAddQuiz={onAddQuiz}/>
          
        <div className={"import"}>
          <Import/>
        </div>

=======
        <Add onAddQuiz={onAddQuiz} />
>>>>>>> Stashed changes
      </MapList>
    );
  }
}

export default Quizlist;
