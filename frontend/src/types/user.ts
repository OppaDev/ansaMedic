export interface User {
    id: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    role: 'customer' | 'admin';
    createdAt: Date;
    updatedAt: Date;
  }
  
  export type CreateUserInput = Omit<User, 'id' | 'role' | 'createdAt' | 'updatedAt'> & {
    password: string;
  };
  
  export type UpdateUserInput = Partial<Omit<CreateUserInput, 'password'>>;
  
  export interface LoginCredentials {
    email: string;
    password: string;
  }