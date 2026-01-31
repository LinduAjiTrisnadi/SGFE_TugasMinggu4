import React from 'react';
import './assets/css/todolist.css';
import Profilecard from './components/profilecard';
import Todolist from './components/todolist';

const ProfileTodo = () => {
  return <>

  <section className="app-container">
    <Profilecard />
    <Todolist/>
    </section>
  
  </>;

};

export default ProfileTodo;
