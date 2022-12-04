import React, { useContext } from 'react';
import { DrawerComponent } from './components/Drawer';
import { UserContext } from './context';
import { Routes1 } from './MainRoute';
import { MainRoutes } from './Routes';

function App() {
  const{user}:any=useContext(UserContext)
  return (
    <div className="App" >
      
    {user ?
    <DrawerComponent />
    :
    <Routes1/>
    }
    
    </div>
  );
}

export default App;
