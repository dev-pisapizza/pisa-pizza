export interface Announcement {
  description: string;
  showFromDate: string;
  showUntilDate: string;
  closeable?: boolean; // Weather or not the annoucement should be closeable by the user.
}

export const announcements: Announcement[] = [
  {
    description: 'Die neue Website ist da!',
    showFromDate: '24.12.2023',
    showUntilDate: '01.03.2024',
    closeable: true,
  },
];
