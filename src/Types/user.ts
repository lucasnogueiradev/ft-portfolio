export type UserProps = {
  id: string;
  avatar_url: string;
  login: string;
  followers: number;
  following: number;
  name: string;
  bio: string;
};
export type RepositoryProps = {
  length?: any;
  id?: string;
  name?: string;
  node_id?: string;
  description?: string;
  html_url?: string;
  language?: string;
  forks?: number;
  topics?: string[];
  updated_at?: string;
  stargazers_count?: number;
  includes?: any;
};
