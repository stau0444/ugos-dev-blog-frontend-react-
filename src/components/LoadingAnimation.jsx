import { Skeleton, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import  Avatar from '@mui/material/Avatar';

export default function LoadingAnimation() {
  return (
      <div style={{border:'1px solid bisque' ,padding:"5px 15px 15px 15px" ,borderRadius:'20px',margin:'20px 0'}}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ margin: 1 }}>
              <Skeleton variant="circular">
                <Avatar />
              </Skeleton>
          </Box>
          <Box sx={{ width: '90%' ,height:"80%"}}>
              <Skeleton width="100%">
                <Typography>.</Typography>
              </Skeleton>
          </Box>
        </Box>
      
          <Skeleton variant="rectangular" height="300px" width="100%" sx={{borderRadius:'20px'}}>
            <div style={{ paddingTop: '57%',maxHeight:'200px'}} />
          </Skeleton>
    </div>
    );
}