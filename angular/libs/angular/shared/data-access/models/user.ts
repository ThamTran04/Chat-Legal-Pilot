export interface User {
  email: string;
  password: string;
  prenom?: string;
  nom?: string;
  agent?: string;
  role?: string[];
}
