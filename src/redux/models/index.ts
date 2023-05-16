import { Models } from '@rematch/core';
import { Auth } from './Auth';
import { Plan } from './Plan';
import { User } from './User';

export interface RootModel extends Models<RootModel> {
  Auth: typeof Auth;
  Plan: typeof Plan;
  User: typeof User;
}

export const models: RootModel = { Auth, Plan, User };
