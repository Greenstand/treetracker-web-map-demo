import { Avatar, Box, SvgIcon, Typography } from "@mui/material";
import Head from "next/head";
import NotificationIcon from '../images/Notification.svg';
import SearchIcon from '../images/Search.svg';
import Profile from '../images/profile.png';

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
            marginTop: 8,
            paddingLeft: 7,
            paddingRight: 7,
            }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              flexDirection: 'row',
              width: '100%',
              }}
          >
            <Avatar src={"https://mui.com/static/images/avatar/1.jpg"} 
              sx={{
                width: 49,
                height: 49,
                marginRight: 3,
                }}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                }}
            >
              <Typography variant="h1"
                sx={{
                  fontSize: '14px',
                  }}
              >Total Balance</Typography>
              <Typography 
                sx={{
                  fontSize: '22px',
                  fontWeight: '600',
                  marginTop: .8,
                  }}
                variant="h2">Token 4,822,142</Typography>
            </Box>
          </Box>
          <SvgIcon component={SearchIcon}
            sx={{

              width: 28,
              height: 28,
            }}
            viewBox="0 0 28 28"
          />
          <SvgIcon component={NotificationIcon}
            sx={{

              width: 28,
              height: 30,
              marginLeft: 7,
            }}
            viewBox="0 0 28 30"
          />
        </Box>
                <p>Home page content</p>
      </main>
    </div>
  )
}
