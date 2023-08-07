import { Alert, Autocomplete, Avatar, Box, CircularProgress, SvgIcon, TextField, Typography } from "@mui/material";
import Header from "../../components/Header";
import Check from '@mui/icons-material/QuestionMark';
import { faker } from "@faker-js/faker";
import { ArrowDownward } from "@mui/icons-material";
import React from "react";
import { Wallet } from "../../models/entities/Wallet";
import { useRecoilState } from "recoil";
import transferWizard from "../../states/transferWizard";
import { useTransferWizard } from "../../models/transfer";
import WalletInput from "../../components/WalletInput";
import { useRouter } from "next/router";

export default function Step2(){
  const transferWizard = useTransferWizard();
  const router = useRouter();


  return(
    <Box
      sx={{
        paddingLeft: 5,
        paddingRight: 5,
        }}
    >
      <Header
        title="Please confirm"
        backLink="/transfer/step1"
        forwardLink={() => {
          transferWizard.transfer(
            () => {
              router.push('/transfer/step3');
            }
          );
        }}
        forwardText="Transfer"
      />
      {transferWizard.wizard.step1.error && (
        <Alert onClose={() => {}}>{transferWizard.wizard.step1.error}</Alert>
      )}
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
          backgroundColor: '#ffe7c7',
          "&svg": {
            width: 68,
            height: 68,
            fill: "#ff9201",
          }
        }}
      >
        <Check />
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
          src={transferWizard.wizard.fromWallet?.logo}
        />
        <Box>
          <Typography variant="h6" sx={{ fontWeight: '600', fontSize: '15px' }}>
            {transferWizard.wizard.token?.id}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '11px', color: '#61697D' }} >
            Created at {transferWizard.wizard.token?.createdAt.toLocaleDateString()}
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
          src={transferWizard.wizard.toWallet?.logo}
        />
        <Box>
          <Typography variant="h6" sx={{ fontWeight: '600', fontSize: '15px' }}>
            {transferWizard.wizard.toWallet?.name}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '11px', color: '#61697D' }} >
            Created at {transferWizard.wizard.toWallet?.createdAt.toLocaleDateString()}
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant="body2" sx={{marginTop: 5 }}>
          You are going to transfer 1 token from wallet: {transferWizard.wizard.fromWallet?.name} to wallet: {transferWizard.wizard.toWallet?.name}.
        </Typography>
      </Box>
      </Box>
    </Box>
  )
}
