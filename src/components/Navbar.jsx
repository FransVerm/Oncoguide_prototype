import React from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import InfoIcon from '@material-ui/icons/Info';
import LanguageIcon from '@material-ui/icons/Language';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const MyAppBar = styled(AppBar)({
});
export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = event => {
    setAuth(event.target.checked);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <MyAppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Borstkanker 2020
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><PersonIcon color="primary"/>&nbsp;Mijn account</MenuItem>
                <MenuItem onClick={handleClose}><SettingsIcon color="primary"/>&nbsp;Instellingen</MenuItem>
                <MenuItem onClick={handleClose}><HelpOutlineIcon color="primary"/>&nbsp;Help</MenuItem>
                <MenuItem onClick={handleClose}><HelpOutlineIcon color="primary"/>&nbsp;FAQ</MenuItem>
                <MenuItem onClick={handleClose}><InfoIcon color="primary"/>&nbsp;Over Oncoguide</MenuItem>
                <MenuItem onClick={handleClose}><LanguageIcon color="primary"/>&nbsp;English</MenuItem>
                <MenuItem onClick={handleClose}><ExitToAppIcon color="primary"/>&nbsp;Afmelden</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </MyAppBar>
    </div>
  );
}