export interface Announcement {
  description: string;
  showFromDate: string;
  showUntilDate: string;
  closeable?: boolean; // Weather or not the announcement should be closeable by the user.
}

export const announcements: Announcement[] = [
  {
    description:
      'Unsere Pizzeria ist vom <strong>03.03 - 05.03.2024</strong> geschlossen. Wir sind ab dem <strong>6. März</strong> wieder für Sie da!',
    showFromDate: '24.12.2023',
    showUntilDate: '01.03.2024',
    closeable: false,
  },
];
