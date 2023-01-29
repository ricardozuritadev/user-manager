export enum Role {
  teacher = 'teacher',
  student = 'student',
  other = 'other',
}

export type User = {
  username: string;
  name: string;
  active: boolean;
  role: Role;
};
