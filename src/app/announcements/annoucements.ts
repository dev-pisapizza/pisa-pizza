export interface Announcement {
  description: string;
  showFromDate: string;
  showUntilDate: string;
  closeable?: boolean; // Weather or not the annoucement should be closeable by the user.
}

export const announcements: Announcement[] = [
  {
    description: 'Die Pizzeria ist vom 24.12.2023 - 01.01.2024 geschlossen.',
    showFromDate: '24.12.2023',
    showUntilDate: '01.02.2024',
    closeable: true,
  },
];
