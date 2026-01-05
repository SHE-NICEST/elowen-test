export interface StatItem {
  label: string;
  value: string;
  description?: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  type: "past" | "future" | "main";
  image?: string;
  description: string;
  link?: string;
}

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: string;
}
