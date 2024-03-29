import styled from 'styled-components'
import '../times-new-roman.css'

import '../times-new-roman.css'

export const HeroHolder = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-evenly;
 align-items: center;
 height: 100%;
 width: 100%;
 background-color: #0B1340;



 .Banner {
  width: 100%;
  height: 400px;
  background-color: #0B1340;
  display: flex;

  @media (max-width: 1050px) {
    flex-direction: column; 
    height: auto; 
    margin-top: 70px;
  }
}

.Banner-Buttons{
    padding: 1rem;
    display: grid;
    justify-content: center;
}

.Banner-Text {
  width: 30%; 
  text-align: center;
  color: white;
  display: grid;
  font-size: 50px; 
  justify-content: center;
  align-items: center;
  
  @media (max-width: 1050px) {
    order: 2; 
    font-size: 30px;
    width: 100%;
  }
}

.Banner-Img {
  width: 70%; 
  height: 100%; 
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1050px) {
    order: 1; 
    margin-top: 10px; 
    width: 100%; 
  }
}

 .ImageGrid{
    width:70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
 }
 .ImagePerson1:hover{
    filter: none;
 }
 .ImagePerson3:hover{
    filter: none;
 }
 .ImagePerson1{
    filter: grayscale(100%);
 }
 .ImageLine1{
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
 }
 .ImagePerson3{
    width: 41%;
    filter: grayscale(100%);
 }
 .ImageLine2{
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
 }

 .TextHolder {
  height: 80%;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 }
 .MainText {
  font-size: 60px;
  font-weight: 700;
  letter-spacing: 2px;
  text-align: center;
  color: white;
  line-height: 62px;
 }
 .LayeredColor {
  position: absolute;
  height: 45px;
  width: 300px;
  background-color: white;
  z-index: 2;
 }
 .LayeredColor2 {
  position: absolute;
  height: 35px;
  width: 290px;
  background-color: black;
  z-index: 3;
 }
 .LayeredColor3 {
  position: absolute;
  height: 55px;
  width: 312px;
  background-color: black;
  z-index: 1;
  cursor: pointer;
 }

 .ActionText {
  z-index: 10;
  cursor: pointer;
 }
 .ActionIcon {
  z-index: 10;
 }
 .ReadAction {
  width: 300px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  display: flex;
  border: 1px solid white;
  color: white;
  font-weight: 700;
  position: relative;
  margin-top: 5%;
  font-size: 15px;
  font-weight: 100;
  cursor: pointer;
 }
 
 @media (max-width: 767px) {
    .ImageGrid{
        display: none;
    }
 }
`

export const BoutiqueLitigation = styled.div`
 height: 100%;
 width: 100%;
 display: flex;
 background-color: white;
 .LitigationText {
  width: 70%;
  padding: 5%;
  padding-left: 10%;
 }
 .Image {
  width: 150px;
  height: 100px;
  object-fit: contain;
 }
 .ImagesHolder {
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
 }
 .MainText {
  margin-bottom: 50px;
  color: #393d53;
  font-size: 32px;
  font-family: 'Times New Roman', serif;
  font-weight: 100;
 }
 .ParaText {
  color: grey;
  margin-top: 20px;

  margin-bottom: 25px;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  width: 85%;
 }
 .LayeredColor {
  position: absolute;
  height: 45px;
  width: 300px;
  background-color: white;
  z-index: 2;
 }
 .LayeredColor2 {
  position: absolute;
  height: 35px;
  width: 290px;
  background-color: #0B1340;
  z-index: 3;
 }
 .LayeredColor3 {
  position: absolute;
  height: 55px;
  width: 312px;
  background-color: #0B1340;
  z-index: 1;
  cursor: pointer;
 }

 .ActionText {
  z-index: 10;
  cursor: pointer;
 }
 .ActionIcon {
  z-index: 10;
 }
 .ReadAction {
  width: 300px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  display: flex;
  border: 1px solid white;
  color: white;
  font-weight: 700;
  position: relative;
  margin-top: 5%;
  font-size: 15px;
  font-weight: 100;
  cursor: pointer;
 }
 
 @media (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 4%;
    .LitigationText{
        width: 100%;
    }
    .ImagesHolder{
        flex-direction: row;
        width: 100%;
    }
    .Image {
  width: 30%;
  height: 100px;
  object-fit: contain;
 }
 }
`

export const OurLitigationHome = styled.div`
 height: 100%;
 width: 100%;
 display: flex;
 background-color: white;

 .OurLitigation {
  padding: 5%;
  padding-left: 10%;
  width: 50%;
  background-color: #f1f1f1;
 }
 .Industries {
  padding: 5%;
  width: 50%;
 }

 .MainText {
  margin-bottom: 50px;
  color: #393d53;
  font-size: 32px;
  font-family: 'Times New Roman', serif;
  font-weight: 100;
 }
 .SubMainText {
  color: #6686a4;
  font-size: 22.5px;
  font-weight: 500;
 }
 .ReadAction {
  width: 300px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  display: flex;
  border: 1px solid white;
  color: white;
  font-weight: 700;
  position: relative;
  margin-top: 5%;
  font-size: 15px;
  font-weight: 100;
  cursor: pointer;
 }
 .ParaText {
  color: grey;
  margin-top: 20px;

  margin-bottom: 25px;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  width: 85%;
 }
 .LayeredColor {
  position: absolute;
  height: 45px;
  width: 300px;
  background-color: white;
  z-index: 2;
 }
 .LayeredColor2 {
  position: absolute;
  height: 35px;
  width: 290px;
  background-color: #0B1340;
  z-index: 3;
 }
 .LayeredColor3 {
  position: absolute;
  height: 55px;
  width: 312px;
  background-color: #0B1340;
  z-index: 1;
  cursor: pointer;
 }

 .ActionText {
  z-index: 10;
  cursor: pointer;
 }
 .ActionIcon {
  z-index: 10;
 }
 .IndustriesItem {
  display: flex;
  align-items: center;
  margin-top: 4%;
 }
 .IndustriesItem1 {
  display: flex;
  align-items: center;
  margin-top: 10%;
 }
 .ItemIcon {
  color: #0B1340;
 }
 
 @media (max-width: 768px) {
    flex-direction: column;
 
    .OurLitigation{
        width: 100%;
    }
    .Industries{
        width: 100%;
    }
 
 }
`

export const OurPraticeHome = styled.div`
 height: 100%;
 padding-bottom: 7.5%;
 width: 100%;
 background-color: #d9d9d9;
 position: relative;
 display: flex;
 flex-direction: column;
 align-items: center;
 .Imagegrid {
  width: 80%;
  height: 250px;
  display: flex;
  background-color: red;

 }
 .item {
  height: 100%;
  width: 25%;
  background-color: pink;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
 }
 .OverlayText {
  font-size: 18px;
  z-index: 100;
  position: absolute;
  z-index: 6;
  font-weight: 400;
  color: white;
  text-align: center;
 }
 .ImageDiv {
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  z-index: 4;
 }
 .TitleText {
  font-size: 32px;
  font-weight: 100;
  text-align: center;
  font-family: 'Times New Roman', serif;
  margin-top: 5%;
  color: #212735;
 }
 .topborder {
  position: absolute;
  width: 100%;
  height: 6px;
  top: 7px;
  background-color: white;
  z-index: 10;
 }
 .bottomborder {
  position: absolute;
  width: 100%;
  height: 6px;
  bottom: 7px;
  background-color: white;
  z-index: 10;
 }
 .opacityLayer {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.3;
  z-index: 5;
 }
 .AnimationOpacity {
  display: none;
 }
 .item:hover .AnimationOpacity {
  display: unset;
  position: absolute;
  background-color: red;
  height: 100%;
  width: 100%;
  z-index: 5;
  opacity: 0.25;
  transition: all 0.1s;
 }

 .item:hover .borderedDiv {
  scale: 1;
 }

 .borderedDiv {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: none;
  z-index: 10;
  border: 5px solid white;
  scale: 0;
  transition: all 1s;
 }
 

 @media (max-width: 768px) {
    display: none
 }
`

export const OurLegalTeamContainer = styled.div`
 height: 100%;
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 padding-top: 10%;
 padding-bottom: 10%;
 background-color: white;

 .TeamInner {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
 }

 .LatestNews {
  width: 26%;
  height: 100%;
  display: flex;
  flex-direction: column;
 }

 .OurLegal {
  width: 65%;
  display: flex;
  flex-direction: column;
 }

 .dateholder {
  display: flex;
  width: 145px;
  justify-content: space-between;
  align-items: center;
  color: #a8a8a8;
  margin-top: 2%;
 }
 .DateIcon {
  font-size: 18px;
  margin: 1.5%;
  margin-bottom: 4px;
  color: #a8a8a8;
 }
 .Date {
  font-size: 15px;
 }
 .MainText {
  margin-bottom: 50px;
  color: #393d53;
  font-size: 32px;
  font-family: 'Times New Roman', serif;
  font-weight: 100;
 }
 .SubMainText {
  color: #5c667f;
  font-size: 25px;
  font-weight: 500;
 }
 .SubMainText2 {
  color: #5c667f;
  font-size: 22px;
  font-weight: 400;
 }
 .ParaText {
  columns: #8f8f8f;
  margin-top: 20px;
  font-size: 17px;
  font-weight: 400;
 }
 .ParaText2 {
  columns: #8f8f8f;
  font-size: 16px;
  font-weight: 400;
 }
 .ReadMoreHolder {
  display: flex;
  color: #7d1532;
  margin-bottom: 2.5%;
  align-items: center;
 }
 .ReadText {
  font-weight: 700;
  font-size: 16px;
 }
 .DividerLegal {
  width: 100%;
  opacity: 0.4;
  margin-top: 14px;
  margin-bottom: 14px;
 }
 .ReadAction {
  width: 300px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  display: flex;
  border: 1px solid white;
  color: white;
  font-weight: 700;
  position: relative;
  margin-top: 2%;
  font-size: 15px;
  font-weight: 100;
  cursor: pointer;
 }
 .LayeredColor {
  position: absolute;
  height: 45px;
  width: 300px;
  background-color: white;
  z-index: 2;
 }
 .LayeredColor2 {
  position: absolute;
  height: 35px;
  width: 290px;
  background-color: #0B1340;
  z-index: 3;
 }
 .LayeredColor3 {
  position: absolute;
  height: 55px;
  width: 312px;
  background-color: #0B1340;
  z-index: 1;
 }

 .ActionText {
  z-index: 10;
 }
 .ActionIcon {
  z-index: 10;
 }

 @media (max-width: 768px) {
  .TeamInner {
   width: 80%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
  }

  .LatestNews {
   width: 90%;
   height: 100%;
   display: flex;
   flex-direction: column;
  }

  .OurLegal {
   width: 90%;
   display: flex;
   flex-direction: column;
   margin-top: 10%;
  }
 }
`

export const AddressContainer = styled.div`

height: 100%;
width:100%;
background-color: #2B2F30;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.LocationIcon{
    color: #4E6287;

}
.AddressInner{
    width:65%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5%;
}
.Address1{
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.OfficeName{
    font-size: 25px;
    font-weight: 700;
    letter-spacing: 1px;
    text-align: center;
    color:white;
    font-family: 'Times New Roman', serif;
}
.AddressText{
    text-align: center;
    font-size: 20px;
    font-weight: 100;
    color:white;
}
.ContactNumber{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
    color:white;
}
.Number{
    color: white;
    font-size:20px;
}
.DividerAddress{
    width: 10%;
    margin-top: 3%;
    margin-bottom: 3%;
}
.ViewMapButton{
    background-color: #0B1340;
    border:2px solid white;
    color:white;
    height:50px;
    width: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
}
@media (max-width: 768px) {

    .AddressInner{
        flex-direction: column;
        width: 100%;
}
.Address1{
    width: 100%;
    height: 100%;
    margin-top: 5%;
}
}

`


export const AddressContainer2Contact = styled.div`

height: 100%;
width:100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.LocationIcon{
    color: #4E6287;

}
.AddressInner{
    width:65%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5%;
}
.Address1{
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.OfficeName{
    font-size: 25px;
    font-weight: 300;
    letter-spacing: 1px;
    text-align: center;
    color:black;
    font-family: 'Times New Roman', serif;
}
.AddressText{
    text-align: center;
    font-size: 20px;
    font-weight: 100;
    color:black;
}
.ContactNumber{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
    color:black;
}
.Number{
    color: black;
    font-size:20px;
}
.DividerAddress{
    width: 10%;
    margin-top: 3%;
    margin-bottom: 3%;
}
.ViewMapButton{
    background-color: #0B1340;
    border:2px solid white;
    color:white;
    height:50px;
    width: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
}
@media (max-width: 1290px) {

    .AddressInner{
        flex-direction: column;
        width: 100%;
}
.Address1{
    width: 100%;
    height: 100%;
    margin-top: 5%;
}
}

`


export const HomePageContainer = styled.div`


.Underconstruction{
        position: fixed;
        z-index: 200;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color:white;
        border-radius: 5%;
        padding: 2%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width:100%
}
.Opacitybackground{
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: black;
    z-index: -1;
    opacity: 1;
}
 
.underText{
    color:white;
    text-align: center;
    font-weight: 1000;
    font-size: 25px;
}
 .scroll-container::-webkit-scrollbar-track {
  background-color: #f0f0f0;
 }

 /* Add hover effect to scrollbar thumb */
 .scroll-container::-webkit-scrollbar-thumb:hover {
  background-color: #555555;
 }

 /* Hide the default scrollbar track in Firefox */
 .scroll-container {
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
 }
 .Message{
     position: fixed;
     bottom:5%;
     right: 5%;
     border-radius: 50%;
     background-color: whitesmoke;
     z-index: 100;
     padding: 1%;
     display: flex;
     justify-content: center;
     align-items: center;
 }
 .Icon{
     font-size: 10px;
 }
 .SideIcons {
  position: fixed;
  right: 1%;
  bottom: 2%;
  z-index: 100;
  display: flex;
  flex-direction: column;
 }
 .SideIcons :hover {
  cursor: pointer;
 }
 .Icon {
  font-size: 60px;
 }
 display: flex;
 flex-direction: column;
 width: 100%;
 position: relative;

 .LiveChatPrompt{
     background-color: #012030;
     position: fixed;
     height: 200px;
     width: 55px;
     z-index: 100;
     border-radius:0px 35px 35px 0px;
     top:25%;
     display: flex;
     justify-content: center;
     align-items: center;
     
 }
 .LiveChatPrompt:hover{
     cursor: pointer;
 }
 .LiveChatText{
  transform: rotate(-90deg);
  font-size: 25px;
  white-space: nowrap;
  color: whitesmoke;
  margin-top: 15px;
  margin-right: 5px;
  font-weight: 500;
 }
 .NewsPrompt{
     background-color: #0B1340;
     position: fixed;
     height: 350px;
     width: 45px;
     z-index: 100;
     top:25%;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     right: 0%;
     transition: all 1s;
 }
 
 .NewsPrompt2{
     background-color: #8C030E;
     position: fixed;
     height: 400px;
     width: 800px;
     z-index: 100;
     top:25%;
     display: flex;
     flex-direction: row;
     justify-content: center;
     align-items: center;
     right: 0%;
     transition: all 1s;
 }
 .NewsDisplay{
     width:100%;
     height: 100%;
     background-color: whitesmoke;
     display: flex;
     justify-content: center;
     align-items: center;
 }
 .NewInner{
     width:95%;
     height: 100%;
     display: flex;
     justify-content: space-between;
     align-items: center;
 }
 .NewsImage{
     width: 40%;
     height: 75%;
 }
 .NewsTextArea{
     display: flex;
     flex-direction: column;
     width:50%;
 }
 .NewsMainText{
     font-size: 17px;
     font-weight: bold;
 }
 .NewsSubText{
     font-size: 15px;
     font-weight: 100;
 }
 

 .NewsPrompt:hover{
     cursor: pointer;
 }
 .MoreArrow{
     color: white;
     position: absolute;
     top:10%;
     right: 15px;
 }
 .MoreArrow2{
     color: white;
     position: absolute;
     top:10%;
     left: 15px;
 }
 .NewsText{
  transform: rotate(-90deg);
  font-size: 20px;
  white-space: nowrap;
  color: whitesmoke;
  margin-top: 15px;
  margin-right: 5px;
  font-weight: 1000;
 }

 @media (max-width: 768px) {
  .Icon {
   font-size: 40px;
  }
  .LiveChatPrompt{
    display: none;
  }
  .NewsPrompt{
    display: none;
  }
  .LiveChatText{
    font-weight: 600;
   }

 }
 @media (min-width: 800px) and (max-width: 950px) {
 }
`

export const VideoBackground = styled.video`
 position: fixed;
 top: 0;
 left: 0;
 min-width: 100%;
 height: 100%;
 z-index: -1;
 object-fit: cover;
 opacity: 0.5;
`
export const ContactCard = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background-color: rgba(0, 0, 0, 0.5);
 display: flex;
 justify-content: center;
 align-items: center;
 z-index: 9999;

 .formContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: transparent;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
  max-width: 400px;
  padding: 40px;
 }

 form {
  width: 500px;
  padding: 40px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
 }

 .formGroup {
  margin-bottom: 20px;
 }

 label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
 }

 input,
 textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
 }

 button {
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background: #4caf50;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  &:hover {
   background: #45a049;
  }
 }
`

export const Container1 = styled.div`
 background-color: rgba(218, 225, 229, 0.5);
 border: 4px whitesmoke solid;
 padding: 2rem;
 border-radius: 5%;

 margin-top: 25rem;
 margin-bottom: 8rem;
 font-size: 0.7rem;
 width: 80vh;

 box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 text-align: center;
 margin-left: 3.2rem;
 height: 60vh;
 overflow: scroll;
 ::-webkit-scrollbar {
  display: none; /* Hide the scrollbar for WebKit-based browsers */
 }
 &:hover {
  -webkit-box-shadow: 10px 10px 23px -5px rgba(0, 0, 0, 0.65);
  -moz-box-shadow: 10px 10px 23px -5px rgba(0, 0, 0, 0.65);
  box-shadow: 10px 10px 23px -5px rgba(0, 0, 0, 0.65);
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1) box-shadow;
 }
 h1 {
  font-weight: 200;
 }
 img {
  width: 100%;
  height: 100%;
  padding: 10px;
  border-radius: 10px;
  object-fit: cover;
  @media (max-width: 768px) {
   border-radius: 10%;
  }
 }
 @media (max-width: 768px) {
  background-color: #fbfaf9;
  border-color: transparent;
  margin-top: 30rem;
  -webkit-box-shadow: 10px 10px 23px -5px rgba(0, 0, 0, 0.65);
  -moz-box-shadow: 10px 10px 23px -5px rgba(0, 0, 0, 0.65);
  box-shadow: 10px 10px 23px -5px rgba(0, 0, 0, 0.65);

  margin-bottom: 3rem;
  width: 100%;
  margin-left: 0rem;
  height: 70vh;
  img {
   width: 100%;
  }
 }

 /* Tablets and Small Screens */
 @media (min-width: 769px) and (max-width: 1024px) {
 }

 /* Medium-sized Screens */
 @media (min-width: 1025px) and (max-width: 1280px) {
  /* Styles for medium-sized screens */
  img {
   max-width: 100%;
   width: 35vh;
   height: 25vh;
   margin-top: 2rem;
   margin-bottom: 3rem;
   margin-left: 3rem;
   @media (max-width: 768px) {
   }
  }
 }

 /* Large Screens */
 @media (min-width: 1281px) {
  /* Styles for large screens */
 }
`
export const Container2 = styled.div`
 width: 100%;
 .mySwiper {
  width: 100vh;
  height: 100vh;
  border-radius: 5%;
  cursor: pointer;
 }
 border-radius: 5%;
 margin-top: 2.6rem;
 margin-bottom: 2rem;
 font-size: 0.7rem;
 width: 100%;

 display: grid;
 justify-content: center;
 align-items: center;
 text-align: center;
 height: 60vh;
 overflow: auto;
 ::-webkit-scrollbar {
  display: none; /* Hide the scrollbar for WebKit-based browsers */
 }

 h1 {
  display: grid;
  justify-content: center;
  place-content: center;
  font-size: 50px;
  height: 30%;
  color: white;
 }

 &:hover {
  /* -webkit-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
        -moz-box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
        box-shadow: 10px 10px 23px -5px rgba(0,0,0,0.65);
        transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1) box-shadow; */
 }

 .textHolder {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 60vh;
  padding-right: 2rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 3%;
 }

 &:hover img {
  filter: blur(2px);
  -webkit-filter: blur(2px);
 }

 img {
  width: 100vh;
  height: 100vh;
  border-radius: 3%;
  position: fixed;
  object-fit: cover;

  @media (max-width: 768px) {
  }
 }
 @media (max-width: 768px) {
  background-color: transparent;
  border-color: transparent;
  margin-top: 30rem;
  margin-left: 0rem;
  margin-bottom: 3rem;
  width: 96%;
  height: 70vh;
  img {
   width: 96%;
   height: 60vh;
   border-radius: 3%;
   position: absolute;
   object-fit: cover;
  }
  .textHolder {
   position: absolute;
   z-index: 1;
   width: 96%;
   height: 60vh;
   padding-right: 2rem;
   background-color: rgba(0, 0, 0, 0.5);
   border-radius: 3%;
  }
 }
 @media (min-width: 481px) and (max-width: 768px) {
  .Container1 {
  }
 }
`
export const Title = styled.div`
 width: 100%;
 background-color: lightblue;
 border-radius: 15%;
 height: 20vh;
 p {
  margin-top: 2rem;
 }
 .titleh1 {
  margin-top: 4rem;
  font-size: 50px;
  margin-right: 10px; /* Adjust the margin as needed */
 }
 .container2 {
  height: 25rem;
  width: 100%;
 }
 img {
  width: 100%;
  max-height: 80%;
  margin-bottom: 5rem; /* Ensure the image doesn't exceed the container height */
 }

 @media (max-width: 768px) {
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  margin-bottom: 5rem;
  border-radius: 14%;
  p {
  }
  .titleh1 {
   font-size: 50px;
  }
  img {
  }
 }
`

export const Main = styled.div`
 flex: 1;
 height: 100vh;
 width: 100%;

 @media (max-width: 768px) {
 }

 @media (min-width: 1025px) and (max-width: 1280px) {
 }
`

export const CaseCards = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 height: 100%;
 width: 100%;
 position: relative;
 margin-top: 100px;
 
 .Toptext{
      width:60%;
      text-align: center;
      font-size: 20px;
      color:grey;
 }
 .CardHolder{
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      height: 100%;
      width: 75%;
      padding-bottom:5%;
 }
 .Cardlist1{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 27%;
 }
 .Cardlist2{
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      width: 27%;
      margin-top: 10%;
 }
 .Cardlist3{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 27%;
 }
 .displayCard{
      background-color: white;
      width: 100%;
      margin-top: 10%;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
      border-top: 5px solid  #012030;
      padding-left: 2%;
      padding-right: 2%;
      padding-bottom: 2%;
      border-radius: 3px;
 }
 .titletext{
      font-size:14px;
      font-weight: 700;
      margin-bottom: 0px;
 }
 .AmountText{
      font-size: 35px;
      margin-top: 0px;
      margin-bottom: 5px;
      color: #012030;
 }
 .descriptionText{
     display: -webkit-box;
    -webkit-line-clamp: 5; /* Adjust this number to the desired number of lines */
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 20px;
    font-weight: 100;
 }
 .ShowMore{
      display: flex;
 }
 .readText{
      color:  #012030;
 }
.ArrowIcon{
      color:  #012030;
}
.MainTextHolder{
      width:100%;
      padding-top:2%;
      padding-bottom:2%;
      background-color: #0B1340;
      display: flex;
      justify-content: center;
      align-items: center;
}
.MainText{
      width: 50%;
      text-align: center;
      font-size: 20px;
      color: #FFEEDF;
      font-weight: 100;
}
@media (min-width: 769px) and (max-width:1150px) {
    .Toptext{
      width:80%;
      font-size: 15px;
      font-weight: 100;
      color:grey;
 }
 .titletext{
    text-align: center;
 }
 .AmountText{
    text-align: center;
 }
 .descriptionText{
    text-align: center;
 }
 .CardHolder{
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      width: 100%;
 }
 .Cardlist1{
     width:100%;
 }
 .Cardlist2{
     width:100%;
 }
 .Cardlist3{
     width:100%;
 }
 .displayCard{
     width:95%;
 }
 .MainText{
      width: 95%;
      text-align: center;
      font-size: 17px;
      color: #FFEEDF;
      font-weight: 100;
      padding: 2%;
}
}
@media (max-width: 768px) {
     .Toptext{
      width:80%;
      font-size: 15px;
      font-weight: 100;
      color:grey;
 }
 .CardHolder{
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      width: 100%;
 }
 .Cardlist1{
     width:100%;
 }
 .Cardlist2{
     width:100%;
 }
 .Cardlist3{
     width:100%;
 }
 .displayCard{
     width:95%;
 }
 .MainText{
      width: 95%;
      text-align: center;
      font-size: 17px;
      color: #FFEEDF;
      font-weight: 100;
      padding: 2%;
}
}

`



export const TextSwiper = styled.div`

height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;

.swiper-pagination-bullet {
  background: white; /* Change 'your-color' to the desired color */
}
.mySwiper{
      height: 100%;
      width: 100%;
}
.SwiperSlide{
      height: 100%;
      width: 100%;
}
.TextHolder{
      height: 200px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
}
.Holder{
      background-color:  #012030;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 2.5%;
      
      padding-bottom: 2.5%;
}
.TopText{
      color: #FFEEDF;
      margin-bottom: 0px;
      font-size: 20px;
      text-transform: uppercase;
}

.MainText{
      font-size: 35px;
      font-weight: 400;
      color: #FFEEDF;
}

.StartText{
      background-color: white;
      padding-top:3%;
      padding-bottom: 3%;
      display: flex;
      justify-content: center;
      align-items: center;
}
.Text{
      width: 60%;
      text-align: center;
      font-size: 20px;
      font-weight: 100;
      color: grey;
}

@media (max-width: 768px) {
     .Text{
      width: 95%;
      text-align: center;
      font-size: 18px;
      font-weight: 100;
      color: grey;
}
.StartText{
      padding-top:4%;
      padding-bottom: 0%;
}
.TopText{
      font-size: 13px;
      text-align: center;
}
.MainText{
      font-size: 25px;
      font-weight: 100;
      text-align: center;
}

}


`

export const Awards = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
 background-color: #EFEFEF;
 padding-top:3%;
 padding-bottom:3%;
.ImageHolder{
      width: 50%;
      display: flex;
      justify-content:space-evenly;
      align-items: center;

}
@media (max-width: 768px) {
.AwardImage{
     width: 25%;
}
.ImageHolder{
      width: 95%;
      display: flex;
      justify-content:space-evenly;
      align-items: center;

}

}

`

export const LawyerCarosel = styled.div`

.swiper-pagination-bullet {
  background: grey; /* Change 'your-color' to the desired color */
}
.swiper-pagination-bullet-active {
  background: red; /* Change 'your-active-color' to the color for the active bullet */
}
.mySwiper{
      height: 80vh;
      width: 100%;
 }
 .SwiperSlide{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      background-color: #131313;
      position: relative;
 }
 .SwiperImage{
      object-fit: cover;
      position: absolute;
 }

 .TextHolder{
      z-index: 10;
      width: 25%;
      margin-left: 15%;
      padding-top:2.5%;
      padding-bottom:2.5%;

 }
 .MainText{
      font-size: 25px;
      font-weight: bold;
 }
 .Biodiv{
      display:flex;
      align-items: center;
 }
 .Biodiv:hover{
      cursor: pointer;
 }
 .ViewText{
      font-size: 18px;
      color:red;
 }
 .SubText{
      font-weight: 100;
 }
 .ArrowIcon{
      color: red;
 }

 @media (min-width: 768px) and (max-width:1300px){
     .MainText{
          font-size: 22.5px;
     }
     .TextHolder{
      z-index: 10;
      width: 50%;
      margin-left: 5%;
      padding-top:2.5%;
      padding-bottom:2.5%;

 }
 }
 
 @media (max-width: 768px) {
     .MainText{
          font-size: 22.5px;
     }
     .TextHolder{
      z-index: 10;
      width: 100%;
      margin-left: 5%;
      padding-top:2.5%;
      padding-bottom:2.5%;

 }
 }
`

export const OurAttorneysStyles = styled.div`
margin-top: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


.AttorneyInfoHolder{
    width: 85%;
    height: 100%;
    display: flex;
    object-fit: cover;
    margin-bottom: 5%;
}
.AttorneyImage{
    height: 50%;
    width: 64%;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 2.5%;
}
.ImageHolder{
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
}
.BioHolder{
    width: 50%;
    height: 100%;
    padding: 2%;
}
.Bio{
    font-size: 22px;
    font-weight: 100;
}
.TitleHolder{
    font-size: 18px;
    font-weight: 100;
    margin-bottom: 5px;
}
.Name{
    font-size: 25px;
    font-weight: 1000;
}

@media (max-width: 768px) {
    .AttorneyInfoHolder{
    width: 95%;
    height: 100%;
    flex-direction: column;
}
.ImageHolder{
    width: 100%;
    height: 100%;
    justify-content: center;
   
}
.BioHolder{
    width: 100%;
    height: 100%;
    padding: 2%;
    
}
.Bio{
    font-size: 20px;
    font-weight: 100;
    text-align: center;
}
.TitleHolder{
    font-size: 17px;
    font-weight: 100;
    margin-bottom: 5px;
    text-align: center;
}
.Name{
    font-size: 25px;
    font-weight: 1000;
    
    text-align: center;
}
}

`
export const Main1 = styled.div`
 display: flex;
 justify-content: center;
 height: 100%;
 width: 100%;
 position: relative;
 .SlideHolder{
     width: 75%;
     height: 100%;
     display: flex;
     flex-direction: row;
     justify-content: space-evenly;
     align-items: center;
 }
 .SingleImage{
     width: 50%;
     height: 100%;
     mask-image: linear-gradient(to right, transparent, black, black, transparent);
     object-fit: cover;
 }
 .MainText{
     text-align: left;
     font-size: 55px;
     color:white;
     font-weight: 100;
     line-height: 50px;
 }
 .MainText2{
     text-align: center;
     font-size: 70px;
     color:whitesmoke;
     outline: none;
     font-weight: 1000;
     line-height: 50px;
 }
 .TextDiv{
     padding-left:5%;
 }
 .SubText{
     font-size: 50px;
     font-weight: 1000;
     text-align: left;
     line-height: 50px;
     color:#EE3425;
     font-style: italic;
     margin-top: 20px;
 }
 .SubText2{
     font-size: 50px;
     font-weight: 1000;
     text-align: center;
     
     line-height: 50px;
     color:#EE3425;
     margin-top: 20px;
 }
 .mySwiper{
      height: 80vh;
 }
 .SwiperSlide{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #131313;
      position: relative;
 }
 .ImagesHolder{
      width: 80%;
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin-top:2.5%;
}
.WhiteLetters{
      position: absolute;
      font-size: 70px;
      font-weight: 700;
      color:white;
      text-align: center;
}
.RedLetters{
      color:#EE3425;
}
.SwiperImages{
      width: 30%;
}
 




 .ImageBack {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
 }

 .mainbox1 {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  height: 100%;
  z-index: 11;
 }
 .opacitylayer {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 10;
  background-color: black;
  opacity: 0.5;
 }
 .header-2 {
  font-size: 100px;
  text-align: center;
  padding-top: 8%;
  color: white;
 }
 .ButtonHolder {
  display: flex;
  justify-content: center;
  width: 100%;
 }
 .button-group {
  display: flex;
  justify-content: space-between;
  width: 75%;
 }
 // .Button{
 //     width:250px;
 //     height:50px;
 //     background-color:#012030;

 // }
 .Button {
  width: 250px;
  height: 50px;
  background: none;
  border: 1px solid white;
  color: white;
  font-size: 16px;
  box-shadow: none;
 }
 .Button:hover {
  background-color: white;
  color: #012030;
 }

 .textContentHolder {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 3%;
 }
 .textContent {
  font-size: 22.5px;
  font-weight: 100;
  color: white;
  text-align: center;
  width: 75%;
  letter-spacing: 2px;
 }
 .OpacityBackground2{
    display: none;
 }
 @media (max-width: 768px) {
  .textContent {
   font-size: 15px;
   width: 100%;
   font-weight: 100;
  }
  .TextDiv{
    z-index: 10;
  }
  .OpacityBackground2{
    display: unset;
    position: absolute;
    height: 100%;
    width:100%;
    background-color: black;
    opacity: 0.4;
    z-index: 1;
  }
  .WhiteLetters{
     font-size: 25px;
     z-index: 30;
  }
  .ImagesHolder{
     width: 100%;
  }
  .SwiperImages{
     height: 50%;
     width: 33%;
  }
  .SlideHolder{
     width: 100%;
 }
 .MainText{
     font-size: 50px;
     font-weight: 1000;
     line-height: 50px;
     text-align: center;
     
 }
 .SubText{
     font-size: 25px;
     line-height: 25px;
     text-align: center;
 }
 .MainText2{
    font-size: 50px;
     font-weight: 1000;
     line-height: 50px;
     text-align: center;
 }
 .SubText2{
     font-size: 25px;
     line-height: 25px;
     text-align: center;
 }
 .SingleImage{
     position: absolute;
     height: 100%;
     width: 100%;
     z-index: -1;
 }
 
  .textContentHolder {
   padding: 5%;
  }

  .button-group {
   width: 90%;
  }
  .header-2 {
   font-size: 35px;
   padding-top: 8%;
  }
  .Button {
   width: 100px;
   height: 50px;
   font-size: 12px;
   box-shadow: none;
  }
 }
 @media (min-width: 800px) and (max-width: 950px) {
  .button-group {
   width: 85%;
  }
  .Button {
   width: 30%;
   height: 50px;
   font-size: 12px;
   box-shadow: none;
  }
 }
`
export const Sidebar = styled.div`
 width: 100%;
 display: flex;
 margin-top: 400px;
 justify-content: center;
 display: grid;

 .sidebar-holder {
  width: 100%;
  border-radius: 6px;
 }
 p {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
 }

 ul {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
   font-size: 18px;
   line-height: 1.5;
   margin-bottom: 10px;
  }
 }

 @media (max-width: 768px) {
  display: grid;
  margin-top: 40rem;
 }
`

export const Ad = styled.div`
 width: 100%;
 padding: 20px;
 border-radius: 10px;
 p {
  font-size: 24px;
  font-weight: 100;
  margin-bottom: 20px;
 }

 .btn-groups {
  display: grid;
  justify-content: center;
 }

 .btn {
  // text-transform: uppercase;
  // background: #003366;
  // color: var(--clr-primary-10);
  // padding: 0.375rem 0.75rem;
  // letter-spacing: var(--spacing);
  // display: inline-block;
  // font-weight: 400;
  // transition: var(--transition);
  // font-size: 0.875rem;
  // cursor: pointer;
  // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  // border-radius: var(--radius);
  // border-color: transparent;
  // width: 200px;
  // margin-top: 10px;
  // @media (max-width: 767px) {
  //     margin-left: 0px;
  //     margin-top: 20px;
  // }
  margin: 3.5%;
  width: 150px;
  height: 45px;
  border: 1px solid #003366;
  color: #003366;
 }
 .btn:hover {
  color: var(--clr-primary-1);
  background: var(--clr-primary-7);
 }

 .phone-number {
  padding: 1rem;
  margin-top: 20px;
  background-color: white;
  border-radius: 10px;
  font-size: 20px;
 }

 @media (max-width: 768px) {
  width: 100%;
  margin-top: 30rem;
  border-radius: 6%;
 }
`
export const InternalTag1 = styled.span`
 font-size: 30px;
 font-weight: 1000;
 padding: 2rem;
 color: white;
 height: 70%;
 display: grid;
 justify-content: center;
`
export const InternalTag2 = styled.span`
 font-size: 1.05rem;
 font-weight: 200;
`
export const Testimonials = styled.div`
 border: 1px blue solid;
 padding: 1rem;

 background: rgb(255, 255, 255, 0.3);
 height: 30%;
 width: 100%;
 position: relative;

 .Button {
  height: 50px;
  width: 175px;
  border: 4px solid rgba(4, 41, 64, 1);
  color: #042940;
 }
 .Button:hover {
  border: 4px solid rgba(4, 41, 64, 1);
  color: #042940;
 }
 .ButtonHolder {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 2%;
  margin-top: 20px;
 }
 .Holder {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
 }
 .HolderInner {
  display: flex;
  align-items: center;
  align-content: center;
 }
 .reviewText {
  font-weight: 200;
  font-size: 20px;
  margin-left: 1rem;

  &:hover {
   color: navy;
   cursor: pointer;
  }
 }

 p {
  font-size: 20px;
  font-weight: bold;
  margin-left: 1rem;
 }
 .client {
  font-weight: 100;
  font-size: 1.5rem;
  margin-left: 1.5rem;
 }
 h3 {
  font-size: 1.5rem;
  margin-left: 1.2rem;
  text-decoration: underline;
  font-weight: 500;
 }
 .stars {
  margin-left: 1.2rem;
 }
 ul {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
   font-size: 18px;
   line-height: 1.5;
  }
 }

 .btn {
  text-transform: uppercase;
  background: #003366;
  color: var(--clr-primary-10);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: grid;
  font-weight: 400;
  transition: var(--transition);
  font-size: 0.875rem;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
  border-color: transparent;
  width: 50px;
  @media (max-width: 767px) {
  }
 }
 .btn:hover {
  color: var(--clr-primary-1);
  background: var(--clr-primary-7);
 }

 @media (max-width: 768px) {
  margin-top: 5rem;
  width: 100%;
  height: 100%;
  border-radius: 0%;
  .HolderInner {
   flex-direction: column;
  }
  .reviewText {
   margin-top: 20px;
   margin-bottom: 20px;
   text-align: center;
  }
  .Holder {
   display: grid;
   justify-content: space-between;
   align-items: center;
   align-content: center;
  }
 }
 @media (min-width: 800px) and (max-width: 950px) {
  margin-top: 50%;
 }
`
export const SwiperHolder = styled.div`
 height: 100%;

 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: center;
 position: relative;

 .mySwiper {
  width: 60%;
  height: 100%;
 }

 .ImageSwiper {
  height: 150px;
  width: 150px;
  object-fit: cover;
  border-radius: 50%;
 }
 .ImageSwiper2 {
  display: none;
 }

 .TitleText {
  font-size: 40px;
  font-weight: 1000;
  text-align: center;
  z-index: 10;
 }
 .TitleImageHolder {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
 }
 .DiscriptionText {
  font-size: 20px;
  font-weight: 100;
  letter-spacing: 4px;
  padding-top: 10px;
  text-align: center;
  z-index: 100;
 }
 .SwiperSlide {
  padding: 5%;
  background-color: rgba(255, 255, 255, 0.5);
 }
 .NavigationButtons {
  height: 60vh;
  width: 350px;
  padding-left: 10%;
  justify-content: space-between;
  align-items: center;
 }
 .Name {
  padding-top: 20px;
  margin-right: 45px;
  font-size: 23px;
  font-weight: 1000;
  text-align: center;
  padding-left: 5%;
  color: grey;
  transition: ease 1s;
  color: white;
 }

 .NameActive {
  font-size: 20px;
  margin-left: 10px;
  padding-top: 20px;
  font-weight: 100;
  text-align: left;
  padding-left: 5%;
  color: white;
  transition: ease 1s;
 }

 .NameHolder {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.4);
  margin-top: 15%;
  border-radius: 70px;
  height: 65px;
  width: 300px;
 }

 .NameHolder:hover {
  cursor: pointer;
  // background-color:white;
 }
 .IconImage {
  height: 65px;
  width: 65px;
  position: absolute;
  border-radius: 50%;
  left: 82%;
  box-shadow: 6px 0 4px rgb(0, 0, 0, 0.7);
  transition: ease 1s;
 }

 .IconImageClicked {
  height: 65px;
  width: 65px;
  position: absolute;
  border-radius: 50%;
  filter: grayscale(100%);
  left: 0%;
  transition: ease 1s;
 }

 .NavigationHolder2 {
  display: flex;
  justify-content: center;
  align-items: center;
 }
 .MobileNavigationButtons {
  display: none;
 }
 @media only screen and (max-width: 850px) {
  flex-direction: column;
  .NavigationButtons {
   display: flex;
   flex-direction: column;
   position: relative;
   left: 2%;
   padding-left: 0;
   height: 500px;
   width: 100%;
   background-color: black;
   transition: ease 1s;
  }
  .DiscriptionText {
   font: 50px;
  }
  .ImageSwiper2 {
   display: unset;
   height: 100%;
   width: 100%;
   position: absolute;
   z-index: -1;
   top: 0px;
   left: 0px;
  }
  .ImageSwiper {
   display: none;
  }

  .MobileNavigationButtons {
   width: 100%;
   display: unset;
  }
  .UpperButtonHolder {
   display: flex;
   justify-content: space-evenly;
   width: 100%;
   margin-bottom: 5%;
  }
  .LowerButtonHolder {
   display: flex;
   justify-content: space-evenly;
   width: 100%;
   margin-bottom: 2.5%;
  }
  .TitleTextSwiper {
   font-size: 32.5px;
   font-weight: 1000;
   text-align: center;
   margin-top: 5px;
   width: 100%;
   color: rgb(0, 0, 0, 0.75);
   box-shadow: 0px 5px 0px rgb(255, 255, 255, 0.7);
  }
  .TextHolder {
   transition: ease 1s;
  }

  .MobileButton {
   color: white;
   font-size: 18px;
   font-weight: 1000;
   background-color: rgba(1, 24, 38, 0.3);
   outline: none;
   border: 1px solid #d0d9f2;
   width: 45%;
   height: 45px;
   border-radius: 35px;
   padding: 40px;
   transition: ease 1s;
  }
  .MobileButtonActive {
   color: white;
   font-size: 18px;
   font-weight: 1000;
   background-color: black;
   outline: none;
   border: 1px solid #d0d9f2;
   width: 45%;
   height: 45px;
   border-radius: 35px;
   padding: 40px;
   transition: ease 1s;
  }
  .MobileButtonActive:hover {
   background-color: black;
   border: 1px solid #d0d9f2;
  }
  .MobileButton:hover {
   background-color: rgba(1, 24, 38, 0.3);
   border: 1px solid #d0d9f2;
  }
  .ImageSwiper {
   height: 50px;
   width: 50px;
   object-fit: cover;
   border-radius: 50%;
  }

  .NameHolder {
   flex-direction: column;

   display: flex;
   align-items: center;
   margin-top: 0%;
   height: 100%;
   width: 100%;
  }
  .SwiperSlide {
   height: 100%;
   background-color: rgb(0, 0, 0, 0.5);
  }
  .TitleText {
   font-size: 25px;
   color: black;
   background-color: rgb(255 255 255 / 60%);
  }
  .mySwiper {
   width: 100%;
   height: 100%;
  }
  .DiscriptionText {
   font-size: 15px;
   font-weight: 100;
   height: 100%;
   width: 100%;
   color: white;
   background-color: rgb(69 66 66 / 60%);
   text-shadow: 1px 1px 2px black;
  }
  .TitleImageHolder {
  }
  .IconImage {
   height: 15px;
   width: 15px;
   object-cover: fit;
  }
  .IconImageClicked {
   height: 15px;
   width: 15px;
   border-radius: 50%;
   margin-bottom: 25px;
   filter: grayscale(100%);
  }

  .Name {
   font-size: 15px;
   text-align: center;
   padding-top: 10px;
  }
  .NameActive {
   font-size: 15px;
   font-weight: 100;
   text-align: center;
   padding-top: 0px;
   color: black;
  }
  .NameHolder {
   display: flex;
   flex-direction: column;
   align-items: center;
   align-content: center;
   height: 100%;
   border-radius: 0px;
   background: none;
  }
  .NavigationHolder2 {
   display: none;
  }
 }

 @media (min-width: 768px) {
  .DiscriptionText {
   font-size: 24px;
  }
 }
`

// Holy Grail Flexbox Layout
export const LayoutContainer = styled.div`
 display: flex;
 flex-wrap: wrap;

 ${Main} {
  flex: 2;
 }

 ${Sidebar}, ${Ad}, ${Testimonials} {
  flex: 1;
 }

 @media only screen and (max-width: 767px) {
  ${Main}, ${Sidebar}, ${Ad}, ${Testimonials} {
   flex: 1 0 100%;
  }
 }

 @media only screen and (min-width: 768px) {
  ${Main} {
   order: 2;
   margin-right: 20px;
  }

  ${Sidebar} {
   order: 1;
   margin-right: 20px;
  }

  ${Ad} {
   order: 3;
   margin-left: 20px;
  }
 }

 @media only screen and (min-width: 992px) {
  ${Main} {
   margin-left: 20px;
  }

  ${Sidebar} {
   margin-left: auto;
  }
 }
`
export const Button = styled.button`
 background-color: blue; /* Green */
 border: none;
 color: white;
 padding: 15px 32px;
 text-align: center;
 text-decoration: none;
 display: inline-block;
 font-size: 16px;
 margin: 4px 2px;
 cursor: pointer;
 border-radius: 10px;

 &:hover {
  background-color: lightblue;
 }

 &:active {
  background-color: #4caf50;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
 }
`
export const Button2 = styled.button`
 background-color: blue; /* Green */
 border: none;
 padding: 15px 32px;

 text-align: center;
 text-decoration: none;
 display: inline-block;
 font-size: 26px;
 margin: 4px 2px;
 cursor: pointer;
 border-radius: 10px;
 color: white;
 font-weight: 500px;
 &:hover {
  background-color: lightblue;
 }

 &:active {
  background-color: #4caf50;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
 }
`
