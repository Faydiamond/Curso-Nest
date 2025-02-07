import { SetMetadata } from '@nestjs/common';
import { ValidRoles } from '../interfaces/index.interface';
export const META_ROLES = 'roles';

export const RoleProtected = (...args: string[]) => {
  return SetMetadata(META_ROLES, ValidRoles);
};
