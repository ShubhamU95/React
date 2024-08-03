import React, { useState, useContext } from 'react';
import "./style.css";
import { ThemeProvider, ThemeContext } from './ThemeContext';
import CounterApp from "./CounterApp";
import Hello from './Hello';
import Counter from './Counter';
import LoginMessage from './LoginMessage';
import NameList from './NameList';
import ProfileForm from './ProfileForm';


export default function App() {
  const [greeting, setGreeting] = useState('Hello');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const names = ['Alice', 'Bob', 'Charlie'];
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <ThemeProvider>
   <div className={`App ${theme}`}>
        <button onClick={toggleTheme}>
          Toggle Theme
        </button>
     
     <input
        type="text"
        value={greeting}
        onChange={(e) => setGreeting(e.target.value)}
      />
      <Hello greeting={greeting} name="Alice" />
      <Hello greeting={greeting} name="Bob" />
      <Counter />
      <LoginMessage isLoggedIn={isLoggedIn} name="Alice" />
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
     
      <NameList names={names} />
      <ProfileForm />
     
     
    </div>
    </ThemeProvider>
  );
}

function WrappedApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default WrappedApp;
