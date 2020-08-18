import React, { Component } from "react";
import Detailinput from "../View/Detailinput";
import { inject, observer } from "mobx-react";

@inject("QuizStore")
@observer
class DetailinputContainer extends Component {
  setQuiz = (name, value) => {
    this.props.QuizStore.setQuizProps(name, value);
  };
  setImage = (name, value) => {
    this.props.QuizStore.setImageProps(name, value);
  };

  render() {
    const quiz = this.props.QuizStore.getselectquiz;
    return (
      <div>
        <Detailinput
          quiz={quiz}
          setQuiz={this.setQuiz}
          setImage={this.setImage}
        />
      </div>
    );
  }
}

export default DetailinputContainer;
