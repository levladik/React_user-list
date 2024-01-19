import React, { useEffect, useState } from 'react';
import './index.scss';
import { Users } from './components/Users';

function App() {

  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');

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

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className='App'>
      <Users 
        onChangeSearchValue={onChangeSearchValue}
        searchValue={searchValue}
        items={users} 
        isLoading={isLoading}/>        
    </div>
  );
}

export default App;