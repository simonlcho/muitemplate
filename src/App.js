import React, {useState} from 'react';
import {ThemeProvider, makeStyles } from '@material-ui/styles';
import {BrowserRouter, Route, Switch} from "react-router-dom"

import Header from './layouts/Header';
import Home from './views/Home';
import Function2 from './views/Function2';
import Subfunction from './views/Subfunction';
import Subfunction11 from './views/Subfunction11';
import Contact from './views/Contact';
import Footer from './layouts/Footer';

import theme from './Theme';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  }
}));

function App() {

  const classes = useStyles();  
  const [showSideBar, setShowSideBar] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={() => 
              <React.Fragment>
                <div className={classes.root} >
                  <Header showSideBar={false} showDrawer={false} />
                  <Home showSideBar={false} />
                </div>
                <Footer showSideBar={false} />
              </React.Fragment>                
              } 
            />
            <Route exact path="/subfunction11" component={() => 
              <React.Fragment>
                <div className={classes.root} >
                  <Header showSideBar={showSideBar} showDrawer={!showSideBar} setShowSideBar={setShowSideBar} />
                  <Subfunction11 showSideBar={showSideBar} setShowSideBar={setShowSideBar} title="Sub Function 11" />
                </div>          
                <Footer showSideBar={showSideBar} />                
              </React.Fragment>
              } 
            />
            <Route exact path="/subfunction12" component={() => 
              <React.Fragment>
                <div className={classes.root} >
                  <Header showSideBar={showSideBar} showDrawer={!showSideBar} setShowSideBar={setShowSideBar} />
                  <Subfunction showSideBar={showSideBar} setShowSideBar={setShowSideBar} title="Sub Function 12" />
                </div>          
                <Footer showSideBar={showSideBar} />                
              </React.Fragment>
              } 
            />
            <Route exact path="/subfunction131" component={() => 
              <React.Fragment>
                <div className={classes.root} >
                  <Header showSideBar={showSideBar} showDrawer={!showSideBar} setShowSideBar={setShowSideBar} />
                  <Subfunction showSideBar={showSideBar} setShowSideBar={setShowSideBar} title="Sub Function 131" />
                </div>          
                <Footer showSideBar={showSideBar} />                
              </React.Fragment>
              } 
            />
            <Route exact path="/subfunction132" component={() => 
              <React.Fragment>
                <div className={classes.root} >
                  <Header showSideBar={showSideBar} showDrawer={!showSideBar} setShowSideBar={setShowSideBar} />
                  <Subfunction showSideBar={showSideBar} setShowSideBar={setShowSideBar} title="Sub Function 132" />
                </div>          
                <Footer showSideBar={showSideBar} />                
              </React.Fragment>
              } 
            />
            <Route exact path="/subfunction133" component={() => 
              <React.Fragment>
                <div className={classes.root} >
                  <Header showSideBar={showSideBar} showDrawer={!showSideBar} setShowSideBar={setShowSideBar} />
                  <Subfunction showSideBar={showSideBar} setShowSideBar={setShowSideBar} title="Sub Function 133" />
                </div>          
                <Footer showSideBar={showSideBar} />                
              </React.Fragment>
              } 
            />

            <Route exact path="/subfunction141" component={() => 
              <React.Fragment>
                <div className={classes.root} >
                  <Header showSideBar={showSideBar} showDrawer={!showSideBar} setShowSideBar={setShowSideBar} />
                  <Subfunction showSideBar={showSideBar} setShowSideBar={setShowSideBar} title="Sub Function 141" />
                </div>          
                <Footer showSideBar={showSideBar} />                
              </React.Fragment>
              } 
            />
            <Route exact path="/subfunction142" component={() => 
              <React.Fragment>
                <div className={classes.root} >
                  <Header showSideBar={showSideBar} showDrawer={!showSideBar} setShowSideBar={setShowSideBar} />
                  <Subfunction showSideBar={showSideBar} setShowSideBar={setShowSideBar} title="Sub Function 142" />
                </div>          
                <Footer showSideBar={showSideBar} />                
              </React.Fragment>
              } 
            />
            <Route exact path="/subfunction143" component={() => 
              <React.Fragment>
                <div className={classes.root} >
                  <Header showSideBar={showSideBar} showDrawer={!showSideBar} setShowSideBar={setShowSideBar} />
                  <Subfunction showSideBar={showSideBar} setShowSideBar={setShowSideBar} title="Sub Function 143" />
                </div>          
                <Footer showSideBar={showSideBar} />                
              </React.Fragment>
              } 
            />

            <Route exact path="/function2" component={() => 
              <React.Fragment>
                <div className={classes.root} >
                  <Header showSideBar={false} showDrawer={false}/>
                  <Function2 showSideBar={false} />
                </div>          
                <Footer showSideBar={false} />                
              </React.Fragment>
              } 
            />
            <Route exact path="/contact" component={() => 
              <React.Fragment>
                <div className={classes.root} >
                  <Header showSideBar={false} showDrawer={false}/>
                  <Contact showSideBar={false} />
                </div>         
                <Footer showSideBar={false} />                
              </React.Fragment>
              } 
            />
          </Switch>
      </BrowserRouter>     
    </ThemeProvider>     
  );
}

export default App;
