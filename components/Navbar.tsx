import React, { useState, useEffect } from 'react';
import {
  Avatar,
  Box,
  Drawer,
  Typography,
  IconButton,
  Stack,
  Grid,
  List,
  ListItem,
} from '@mui/material';

import CloseRoundedIcon from '../images/Close.svg';
import LogoutRoundedIcon from '../images/Logout.svg';
import HistoryRoundedIcon from '../images/History.svg';
import WalletRoundedIcon from '../images/Wallet.svg';
import PasswordRoundedIcon from '../images/Key.svg';
import SettingsIcon from '../images/Settings.svg';

const Navbar = ({ user, open, toggleDrawer }) => {
  const [xl, set_xl] = useState(window.innerWidth >= 1200 ? true : false);
  const [lg, set_lg] = useState(window.innerWidth >= 787 ? true : false);
  const [sm, set_sm] = useState(window.innerWidth < 360 ? true : false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1200) {
        set_xl(true);
      } else {
        set_xl(false);
      }

      if (window.innerWidth >= 787) {
        set_lg(true);
      } else {
        set_lg(false);
      }

      if (window.innerWidth < 360) {
        set_sm(true);
      } else {
        set_sm(false);
      }
    });
  }, []);

  return (
    <>
      <div
        style={{
          backgroundColor: '#fff',
          width: xl ? '30vw' : lg ? '45vw' : '100vw',
          height: '10vh',
          zIndex: '1201',
          position: 'fixed',
          top: !lg ? (open ? '0' : '-10vh') : 0,
          left: xl ? (open ? '0' : '-30vw') : lg ? (open ? '0' : '-45vw') : '0',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingLeft: '16px',
          paddingRight: '16px',
          transition: 'all 0.5s',
        }}
      >
        <IconButton onClick={toggleDrawer} size="medium">
          <CloseRoundedIcon style={{ color: '#000', fontSize: '28px' }} />
        </IconButton>
        <Typography
          sx={{ width: '100%', textAlign: 'center', fontSize: '20px' }}
          variant="h4"
        >
          Profile
        </Typography>
        <IconButton size="medium">
          <LogoutRoundedIcon sx={{ color: '#000', fontSize: '28px' }} />
        </IconButton>
      </div>
      <div
        style={{
          position: 'fixed',
          left: open
            ? '0'
            : xl
            ? 'calc(-30vw - 5px)'
            : lg
            ? 'calc(-45vw - 5px)'
            : 'calc(-70vw - 5px)',
          top: '0',
          zIndex: '3',
          height: '100vh',
          width: xl ? '30vw' : lg ? '45vw' : '70vw',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#fff',
          paddingTop: '10vh',
          paddingLeft: '24px',
          transition: 'all 0.5s',
        }}
      >
        <Avatar
          src={user.avatar}
          sx={{
            width: 69,
            height: 69,
          }}
        />
        <Typography variant="h4" sx={{ marginTop: 3 }}>
          {user.firstName + ' ' + user.lastName}
        </Typography>
        <Typography variant="subtitle2" sx={{ fontSize: '13px' }}>
          {user.firstName.toLowerCase() + '.' + user.lastName.toLowerCase()}
          @gmail.com
        </Typography>
        <List sx={{ marginTop: 4, marginLeft: 0, paddingLeft: 0 }}>
          <ListItem sx={{ marginLeft: 0, paddingLeft: 0 }}>
            <Stack
              direction="row"
              sx={{ marginTop: 1 }}
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  width: 43,
                  height: 43,
                  backgroundColor: '#F1F5FF',
                  borderRadius: '50%',
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <HistoryRoundedIcon style={{ fontSize: '20px' }} />
              </Box>
              <Typography
                variant="h6"
                sx={{ paddingLeft: 4, fontSize: '16px' }}
              >
                Transaction History
              </Typography>
            </Stack>
          </ListItem>
          <ListItem sx={{ marginLeft: 0, paddingLeft: 0 }}>
            <Stack
              direction="row"
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  width: 43,
                  height: 43,
                  backgroundColor: '#F1F5FF',
                  borderRadius: '50%',
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <WalletRoundedIcon style={{ fontSize: '20px' }} />
              </Box>
              <Typography
                variant="h6"
                sx={{ paddingLeft: 4, fontSize: '16px' }}
              >
                All Wallets
              </Typography>
            </Stack>
          </ListItem>
          <ListItem sx={{ marginLeft: 0, paddingLeft: 0 }}>
            <Stack
              direction="row"
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  width: 43,
                  height: 43,
                  backgroundColor: '#F1F5FF',
                  borderRadius: '50%',
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <PasswordRoundedIcon style={{ fontSize: '20px' }} />
              </Box>
              <Typography
                variant="h6"
                sx={{ paddingLeft: 4, fontSize: '16px' }}
              >
                Change Password
              </Typography>
            </Stack>
          </ListItem>
          <ListItem sx={{ marginLeft: 0, paddingLeft: 0 }}>
            <Stack
              direction="row"
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  width: 43,
                  height: 43,
                  backgroundColor: '#F1F5FF',
                  borderRadius: '50%',
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <SettingsIcon style={{ fontSize: '20px' }} />
              </Box>
              <Typography
                variant="h6"
                sx={{ paddingLeft: 4, fontSize: '16px' }}
              >
                Settings
              </Typography>
            </Stack>
          </ListItem>
        </List>
      </div>
    </>
  );
};

export default Navbar;
