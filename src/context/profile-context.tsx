// context/profile-context.tsx
'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { Profile } from '@/types/profile';
import profileData from '@/content/data/profile.json';

type ProfileContextType = {
  profile: Profile;
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
  return (
    <ProfileContext.Provider value={{ profile: profileData }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
}
