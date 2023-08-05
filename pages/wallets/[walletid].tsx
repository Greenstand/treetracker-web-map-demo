import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import Header from '../../components/Header';

export default function Wallet() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100vh',
      }}
    >
      <Header 
        title="Samwell A."
        backLink="/home"
        forwardLink="/transfer"
        forwardText="Transfer"
      />
      <Box
        sx={{
          backgroundColor: '#F5F6FA',
          flexGrow: 1,
        }}
      >
        <iframe
          src="https://alpha-dev.treetracker.org/top"
          height="100%"
          width="100%"
          style={{ border: 'none' }}
        />
      </Box>
    </Box>
  );
}
