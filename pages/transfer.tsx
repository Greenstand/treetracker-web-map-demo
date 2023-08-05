import { Autocomplete, Avatar, Box, CircularProgress, SvgIcon, TextField, Typography } from "@mui/material";
import Header from "../components/Header";
import WalletIcon from '../images/Group.svg';
import { faker } from "@faker-js/faker";
import { ArrowDownward } from "@mui/icons-material";
import React from "react";

interface Film {
  title: string;
  year: number;
}

// Top films as rated by IMDb users. http://www.imdb.com/chart/top
const topFilms = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
];

export default function Transfer(){
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<readonly Film[]>([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (active) {
        setOptions([...topFilms]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);


  return(
    <Box
      sx={{
        paddingLeft: 5,
        paddingRight: 5,
        }}
    >
      <Header
        title="Transfer Token"
        backLink="/home"
        forwardLink=""
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
          src={faker.image.avatar()}
        />
        <Box>
          <Typography variant="h6" sx={{ fontWeight: '600', fontSize: '15px' }}>
            {faker.string.uuid()}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '11px', color: '#61697D' }} >
            Created at {faker.date.recent().toLocaleString()}
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
          <Autocomplete
      id="asynchronous-demo"
      sx={{ width: '100%' }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={(option) => option.title}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          sx={{
            width: '100%',
            marginTop: '0.5rem',
            height: 60,
            fontSize: '0.9rem',
            backgroundColor: '#F3F6FF',
          }}
          {...params}
          label=""
          placeholder="Send to wallet, input name here"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
      </Box>
    </Box>
  )
}
