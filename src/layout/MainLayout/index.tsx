import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { RootState } from '../../app/store'; // Assuming your store setup exports RootState
import { Theme } from '@mui/material/styles';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';

// project imports
import Breadcrumbs from '../../ui-component/extended/Breadcrumbs';
import Header from './Header';
import Sidebar from './Sidebar';
// import Customization from '../Customization';
import navigation from '../../menu-items';
import { drawerWidth } from '../../services/constant';
import { setMenu } from '../../features/customization/customizationSlice';

// assets
// import { IconChevronRight } from '@tabler/icons-react';
import { IconChevronRight } from '@tabler/icons-react';


interface MainProps {
  theme: Theme ;
  open: boolean;
}

const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open',
})<MainProps>(({ theme, open }) => ({
  ...theme.mainContent,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  background: '#eef2f6',
  // background: theme.background,
  transition: theme.transitions.create(
    'margin',
    open
      ? {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen
        }
      : {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }
  ),
  [theme.breakpoints.up('md')]: {
    marginLeft: open ? 0 : -(drawerWidth - 20),
    width: `calc(100% - ${drawerWidth}px)`
  },
  [theme.breakpoints.down('md')]: {
    marginLeft: '20px',
    width: `calc(100% - ${drawerWidth}px)`,
    padding: '16px'
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: '10px',
    width: `calc(100% - ${drawerWidth}px)`,
    padding: '16px',
    marginRight: '10px'
  }
}));


// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  // Handle left drawer
  const leftDrawerOpened = useSelector((state:RootState) => state.rootReducer.customization.opened);
  const dispatch = useDispatch();

  const handleLeftDrawerToggle = () => {
    // dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
    dispatch(setMenu(!leftDrawerOpened))
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* header */}
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.default,
          transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'
        }}
      >
        <Toolbar>
          <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
        </Toolbar>
      </AppBar>

      {/* drawer */}
      <Sidebar drawerOpen={!matchDownMd ? leftDrawerOpened : !leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />

      {/* main content */}
      <Main theme={theme} open={leftDrawerOpened}>
        {/* breadcrumb */}
        <Breadcrumbs separator={IconChevronRight } navigation={navigation} icon title rightAlign />
        <Outlet />
      </Main>
  
      {/* <Customization /> */}
    </Box>
  );
};

export default MainLayout;
