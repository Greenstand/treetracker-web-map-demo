import { Box, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Wallet(){

  return(
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100vh',
      }}
  >
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        marginTop: 4,
        paddingLeft: 3,
        paddingRight: 3,
        }}
    >
      <ArrowBackIcon />
      <Box>
        <Typography variant="h5" >
          Samwell A.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" color="primary" >
          Next
        </Typography>
      </Box>
    </Box>
    <Box
      sx={{
        backgroundColor: '#F5F6FA',
        flexGrow: 1,
      }}
    >
      <iframe
        src="https://map.treetracker.org/top"
        height="100%"
        width="100%"
        style={{border: 'none'}}
      />
    </Box>
  </Box>
  )
}
