import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import Header from '../../components/Header';
import * as transfer from '../../models/transfer';
import { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import { Wallet } from '../../models/entities/Wallet';
import formatWalletName from '../../models/wallet/formatWalletName';
import { Token } from '../../models/entities/Token';

export default function Wallet() {
  const [currentWallet, setCurrentWallet] = useState<Wallet | null>(null);
  const [chosenToken, setChosenToken] = useState<Token | null>(null);
  const transferWizard = transfer.useTransferWizard();

  //init transferWizard
  useEffect(() => {
    const wallet = {
      id: faker.datatype.uuid(),
      name: faker.internet.userName(),
      balance: faker.datatype.number({ min: 1000, max: 100000 }),
      createdAt: faker.date.past(),
      logo: faker.image.url(),
    };
    setCurrentWallet(wallet);

    const token = {
      id: faker.datatype.uuid(),
      walletId: wallet.id,
      createdAt: faker.date.past(),
    }
    setChosenToken(token);

  }, []);

  useEffect(() => {
    setTW((prevState: any) => ({
      ...prevState,
      fromWallet: currentWallet,
      token: chosenToken,
    }));
  }, [currentWallet, chosenToken]);
      
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
        title={currentWallet && formatWalletName(currentWallet) || '---'}
        backLink="/home"
        forwardLink="/transfer/step1"
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
