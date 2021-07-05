import React from "react"
import styled from "styled-components";


const DivStyled = styled.div`
  background-color:rgb(240, 226, 243);
  margin:10%;
  img {
    width: 86%;
     box-shadow: -7px -10px 50px 16px rgba(59,14,59,0.87);
  }
  h2{
    margin:0 auto;
    width:86%;
    text-align:center;

  p {
      font-size: 30px;

  }  
  }`

const PhotoCard  = props => {
    return(
        <DivStyled>
            <h1>{props.title}</h1>
            <h2>{props.date}</h2>
            <img src= {props.imgurl} alt="Nasa Astronomy Image"/>
            <div>
                <h2>Description</h2>
                <p>{props.explanation}</p>
            </div>
        </DivStyled>
       
    );
};


export default PhotoCard 