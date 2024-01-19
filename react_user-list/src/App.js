import React, { useEffect, useState } from 'react';
import './index.scss';
import { Users } from './components/Users';

function App() {

  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(json => {
      setUsers(json.data);
      console.log(json.data);
      })
      .catch((err) => {
        console.warn(err);
        alert('Failed to retrieve data');
    }).finally(() => setLoading(false))
  }, [])

  return (
    <div className='App'>
      <Users items={users} isLoading={isLoading}/>
    </div>
  );
}

export default App;