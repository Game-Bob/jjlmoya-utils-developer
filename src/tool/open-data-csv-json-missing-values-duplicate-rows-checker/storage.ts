import type { DataProfile } from './logic';

const STORAGE_KEY = 'jjlmoya-developer-open-data-csv-json-missing-values-duplicate-rows-checker';

interface StoredProfile {
  review: string;
  profile: DataProfile;
}

export const saveProfile = (profile: DataProfile, review: string): void => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ profile, review } satisfies StoredProfile));
  } catch {}
};

export const loadProfile = (): StoredProfile | null => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) as StoredProfile : null;
  } catch {
    return null;
  }
};

export const clearProfile = (): void => {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {}
};
