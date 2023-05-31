// import React, { useState } from 'react'
// import SideNav from './SideNav';
// import MainSection from './MainSection';
// import Header from './Header';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../styles/App.css';
// const App = () => {


//   return (
//     <div id="main">
//     <Header />
//       <div className='row'>
//         <div className='col-md-2'>
//           <SideNav change={}/>
//         </div>
//         <div className='col-md-10'>
//           <MainSection active = {}/>
//         </div>
//       </div>
//     </div>
//   )
// }


// export default App;


import React, { useState } from 'react'
import SideNav from './SideNav';
import MainSection from './MainSection';
import Header from './Header';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/App.css';

const App = () => {
  const [activeMenu,setActiveMenu] = useState("INBOX")
  const changeActiveMenu = (changeTo) => {
    setActiveMenu(changeTo)
  }
  return (
    <div id="main">
    <Header />
      <div className='row'>
        <div className='col-md-2'>
          <SideNav change={changeActiveMenu}/>
        </div>
        <div className='col-md-10'>
          <MainSection active = {activeMenu}/>
        </div>
      </div>
    </div>
  )
}


export default App;
