import React, { useState } from 'react';
import Profile from './Profile.tsx';
import NotFound from './NotFound.tsx';
import Search = require('../../../types/search.ts');
import Profiles = require('../../../types/profiles.ts');
//import searchList: Search[] from '../../../types/search.ts';

const searchList: Search[] = require ('../utils/search.json');

const App = () => {
  const DEFAULT_PROFILE = searchList[0].id;

  const [profileId, setProfileId] = useState(DEFAULT_PROFILE);
  const [profileActive, setProfileActive] = useState<boolean>();
  const [profile, setProfile] = useState<Profiles>();

  const handleChange = ({ target: { value } }:React.ChangeEvent<HTMLSelectElement>) => {
    setProfileId(value);
  };

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
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
    } catch (err) {   //eslint-disable-line
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

      { profileActive && profile && <Profile profile={profile} profileId={profileId} /> }
      { !profileActive && profileActive !== undefined && <NotFound /> }
    </div>
  );
};

export default App;
