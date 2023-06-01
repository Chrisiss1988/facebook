import React from 'react';
import {} from './icons/bell.svg';

function App() {
  return (
    <Navbar>
      <NavItem icon='❤️'/>
      <NavItem icon='😊'/>
      <NavItem icon='😇'/>
    </Navbar>
  );
}

function Navbar(props){
  return(
    <nav className='navbar'>
     <ul className='navbar-nav'> { props.children } </ul> 
    </nav>
  )
}

function NavItem(props){
  return (

    <li className='nav-item'>
      <a href='#' className='icon-button'>
        {props.icon}
      </a>
    </li>
  );
}

export default App;
