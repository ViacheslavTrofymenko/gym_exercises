import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Home = () => {
  return (
    <Stack>
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: '48px', height: '48px', margin: '0 20px' }}
        />
      </Link>
      <Stack>
        <Link to="/" style={{ textDecoration: 'none' }}>
          Home
        </Link>
      </Stack>
    </Stack>
  );
};

export default Home;
