import { ArrowBack } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function Header({
  title,
  backLink,
  forwardLink,
  forwardText = 'Next',
}: {
  title: string;
  backLink: string;
  forwardLink: string;
  forwardText?: string;
}) {

  return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          width: '100%',
          marginTop: 4,
          marginBottom: 3,
          paddingLeft: 3,
          paddingRight: 3,
        }}
      >
        <Link href={backLink}>
          <ArrowBack />
        </Link>
        <Box>
          <Typography variant="h5">{title}</Typography>
        </Box>
        <Box>
          <Typography variant="h6" color="primary">
            <Link href={forwardLink}>
              {forwardText}
            </Link>
          </Typography>
        </Box>
      </Box>
  );
}
