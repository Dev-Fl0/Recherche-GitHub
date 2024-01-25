export interface Owner {
  login: string;
  avatar_url: string;
}

export interface Item {
  id: number;
  name: string;
  owner: Owner;
  html_url: string;
  description: string;
}

export interface Data {
  total_count: number;
  items: Item[];
}
