import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import QuizlistContainer from "./Container/QuizlistContainer";
import QuizdetailContainer from "./Container/QuizdetailContainer";
import Nav from './Material/Nav';
import './App.scss';
import styled from 'styled-components';
import {inject,observer} from "mobx-react";

const Wrap = styled.div``;

@inject("QuizStore")
@observer
class App extends Component {
  
  start = () =>{
    console.log('start');
    this.props.QuizStore.setstart(true);
  }

  render() {
    const tempStyle = {
      padding:"0px",
      height:"100%"
    }
    const marginRemove ={
      height:'100%',
      margin:"0px"
    }

    const gamestart = this.props.QuizStore.getgamestart;
    console.log(gamestart);

    return (
      <Wrap style={tempStyle} className={"navStyle"} >
        <Nav gamestart={gamestart} start={this.start}/>
        

          {gamestart && true ? 
          (
            <Grid columns={2} divided  style={marginRemove} >
            <Grid.Row  style={tempStyle} >
            <Grid.Column width={3} style={tempStyle} >
              <QuizlistContainer />
            </Grid.Column>
            <Grid.Column width={12}>
              {/* <QuizdetailContainer /> */}
            </Grid.Column>
            </Grid.Row>
            </Grid>
            )
            :
            (
              <Grid columns={2} divided  style={marginRemove} >
            <Grid.Row  style={tempStyle} >
              <Grid.Column width={3} style={tempStyle} >
                <QuizlistContainer />
              </Grid.Column>

              <Grid.Column width={12}>
                <QuizdetailContainer />
              </Grid.Column>
              </Grid.Row>
            </Grid>)}
      </Wrap>
    );
  }
}

export default App;
