import React, { Component } from "react";
import { Grid, Divider, Form } from "semantic-ui-react";
import Sel from "../Material/Sel";
import Point from "../Material/Point";
import Time from "../Material/Time";
import styled from "styled-components";
import Upload from "../Material/Upload"

const InputForm = styled.div`
  .gridForm{position:relative;}
  .profileBox{
    margin:30px auto;
    width:75%;
    height:300px;
    border:2px dotted #d9d9d9;
  }
  .pointForm>div:nth-of-type(1){
    width:90%;
    margin:0 auto;
  }
`


class Detailinput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      previewURL: "",
    };
  }
  handleFileOnChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        previewURL: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };
  render() {
    const { quiz, setQuiz } = this.props;
    let profile_preview = null;
    if (this.state.file !== "") {
      profile_preview = (
        <img
          className="profile_preview"
          src={this.state.previewURL}
          alt="profile"
          width="400px"
        />
      );
    }
    const centerForm={
      position:"absolute",
      top:"50%",
      left:"50%",
      transform:"translate(-50%,-50%)",
      boxShadow:"2px 2px 8px 2px #ececec",
      border:"1px solid #d9d9d9",
      borderRadius:"20px",
    }
    const leftForm = {width:"20%",textAlign:"center"}
    return (
      <InputForm>
        <Grid columns={2} divided className="gridForm">
          <Grid.Column style={leftForm}>

            <div className="TimeForm">
            <Time quiz={quiz} setQuiz={setQuiz} />
            </div>
            <Divider />
            <div className="pointForm">
              <Point quiz={quiz} setQuiz={setQuiz}/>
            </div>
            <Divider />

            <p> Answer Option</p>
            <Sel quiz={quiz} />
          </Grid.Column>

          <Grid.Column style={centerForm}>
            <Form>
              <Upload/>
            </Form>
          </Grid.Column>
        </Grid>
      </InputForm>
      
    );
  }
}

export default Detailinput;