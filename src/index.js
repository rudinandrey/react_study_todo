import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
  const items = ['Learn React', 'Build Awesome App'];
  return (
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
    </ul>
  );
}

const AppHeader = () => {
  return <h1>My todo list</h1>;
}

const SearchPanel = () => {
  return <input placeholder="search" />;
}

const App = () => {

  const isLoggedIn = true;
  const loginBox = <span>Log in please</span>
  const welcomeBox = <span>Welcome back</span>

  return (
    <div>
      {!isLoggedIn ? loginBox : welcomeBox}
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
}

const el = (
  <div>
    <span>One</span>
    <span>Two</span>
  </div>
);


ReactDOM.render(<App />, document.getElementById('root'));