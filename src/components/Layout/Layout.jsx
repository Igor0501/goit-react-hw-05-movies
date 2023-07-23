import { Suspense } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';

import { Loader } from '../Loader/Loader';
import {
  Container,
  Header,
  Logo,
  Links,
  Footer,
  Text,
  IconLogo,
} from './Layout.styled';

const Layout = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    // Навігація на головну сторінку
    navigate('/');
  };

  return (
    <>
      <Container>
        <Header>
          <Logo onClick={handleLogoClick}>
            <IconLogo />
            TMDB
          </Logo>
          <nav>
            <Links to="/" end>
              Home
            </Links>
            <Links to="/movies">
              Movie
            </Links>
          </nav>
        </Header>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <Footer>
          <Text>&copy; {new Date().getFullYear()} Movie Search</Text>
        </Footer>
      </Container>
    </>
  );
};

export default Layout;
