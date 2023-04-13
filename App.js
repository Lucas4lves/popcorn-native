import { useState } from 'react';
import Login from './src/screens/Login';

export default function App() {
  const [isLogged, setIsLogged] = useState(false);

  if(!isLogged)
  {
    return (
      <Login />
    );
  }

}


