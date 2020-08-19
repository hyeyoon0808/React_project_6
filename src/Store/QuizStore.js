import { observable, computed, action } from "mobx";
import Quizs from "../Quiz";


class QuizStore {
  @observable quizs = Quizs;
  @observable selectquiz = Quizs[0];
  @observable hoverquiz;
  @observable gamestart = false;

  @observable checked = false;
  @observable selectedFile = null;

  @computed
  get getquizs() {
    return this.quizs ? this.quizs.slice() : [];
  }

  @computed
  get getselectquiz() {
    return this.selectquiz ? this.selectquiz : {};
  }

  @computed
  get getcheckedquiz() {
    return this.checked ? this.checked : {};
  }

  @computed
  get getgamestart() {
    return this.gamestart ? this.gamestart : false;
  }

  @action
  setQuizProps(name, value) {
    console.log(name);
    console.log(value.name, " Success!!");
    // var data = new FormData();
    // data.append("file", value);
    // console.log("Form Data", data);
    this.selectquiz = {
      ...this.selectquiz,
      [name]: value,
    };
  }

  @action
  selectQuiz(quiz) {
    this.selectquiz = quiz;
  }

  @action
  setFileProps(event) {
    console.log(event);
    this.selectquiz = {
      ...this.selectquiz,
      [this.selectquiz.imgUrl]: event.target.checked,
    };
  }

  // @action
  //  getPostProps() {
  //   const formData = new FormData();
  //   formData.append("file", this.selectedFile);
  //   return axios
  //     .post("/public/book_images", formData)
  //     .then((res) => {
  //       alert("succeed");
  //     })
  //     .catch((err) => {
  //       alert("failed");
  //     });
  // }

  @action
  Remove(ISBN) {
    this.quizs = this.quizs.filter((quiz) => quiz.ISBN !== ISBN);
  }

  @action
  ItemMouseOver(quiz) {
    this.hoverquiz = quiz;
  }

  @action
  addQuiz(quiz) {
    this.quizs.push(quiz);
  }

  @action
  Modify(quiz) {
    this.quizs = this.quizs.map((elem) =>
      elem.ISBN === quiz.ISBN ? quiz : elem
    );
  }

  @action
  setstart(value) {
    this.gamestart = value;
  }
}

export default new QuizStore();
