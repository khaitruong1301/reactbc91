import React, { useEffect } from 'react'
import {useLocation} from 'react-router-dom'
import  useRedux  from '../pages/Hooks/useRedux';
import { getProfileActionApiAsync } from '../redux/reducers/UserLoginReducer';
const Profile = () => {
  const {dispatch,rootState} = useRedux()
  const {userProfile} = rootState.userLoginReducer;
  useEffect(() => {

    //Gọi get api profile qua action thunk
    const actionThunk = getProfileActionApiAsync();
    dispatch(actionThunk);

  }, [dispatch]);

  return (
    <div>
        <h3>Profile</h3>
        {userProfile && (
            <div>
                <p>Name: {userProfile.name}</p>
                <p>Email: {userProfile.email}</p>
                {/* Add more fields as needed */}
            </div>
        )}
    </div>
  )
}

export default Profile