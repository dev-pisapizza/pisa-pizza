export interface Announcement {
  description: string;
  showFromDate: string;
  showUntilDate: string;
  closeable?: boolean; // Weather or not the announcement should be closeable by the user.
}

export const announcements: Announcement[] = [
  {
    description: 'Die neue Webseite ist da!',
    showFromDate: '24.12.2023',
    showUntilDate: '01.01.2024',
    closeable: true,
  },
];
