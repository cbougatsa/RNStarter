export const UI_OPTIONS = [
  {
    value: 'LIGHT',
    label: 'Light',
  },
  {
    value: 'DARK',
    label: 'Dark',
  },
  {
    value: 'AUTOMATIC',
    label: 'Automatic',
  },
];

export const LANGUAGES_OPTIONS = {
  en_UK: 'English (UK)',
  de_CH: 'Deutsch (CH)',
  fr_CH: 'Français (CH)',
  it_CH: 'Italiano (CH)',
};

export const DEFAULT_LANGUAGE = 'de_CH';

export const SYSTEM_MESSAGES_TYPES = [
  'TASK_CREATED',
  'TASK_UPDATED',
  'TASK_COMPLETED',
];

// 2 hours in ms
export const PHONEBOOK_TIME_TO_REFRESH_OFFLINE_DATA = 2 * 60 * 60 * 1000;
export const RESOURCES_TIME_TO_REFRESH_OFFLINE_DATA = 2 * 60 * 60 * 1000;
