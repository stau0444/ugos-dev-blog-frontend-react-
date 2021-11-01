import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Chip, Grid, Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import { highlightedText } from './SearchList';

export default function ContentCard({keyword,content}) {
  return (
   
      <Link to={"/content/" + JSON.stringify(content.id)}>
        <Card
          className="content-card"
          sx={{
            textAlign:"center",
            width: "90%",
            borderRadius: "20px",
            color: "bisque",
            minWidth: 275,
            margin: "10px auto",
            padding: "0 10px",
            fontFamily: "'Nunito', sans-serif",
            boxShadow: "0px 0px 0px 0px rgba(5, 5, 20, 0.452)",
            background:
              "linear-gradient(to right bottom, rgb(0, 127, 255), rgb(0, 89, 178) 120%);",
            "&:hover": {
              background:
                "linear-gradient(to right bottom, rgba(255, 0, 55, 0.644), rgb(0, 89, 178) 120%);",
              transition: "all 0.1s linear",
              width: "91%",
              boxShadow: "3px 3px 1px 0px rgba(5, 5, 20, 0.726)",
              color:"white"
            },
          }}
        >
          <CardContent sx={{ padding: "20px 0" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    color: "#ecd6d4",
                    fontFamily: "'Gowun Batang', serif",
                    margin: "0 0 10px 0",
                  }}
                >
                  {keyword
                    ? highlightedText(content.title, keyword)
                    : content.title}
                </Typography>
                <Divider color="white" />
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
                  marginTop: "10px",
                  maxHeight: 230,
                  minHeight:230,
                  overflow: "hidden",
                }}
              >
                <Typography sx={{fontSize:"14px" ,fontFamily:"'Nanum Gothic', sans-serif" }}>
                  {keyword
                    ? highlightedText(content.description, keyword)
                    : content.description}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent="flex-end"
                  alignItems="flex-end"
                  marginRight="10px"
                >
                  {
                  content.tags !== undefined 
                  ? content.tags.map((tag,index) => (
                    <Chip
                      key={index}
                      label={tag}
                      size="small"
                      color="success"
                    />
                  ))
                  :
                    ""
                  }
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Link>
  );
}