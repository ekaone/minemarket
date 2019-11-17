import React from 'react'

import Profile from './Profile'
import { VProfiles } from '../Variables/Profiles'

// import a from './images/avatar_a.png'
import a from '../../assets/images/avatar_a.png'
import b from '../../assets/images/avatar_b.png'
import c from '../../assets/images/avatar_c.png'
import d from '../../assets/images/avatar_d.png'
import e from '../../assets/images/avatar_e.png'
import f from '../../assets/images/avatar_f.png'

export const JohnDoe = () => {
  return (
    <Profile 
      label={VProfiles[1].name}
      picture={a}
      alt={VProfiles[1].name}
    />
  ) 
}

export const MarryDoe = () => {
  return (
    <Profile 
      label={VProfiles[0].name}
      picture={d}
      alt={VProfiles[0].name}
    />
  ) 
}

export const JohnnyWalker = () => {
  return (
    <Profile 
      label={VProfiles[2].name}
      picture={b}
      alt={VProfiles[2].name}
    />
  ) 
}

export const BlackLabel = () => {
  return (
    <Profile 
      label={VProfiles[3].name}
      picture={c}
      alt={VProfiles[3].name}
    />
  ) 
}

export const Jocker = () => {
  return (
    <Profile 
      label={VProfiles[4].name}
      picture={e}
      alt={VProfiles[4].name}
    />
  ) 
}

export const Batman = () => {
  return (
    <Profile 
      label={VProfiles[5].name}
      picture={f}
      alt={VProfiles[5].name}
    />
  ) 
}




