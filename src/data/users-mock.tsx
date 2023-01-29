import { Role } from '../types/user.type';

export const USERS = [
  {
    username: 'pablo',
    name: 'Pablo Castellanos',
    active: true,
    role: Role.teacher,
  },
  {
    username: 'jose',
    name: 'Jose Fernándex',
    active: true,
    role: Role.teacher,
  },
  {
    username: 'javier',
    name: 'Javier López',
    active: false,
    role: Role.student,
  },
];
