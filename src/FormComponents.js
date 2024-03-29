import { styled } from "@mui/material"

export const CustomModal = styled("div")`
  display: block; 
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4);
  padding-top: 60px;
  
`

export const FormBtn = styled('button')`
  background-color: ${props => props.color?props.color:'#04AA6D'};
  border-radius: 20px;
  font-weight: bold;
  font-size:15px;
  color: whitesmoke;
  padding: 14px 20px;
  margin: ${props => props.margin?props.margin:'8px 0'};
  border: none;
  cursor: pointer;
  width: 100%;
    &:hover{
        opacity: 0.8;
    }
    & img{
      width:25px;
      margin-left: 5px;
    }
`

export const FormCancelBtn = styled(FormBtn)`
  width: 25%;
  margin-left: 75%;
  padding: 10px 18px;
  background-color: tomato;
`

export const FormInput = styled("input")`
  width: ${props => props.width?props.width:"100%"};
  border-radius: 20px;
  padding: 12px 20px;
  margin: 5px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
`

export const InputLabel = styled('p')`
    margin-top: 10px;
    color:black;
    font-weight:bold;
    font-size : 15px;
`

export const FormLogo = styled('span')`
    color:black;
    font-weight:bold;
    font-size : 25px;
`

export const ImgContainer = styled('div')` 
  text-align: center;
  margin: 24px 0 12px 0;
  position: relative;
`

export const Container = styled('div')`
  border-radius: 20px;
  padding: 16px;
`

export const FindPwd = styled('span')`
  float: right;
  padding-top: 16px;
`

export const ModalContent = styled('div')`
  border-radius: 20px;
  background-color: whitesmoke;
  margin: 5% auto 15% auto;
  border: 1px solid #888;
  width: 60%; 
`

export const CloseBtn = styled("span")`
  position: absolute;
  right: 25px;
  top: 0;
  color: #000;
  font-size: 35px;
  font-weight: bold;
  &:hover {
    color: tomato;
    cursor: pointer;
  }
`;