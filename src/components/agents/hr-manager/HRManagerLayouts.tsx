'use client';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  AppBar, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography,
} from '@mui/material';
import { withStyles } from '@mui/styles';
import { ChatBubble, ChevronLeft, ChevronRight, Dashboard, Menu } from '@mui/icons-material';
import Chat from '@mui/icons-material/Chat';
import Link from 'next/link';

const drawerWidth = 240;

const styles: any = (theme: any) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

interface MiniDrawerProps {
  classes?: any;
  theme?: any;
  children?: React.ReactNode;
}

class MiniDrawer extends React.Component<MiniDrawerProps> {
  state = {
    open: true,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme, children } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open,
          })}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: this.state.open,
              })}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              AI HR Manager
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="persistent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
          open={this.state.open}
          style={{
            display: this.state.open ? 'block' : 'none',
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {this.state.open ? (
              ['Dashboard', 'Chat'].map((text, index) => (
                <Link href={`/agents/hr-manager/${text.toLowerCase()}`} key={text}>
                  <ListItemButton>
                    <ListItemIcon>{index % 2 === 0 ? <Dashboard /> : <Chat />}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </Link>
              ))
            ) : (
              ['Dashboard', 'Chat'].map((text, index) => (
                <ListItemButton key={text}>
                  <ListItemIcon>{index % 2 === 0 ? <Dashboard /> : <Chat />}</ListItemIcon>
                </ListItemButton>
              ))
            )}
          </List>
        </Drawer>
        <main className={classes.content}
          style={{
            transition: theme.transitions.create('margin', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            // marginLeft: this.state.open ? drawerWidth : 0,
          }}
        >
          {/* Render the children inside the main */}
          {children}
        </main>
      </div>
    );
  }
}

// MiniDrawer.propTypes = {
//   classes: PropTypes.object.isRequired,
//   theme: PropTypes.object.isRequired,
//   children: PropTypes.node, // Add children prop type validation
// };

export default withStyles(styles, { withTheme: true })(MiniDrawer);
