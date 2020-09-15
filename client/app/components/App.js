import React, { useState } from 'react';
import Profile from './Profile';
import NotFound from './NotFound';
import searchList from './utils/search.json';

const App = () => {
  const DEFAULT_PROFILE = searchList[0].id;

  const [profileId, setProfileId] = useState(DEFAULT_PROFILE);
  const [profileActive, setProfileActive] = useState(undefined);
  const [profile, setProfile] = useState(undefined);

  const handleChange = ({ target: { value } }) => {
    setProfileId(value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const res = await fetch(`/api/${profileId}`);

      if (res.ok && res.status === 200) {
        const json = await res.json();
        setProfile(json);
        setProfileActive(true);
      } else {
        setProfileActive(false);
      }
    } catch (err) {
      setProfileActive(false);
    }
  };

  return (
    <div className="app">

      <form onSubmit={handleSubmit}>
        <span>Find karate champion: </span>
        <select className="search-column" value={profileId} onChange={handleChange}>
          {
            searchList.map(({ id, name }) => (
              <option key={id} value={id}>{name}</option>
            ))
          }
        </select>
        <button type="submit" className="click"> GET PROFILE </button>
      </form>

      <div className={
        profileActive === undefined ? 'loading'
          : profileActive ? 'load-ok'
            : 'load-error'
        }
      />

      { profileActive && <Profile profile={profile} profileId={profileId} /> }
      { !profileActive && profileActive !== undefined && <NotFound /> }
    </div>
  );
};

export default App;
