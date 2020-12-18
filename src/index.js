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
  const searchPlaceholder = "Type here to search";
  return <input placeholder={searchPlaceholder} />;
}

const App = () => {

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList items={['Item1', 'Item2']} />
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