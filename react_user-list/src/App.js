import React, { useEffect, useState } from 'react';
import './index.scss';
import { Users } from './components/Users';
import {Success } from './components/Success';

function App() {

  const [users, setUsers] = useState([]);
  const [invites, setInvites] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [success, setSuccess] = useState(false);

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

  const onClickInvite = (id) => {
    if(invites.includes(id)) {
      setInvites(prev => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  }

  const onClickSendInvites = () => {
    setSuccess(true);
  }

  return (
    <div className='App'>
      {success ? (
        <Success count={invites.length} />
      ) : (
        <Users 
          onChangeSearchValue={onChangeSearchValue}
          searchValue={searchValue}
          items={users} 
          isLoading={isLoading}
          invites={invites}
          onClickInvite={onClickInvite}
          onClickSendInvites={onClickSendInvites}
        />
      )}                  
    </div>
  );
}

export default App;