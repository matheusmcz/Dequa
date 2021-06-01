export interface Disability {
  id: string;
  name: string;
}

export interface User {
  id?: string;
  name: string;
  email: string;
  role: Usertype;
  birthDate: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  disability: Disability[];
}

export enum Usertype {
  free = "freeUser",
  premium = "premiumUser",
}

export interface Job {
  id: string;
  office: string;
  level: string;
  contract: string;
  isRemote: boolean;
  workload: string;
  salary: number;
  description: string;
  skills: string[];
  company: Company;
  category: Category;
}

export interface Company {
  id: string;
  logo: string;
  name: string;
  location: string;
  createdAt: Date;
  updatedAt: Date;
  description: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface Event {
  id: string;
  name: string;
  description: string;
  thumb: string;
  date: string;
  theme: EventTheme[];
}

export interface EventTheme {
  id: string;
  name: string;
}
