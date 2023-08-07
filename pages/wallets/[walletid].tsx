import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import Header from '../../components/Header';
import { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import { Wallet } from '../../models/entities/Wallet';
import formatWalletName from '../../models/wallet/formatWalletName';
import { Token } from '../../models/entities/Token';
import useTransferWizard from '../../models/transfer/useTransferWizard';

export default function Wallet() {
  const [currentWallet, setCurrentWallet] = useState<Wallet | null>(null);
  const [chosenToken, setChosenToken] = useState<Token | null>(null);
  const transferWizard = useTransferWizard();

  //init transferWizard
  useEffect(() => {
    async function load() {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (transferWizard.wizard.fromWallet && transferWizard.wizard.token) {
        setCurrentWallet(transferWizard.wizard.fromWallet);
        setChosenToken(transferWizard.wizard.token);
      } else {
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
        };
        setChosenToken(token);
      }
    }

    load();
  }, []);

  useEffect(() => {
    transferWizard.setWizard((current) => {
      return {
        ...current,
        fromWallet: currentWallet,
        token: chosenToken,
      };
    });
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
        title={(currentWallet && formatWalletName(currentWallet)) || ''}
        backLink="/home"
        forwardLink={transferWizard.isTransferable ? '/transfer/step1' : ''}
        forwardText={transferWizard.isTransferable ? 'Transfer' : ''}
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
