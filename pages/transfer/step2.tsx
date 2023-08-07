import { Autocomplete, Avatar, Box, CircularProgress, SvgIcon, TextField, Typography } from "@mui/material";
import Header from "../../components/Header";
import WalletIcon from '../images/Group.svg';
import { faker } from "@faker-js/faker";
import { ArrowDownward } from "@mui/icons-material";
import React from "react";
import { Wallet } from "../../models/entities/Wallet";
import * as wallets from "../../models/api/wallets";
import { useRecoilState } from "recoil";
import transferWizard from "../../states/transferWizard";

export default function Transfer(){
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<readonly Wallet[]>([]);
  const loading = open && options.length === 0;
  const [value, setValue] = React.useState<Wallet | null>(null);
  const [inputValue, setInputValue] = React.useState('');
  const [tw, setTW] = useRecoilState(transferWizard);

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      if (active) {
        wallets.getWalletByKeyword('')
          .then((wallets: Wallet[]) => {
            setOptions([...wallets]);
            });
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  const fetch = async (value: string, callback: (results: readonly Wallet[]) => void) => {
    const options = await wallets.getWalletByKeyword(value);
    callback(options);
  }

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  React.useEffect(() => {
    fetch(inputValue, (options) => {
      console.log('fetching');
      setOptions([...options]);
    });

  }, [value, inputValue]);


  return(
    <Box
      sx={{
        paddingLeft: 5,
        paddingRight: 5,
        }}
    >
      <Header
        title="Transfer Token"
        backLink="/transfer/step1"
        forwardLink="/transfer/step3"
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 7,
          marginBottom: 3,
        }}
      >
      <Avatar
        sx={{
          width: 120,
          height: 120,
          backgroundColor: '#D9F6FF',
        }}
      >
      <SvgIcon
        component={WalletIcon}
        viewBox="0 0 20 20"
        sx={{
          width: 62,
          height: 54,
          '& path': {
            fill: '#00C3FE',
          },
        }}
      />
      </Avatar>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          justifyContent: 'flex-start',
          width: '100%',
          }}
      >
        <Avatar
          sx={{
            width: 50,
            height: 50,
            marginRight: 3,
          }}
          src={tw.fromWallet && tw.fromWallet.logo}
        />
        <Box>
          <Typography variant="h6" sx={{ fontWeight: '600', fontSize: '15px' }}>
            {tw.token && tw.token.id}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '11px', color: '#61697D' }} >
            Created at {tw.token && tw.token.createdAt.toLocaleString()}
          </Typography>
        </Box>
      </Box>
      <Box>
        <ArrowDownward 
          sx={{
            marginTop: 4,
            color: '#9597A1',
          }}
          fontSize="large"
        />
      </Box>
      </Box>
    </Box>
  )
}
