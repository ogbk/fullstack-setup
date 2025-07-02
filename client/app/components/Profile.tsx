import React, { useState, useEffect } from 'react';
import Profiles = require('../../../types/profiles.ts');

const Profile = ({ profile, profileId }:{profile: Profiles, profileId: string}) => {
  const [picture, setPicture] = useState<string>();

  useEffect(
    () => {
      const fetchData = async () => {
        const resPic = await fetch(`/api/img/${profileId}`);
        const picBlob = await resPic.blob();
        const pic = await URL.createObjectURL(picBlob);
        setPicture(pic);
      };
      fetchData();
    },
    [profile],
  );

  const {
    name, title, belts, 'favourite food': fav_food,
  } = profile;

  return (
    <div className="profile-page">
      <div className="image-container">
        <img src={picture} alt="Profile" />
      </div>

      <div className="profile-details">
        <div className="field-key">name</div>
        <div className="field-value">{name}</div>
        <div className="field-key">title</div>
        <div className="field-value">{title}</div>
        <div className="field-key">favourite food</div>
        <div className="field-value">{fav_food}</div>
        <div className="field-key">belts</div>
        <ul>
          {
            belts.map((belt, idx) => (
              <li key={`${idx}-${belt}`} className="field-value-list">{belt}</li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Profile;
