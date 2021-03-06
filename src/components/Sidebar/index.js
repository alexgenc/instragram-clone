import React, { useContext } from 'react';
import User from './User';
import Suggestions from './Suggestions';
import LoggedInUserContext from '../../context/loggedInUser';

const Sidebar = () => {
  
  const {
    user: { docId = '', fullName, username, userId, following } = {}
  } = useContext(LoggedInUserContext)
  
  return (
    <div className="p-4">
      <User username={username} fullName={fullName} />
      <Suggestions userId={userId} following={following} loggedInUserDocId={docId} />
    </div>
  )
}

export default Sidebar;
