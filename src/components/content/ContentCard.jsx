import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Chip, Grid, Stack, styled } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import { highlightedText } from './SearchList';
import { useSelector } from 'react-redux';
import BookIcon from '@mui/icons-material/Book';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const StyledCard = styled(Card)`
  text-align:center;
  width: 90%;
  border-radius: 15px;
  color: ${props =>  props.theme.nightMode?"#746d6cfd":"black"};
  min-width: 275;
  margin: 10px auto;
  padding: 0 10px;
  box-shadow: 10px 10px 10px rgba(0 , 0,  0,  0.39);
  /* box-shadow: 7px 7px 0 rgb(32 33 37 / 30%); */
  background:#ffffff19;
  border-top: 1px solid #ffffff7f;
  border-left: 1px solid #ffffff7f;
   /* "linear-gradient(to right bottom, #ff00d4, rgb(0, 89, 178) 120%);", */
  &:hover{
    margin-top: 6px;
    background:
    ${props => props.theme.nightMode?
    "linear-gradient(to right bottom, #9aceb7f2, whitesmoke 120%)"
    :
    "linear-gradient(to right bottom, #205d8ff6, #4a53636c 120%)"
    };
    transition: box-shadow 0.1s linear;
    transition: margin-top 0.25s ease;
    width: 90%;
    box-shadow: 7px 7px 0px rgb(32 33 37 / 40%);
    color: ${props => props.theme.nightMode?"#020611fb":"bisque"};
  }
`;

const ContentDescription = styled(Typography)`
  color:${props => props.theme.nightMode?"#70633f":"#cfcfe3"};
  font-size:14px ;
  text-align:  left;
  border-radius: 10px;
  font-family:'NanumSquare', sans-serif;
  font-weight: 400;
  text-overflow: ellipsis;
  -webkit-line-clamp: 13; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap:break-word; 
  line-height: 1.3em;
  height: 16.2em;
  
`

const ContentTitle = styled(Typography)`
  font-weight: 700;
  font-size:25px;
  box-shadow: inset 0px 1px 3px 0px gray;
  background-color: #618cbe39;
  padding:10px;
  border-radius: 10px;
  color: ${props => props.theme.nightMode?"#22ad96":"bisque"};
  font-family: Gowun Batang;
  /* font-family:'NanumSquare' , san-serif; */
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  margin: 10px 0 15px 0;
`
export const ContentTag=styled(Chip)`
background-color: green;
font-size:14px;
font-family: 'Righteous', cursive;
`

const ContentDivider = styled(Divider)`
  margin:15px auto;
  width:98%;
  height:2px;
  background : ${props => props.theme.nightMode?"darkgray":"#337ab7"};
`
export const CreatedDate = styled("p")`
  margin:-3px 5px 12px 0;
  color:${props => props.theme.nightMode?"gray":"#265d97"};
  float:right;  
  background-color: #aaecd7dd;
  font-size: 12px;
  border:1px solid gray;
  padding:3px 8px;
  box-shadow: inset 0px 1px 3px 0px gray;
  border-radius: 15px;
  font-weight: bold;
  border: 1px solid #a5dfaf;
`

export default function ContentCard({keyword,content}) {
  const nightMode = useSelector(state => state.nightMode);
  const theme = { 
    nightMode:nightMode
  } 
  return (
    <Link to={"/content/" + JSON.stringify(content.id)}>
      <StyledCard theme={theme} className="content-card">
        <CardContent sx={{ padding: "10px 10px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <ContentTitle theme={theme}>
                <BookIcon
                  fontSize="midium"
                  sx={{
                    margin: "0 10px  -2px 0",
                    color: "lightgray",
                  }}
                />
                {keyword
                  ? highlightedText(content.title, keyword)
                  : content.title}
              </ContentTitle>
              <ContentDivider theme={theme} />
              <CreatedDate theme={theme}>
                <AccessTimeIcon
                  fontSize="small"
                  sx={{
                    fontSize: "15px",
                    margin: "0 3px -3px 0",
                  }}
                />
                {content.createdAt}
              </CreatedDate>
            </Grid>
            <Grid item sm={4} xs={12}>
              <img
                className="content-img"
                src={content.imageUrl}
                alt=""
                width="100%"
                height="100%"
              />
            </Grid>
            <Grid
              item
              sm={8}
              xs={12}
              sx={{
                maxHeight: 232,
                minHeight: 190,
                overflow: "hidden",
              }}
            >
              <ContentDescription theme={theme}>
                {keyword
                  ? highlightedText(content.description, keyword)
                  : content.description}
              </ContentDescription>
            </Grid>
            <Grid item xs={12}>
              <Stack
                direction="row"
                spacing={1}
                justifyContent="flex-end"
                alignItems="flex-end"
                marginRight="10px"
              >
                {content.tags !== undefined
                  ? content.tags.map((tag, index) => (
                      <ContentTag
                        key={index}
                        label={tag}
                        size="small"
                        color="success"
                      />
                    ))
                  : ""}
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </StyledCard>
    </Link>
  );
}