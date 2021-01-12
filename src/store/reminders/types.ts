export type RemindersState = {
  id: string;
  date: Date;
  description?: string;
  city?: string;
  color: string;
  weather?: {
    icon: string;
    description: string;
  } | null;
}[];
