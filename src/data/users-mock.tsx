import { Role } from '../types/user.type';

export const USERS = [
  {
    id: 0,
    username: 'pablo',
    name: 'Pablo Castellanos',
    active: true,
    role: Role.teacher,
  },
  {
    id: 1,
    username: 'jose',
    name: 'Jose Fernándex',
    active: true,
    role: Role.teacher,
  },
  {
    id: 2,
    username: 'javier',
    name: 'Javier López',
    active: false,
    role: Role.student,
  },
];
