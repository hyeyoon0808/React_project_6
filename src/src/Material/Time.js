import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import styled from 'styled-components';

const ButtonBox = styled.div`
  possition:relative;
  .hover{
    &:hover{
      background:#4f018b;
    }
  }
`

export default function UploadButtons({quiz,setQuiz}) {

  const [visible, setVisible] = React.useState(false); 

  const big = {
    marginBottom:'25px',
    borderRadius:'100%',
    width:'90px',
    height: '90px',

    background: visible ? '#4f018b' : 'white',
    border:'0',
    boxShadow:'0px 1px 1px 0px black',
  }

  const small = {
    position:'absolute',
    borderRadius:'100%',
    width:'45px',
    height: '45px',
    top:'-12%',
    left:'42%',
  }

  const small1 = {
    position:'absolute',
    borderRadius:'100%',
    width:'45px',
    height: '45px',
    top:'-5%',
    left:'64%',
  }

  const small2 = {
    position:'absolute',
    borderRadius:'100%',
    width:'45px',
    height: '45px',
    top:'10%',
    left:'71%',
  }

  const small3 = {
    position:'absolute',
    borderRadius:'100%',
    width:'45px',
    height: '45px',
    left:'64%',
    top:'25%'
  }

  const small4 = {
    position:'absolute',
    borderRadius:'100%',
    width:'45px',
    height: '45px',
    left:'42%',
    top:'33%',
  }

  const small5 = {
    position:'absolute',
    borderRadius:'100%',
    width:'45px',
    height: '45px',
    top:'26%',
    left:'21%',
  }

  const small6 = {
    position:'absolute',
    borderRadius:'100%',
    width:'45px',
    height: '45px',
    top:'10%',
    left:'12%',
  }

  const small7 = {
    position:'absolute',
    borderRadius:'100%',
    width:'45px',
    height: '45px',
    top:'-6%',
    left:'21%',
  }

  const display=(display,name,value)=>{
    setVisible(!display)
    setQuiz(name,value); 
  }

  return (
    <ButtonBox>
        <button  style={big} onClick={()=>display(visible)
        } >
          <div>{quiz.time}<p>Sec</p></div>
        </button>

        { visible && <button style={small} className={"hover"} onClick={()=>display(visible,"time",0)}
        >
          <div>0</div>
        </button>}

        { visible &&<button style={small1} className={"hover"} onClick={()=>display(visible,"time",15)}>
          <div>15</div>
        </button>
        }

        { visible && <button style={small2}  className={"hover"} onClick={()=>display(visible,"time",30)}>
          <div>30</div>
        </button>
        }

{ visible &&<button style={small3} className={"hover"} onClick={()=>display(visible,"time",45)}>
          <div>45</div>
        </button>
}
{ visible &&<button style={small4} className={"hover"} onClick={()=>display(visible,"time",60)}>
          <div>60</div>
        </button>
}
{ visible && <button style={small5} className={"hover"} onClick={()=>display(visible,"time",75)}>
          <div>75</div>
        </button>
}
{ visible &&<button style={small6} className={"hover"} onClick={()=>display(visible,"time",90)}>
          <div>90</div>
        </button>
}
{ visible && <button style={small7} className={"hover"} onClick={()=>display(visible,"time",105)}>
          <div>105</div>
        </button>
}
      
    </ButtonBox>
  );
}