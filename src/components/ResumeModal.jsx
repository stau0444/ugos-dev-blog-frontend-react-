import HomeIcon from '@mui/icons-material/Home';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { Box, Button, Grid, Modal, styled, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import GitHubIcon from '@mui/icons-material/GitHub';
import ChipsGenerator from './ChipsGenerator';
import CancelIcon from '@mui/icons-material/Cancel';

const introduceStyle={
}
const modalStyle = {
    margin: "20px auto",
    width: '80%',
    height:'95%',
    bgcolor: 'background.paper',
    borderRadius:"12px",
    boxShadow: 24,
    p: 4,
    maxHeight:"700px", 
    overflowY:"auto" ,
  };
const ResumeImg = styled('img')`
    width:60%;
    padding:3px;
    border-radius: 20px;
    max-width: 175px;
`;
const ResumeRibbon = styled("div")`
    width:0px;
    background: #af43f1;
    height:50px;
    border-radius: 30px;
    margin-left: -46px;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    transition: width 1500ms;
      &.active{
        width: 600px;       
      }
      &::before{
        content:'';
        top:101px;
        width:14px;
        height: 35px;
        background-color: #8045c6;
        position:absolute;
        border-top-left-radius:20px;
        border-bottom-left-radius:20px;
        z-index:1;
      }
      &::after{
        content:'';
        top:53px;
        width:14px;
        height: 66px;
        border-top-left-radius:20px;
        background-color: #af43f1;
        position:absolute;
      }
`;

export default function ResumeModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const handleScroll = (e) => {
      if(e.target.scrollTop <= 10){
         document.querySelector(".resume-ribbon").classList.add("active")
      }else{
        document.querySelector(".resume-ribbon").classList.remove("active")
      }
    };

    return (
      <>
        <Tooltip title="ABOUT ME">
          <PermContactCalendarIcon
            fontSize="large"
            sx={{
              marginRight: "10px",
              cursor: "pointer",
            }}
            onClick={handleOpen}
          />
        </Tooltip>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Grid
            container
            onScroll={handleScroll}
            sx={{
              ...modalStyle,
              background: "whitesmoke",
              "&:focus":{
                outline: "none"
              }
            }}
          >
            <Grid item xs={12}>
            <Button 
                sx={{
                  left:"30px",
                  top:"1px",
                  float:"right",
                  color:"#16ec89",
                  "&:hover":{
                    color:"lightgray",
                    backgroundColor: "inherit"
                  }
                }}
                onClick={handleClose}
                >
                <CancelIcon fontSize="large"/>
            </Button>
              <ResumeRibbon className="resume-ribbon active">
                <Typography
                  sx={{
                    width: "200px",
                    marginLeft: "50px",
                    fontWeight: "bold",
                    color: "coral",
                    fontFamily: "'Righteous', cursive",
                    fontSize: "30px",
                  }}
                  variant="h6"
                >
                  ABOUT ME
                </Typography>
              </ResumeRibbon>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ margin: "70px 0 20px 0" }}
              className="resume-header"
            ></Grid>
            <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
              <ResumeImg src="/IMG_1708.JPG" alt="" />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
               }}
              sm={6}
              className="resume-info"
            >
              <Typography id="resume" sx={{ mt: 2 }}>
                <EmojiPeopleIcon size="large" sx={{ marginRight: "10px" }} />
                <Typography variant="div" sx={{ marginBottom: "10px" }}>
                  ????????? 1992/07/06
                </Typography>
              </Typography>
              <Typography sx={{ mt: 2 }}>
                <HomeIcon size="large" sx={{ marginRight: "10px" }} />
                ??????????????? ????????? ????????????8?????? 12
              </Typography>
              <Typography sx={{ mt: 2 }}>
                <AlternateEmailIcon size="large" sx={{ marginRight: "10px" }} />
                stau04@gmail.com
              </Typography>
              <Typography sx={{ mt: 2 }}>
                <ContactPhoneIcon size="large" sx={{ marginRight: "10px" }} />
                010-9115-0444
              </Typography>
              <Typography sx={{ mt: 2 }}>
                <GitHubIcon size="large" sx={{ marginRight: "10px" }} />
                <a href="https://github.com/stau0444">
                  https://github.com/stau0444
                </a>
              </Typography>
            </Grid>
            <Grid item xs={12} sx={introduceStyle} className="resume-introduce">
              <Box>
                <Typography variant="h5" sx={{ fontWeight:'bold',margin: "40px 0 0 0" }}>
                  introduce
                  <hr />
                </Typography>
              </Box>
              <Box sx={{padding:"10px", fontSize:"14px", lineHeight:"20px"}}>
                <Typography variant="textarea">
                ??????????????? ????????? ?????? ????????? ???????????? ??????????????????. ???????????? ???????????? ???????????? ????????? ?????? ?????? ?????? ?????? ????????? ?????? ????????? ???????????? , 
                ????????? ????????? ??? ????????? ?????? ??????????????? ????????? ?????? ????????? ????????? ????????? ??? ?????? ??????????????? ????????? ???????????? ????????? ?????? ???????????? ?????? ????????? ??????????????????.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sx={introduceStyle} className="resume-skills active">
            <Typography variant="h5" sx={{ fontWeight:'bold',margin: "40px 0 0 0" }}>
                Skills
                <hr />
              </Typography>
              <Grid
                item
                xs={12}
                sx={{ border: "1px solid black", padding: "20px" }}
              >
                <Box>
                  <Typography variant="h6" sx={{ margin: "20px 0" }}>
                    Language
                    <hr />
                  </Typography>
                  <Typography variant="p">
                    <ChipsGenerator
                      values={["Java", "Javascript"]}
                      color="gold"
                    />
                    <br />
                    <small>* Java??? ?????? ??????, ????????? ?????? ???????????? ??????</small>
                    <br />
                    <small>
                      * Javascript??? ?????? ??????, ????????? ?????? ???????????? ??????
                    </small>
                    <br />
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ margin: "20px 0" }}>
                    Front-end
                    <hr />
                  </Typography>
                  <Typography variant="p">
                    <ChipsGenerator values={["React", "Redux"]} color="coral" />
                    <br />
                    <small>* React , Redux??? ?????? ?????????????????? ?????? </small>
                    <br />
                    <small>* React??? ???????????? Redux??? ?????? ????????????????????? ?????? ???????????? ?????? </small>
                    <br />
                    <small>* Styled-Component , Material-ui??? ?????? ???????????? ???????????? </small>
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ margin: "20px 0" }}>
                    Back-end
                    <hr />
                  </Typography>
                  <Typography variant="p">
                    <ChipsGenerator
                      values={["Spring-Boot", "JPA", "Spring-Security"]}
                      color="royalblue"
                    />
                    <br />
                    <small>* Spring-boot??? ?????? ?????????????????? ??????</small>
                    <br />
                    <small>
                      * Spring-Sequerity??? ?????? ???????????????,??????,???????????? ??????
                      ??????
                    </small>
                    <br />
                    <small>* JPA ?????? ??????, ????????? ?????? ???????????? ?????? </small>
                    <br />
                    <small>
                      * Spring-data-JPA , QueryDSL??? ????????? JPA ????????? ??????
                    </small>
                    <br />
                  </Typography>
                  <Typography variant="h6" sx={{ margin: "20px 0" }}>
                    Version-Control
                    <hr />
                  </Typography>
                  <Typography variant="p">
                    <ChipsGenerator values={["Git", "GitHub"]} color="green" />
                    <br />
                    <small>
                      * Git / GitHub??? ?????? ???????????? ?????? , ???????????? ??????{" "}
                    </small>
                    <br />
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ margin: "20px 0" }}>
                    Database
                    <hr />
                  </Typography>
                  <Typography variant="p">
                    <ChipsGenerator
                      values={["OracleDB", "MariaDB", "Mysql"]}
                      color="skyblue"
                    />
                    <br />
                    <small>
                      * ???????????? ??????????????? ?????? ????????? ???????????? ?????? ?????? ??????
                    </small>
                    <br />
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ margin: "20px 0" }}>
                    IDE
                    <hr />
                  </Typography>
                  <Typography variant="p">
                    <ChipsGenerator
                      values={["INTELLIJ", "ECLIPSE", "VScode"]}
                      color="gray"
                    />
                    <br />
                    <small>
                      *?????? IDE??? ???????????? ????????? ?????? ????????? ???????????? ????????????
                      ??????{" "}
                    </small>
                    <br />
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ margin: "20px 0" }}>
                    Deployment
                    <hr />
                  </Typography>
                  <Typography variant="p">
                    <ChipsGenerator
                      values={["AWS EC2", "AWS RDS"]}
                      color="navy"
                    />
                    <br />
                    <small>
                      * AWS EC2 ??? RDS??? ???????????? ????????? ?????? + React + JPA +
                      Spring-Security ?????????????????? ?????? ??????{" "}
                    </small>
                    <br />
                    <small>
                      * AWS S3??? ????????? ????????? ????????? ??????
                    </small>
                    <br />
                    <small>
                      * Route53  , ACM??? ?????? https?????? ??? ????????? ?????? ??????
                    </small>
                    <br />
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Modal>
      </>
    );
}