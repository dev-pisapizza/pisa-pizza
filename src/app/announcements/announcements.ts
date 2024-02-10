export interface Announcement {
  description: string;
  showFromDate: string;
  showUntilDate: string;
  closeable?: boolean; // Weather or not the announcement should be closeable by the user.
}

export const announcements: Announcement[] = [
  {
    description:
      'Unsere Pizzeria ist vom <strong>11.03 - 05.03.2024</strong> geschlossen. Wir sind ab dem <strong>6. März</strong> wieder für Sie da!',
    showFromDate: '24.12.2023', // ab wann es angezeigt werden soll
    showUntilDate: '11.01.2024', // ab wann es nicht mehr angezeigt werden soll (10.01.2024 -> wird ab 10.01 um 0 Uhr nicht mehr gezeigt)
    closeable: false,
  },
];
