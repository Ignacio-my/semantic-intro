import 'semantic-ui-css/semantic.min.css'
import { Button, Icon, Label, Menu} from 'semantic-ui-react'
import MyModal from './MyModal';
import React from "react";
import executor from './assets/img/executor.jpg';
import Executor2 from './assets/img/Executor2.png';

function App() {

  var [openModal, setOpenModal] = React.useState(false);



  console.log("modal state", openModal);
  
  return (


    <div className="App">

       <Menu>
        <Menu.Item
          position="left"
          name='editorials'          
          onClick={()=>console.log("click menu 1") }
        >
          Inicio
        </Menu.Item>

        <Menu.Item
          position="center"
          name='reviews'
          
          onClick={()=>console.log("click menu 2")}
        >
          Paginas
        </Menu.Item>

        <Menu.Item
          position="right"
          name='upcomingEvents'          
          onClick={()=>console.log("click menu 3")}
        >
          Otros
        </Menu.Item>
      </Menu>

       <Button as='div' labelPosition='right' onClick={(e,d)=>setOpenModal(true)}>
      <Button icon>
        Modal
      </Button>
    </Button>

    
    <div> 
      <div style={{ backgroundImage: `url(${Executor2})`, backgroundSize: "cover", height: "100vh"}}>
      <h1>This is Text on top</h1>
    </div>
    </div>

    <MyModal visible={openModal} onClose={()=>{console.log("close"); setOpenModal(false);}} />
    </div>
  );
}

export default App;

