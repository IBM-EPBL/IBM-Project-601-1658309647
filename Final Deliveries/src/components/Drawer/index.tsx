import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import BarChartIcon from '@mui/icons-material/BarChart';
import BadgeIcon from '@mui/icons-material/Badge';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CategoryIcon from '@mui/icons-material/Category';
import { Link } from 'react-router-dom';
import { MainRoutes } from '../../Routes';
import { Button } from '@mui/material';
import { setDefaultResultOrder } from 'dns/promises';
import { UserContext } from '../../context';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export const DrawerComponent = () => {
  const{setUser}:any=React.useContext(UserContext)
  function handleLogout(){
    setUser(false);
  }
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const navBarData = [
    {
      id: 1,
      name: "Master",
      logo: <HomeIcon />,
      pageRoute: "/"
    },
    {
      id: 2,
      name: "Customers",
      logo: <FaceRetouchingNaturalIcon />,
      pageRoute: "/CustomerTablePage"
    },
    {
      id: 3,
      name: "Product",
      logo: <CategoryIcon />,
      pageRoute: "/ProductPage"
    },
    {
      id: 4,
      name: "Stock",
      logo: <ShowChartIcon />,
      pageRoute: "/StockPage"
    },
    // {
    //   id:5,
    //   name:"Purchase",
    //   pageRoute:"/PurchasePage"
    // },
    // {
    //   id:6,
    //   name:"PurchaseReturn",
    //   pageRoute:"/PurchaseReturnPage"
    // },
    {
      id: 7,
      name: "Sales",
      logo: <LocalGroceryStoreIcon />,
      pageRoute: "/SalesPage"
    },
    // {
    //   id:8,
    //   name:"SalesReturn",
    //   pageRoute:"/SalseReturnPage"
    // },

    {
      id: 9,
      name: "Report",
      logo: <BarChartIcon />,
      pageRoute: "/ReportPage"
    },
    // {
    //   id: 10,
    //   name: "Employees",
    //   logo: <BadgeIcon />,
    //   pageRoute: "/EmployeesPage"
    // }
  ]

  return (
    <>
      <Box sx={{ display: 'flex' }}>

        <AppBar position="fixed" open={open} style={{ backgroundColor: "rgba(0,0,0,.87)" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" style={{ color: "white" }}>
              Inventory Dashboard
              <Button style={{color:'white'}} onClick={() => {handleLogout()}}>Logout</Button>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List style={{ backgroundColor: "rgba(0,0,0,.87)", height: "100%" }}>
            {navBarData.map((Values: any) => (
              <ListItem key={Values.id} disablePadding sx={{ display: 'block' }}>
                <Link to={Values.pageRoute} style={{ textDecoration: "none" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 5 : 'auto',
                        justifyContent: 'center',
                        color: "white"

                      }}
                    >
                      {Values.logo}
                    </ListItemIcon>
                    <ListItemText style={{ color: "white", opacity: open ? 1 : 0 }}>
                      {Values.name}
                    </ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>


        </Drawer>
        <div style={{ marginTop: "70px", marginLeft: "10px", width: "100%" }}>
          <MainRoutes />
        </div>

      </Box>

    </>
  )
}