import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Paper, Box, Typography, Avatar } from '@mui/material';
import UserIcon from '@mui/icons-material/Person';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Product+Sans:wght@300;400;500;700&display=swap" rel="stylesheet"/>
      </Head>

      <main className={styles.main}>
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            height: '100vh',
            width: '100vw',
            }}
        >
          <Typography variant="h5" 
            sx={{
              marginTop: '3rem',
              }}
          >
            Sign In 
          </Typography>
          <Avatar
            sx={{
              width: 104,
              height: 104,
              marginTop: '1.7rem',
              }}
          >
            <UserIcon />
          </Avatar>
        </Box>
      </main>
    </div>
  )
}

export default Home
