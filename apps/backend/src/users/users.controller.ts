import { Controller, Get } from '@nestjs/common';
import {
  AllowAnonymous,
  OptionalAuth,
  Session,
} from '@thallesp/nestjs-better-auth';
import type { UserSession } from '@thallesp/nestjs-better-auth';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private userService: UsersService
  ) { }

  @Get('public')
  @AllowAnonymous() // Allow anonymous access
  getPublic() {
    return { message: 'Public route' };
  }

  @Get('optional')
  @OptionalAuth() // Authentication is optional
  getOptional(@Session() session: UserSession) {
    return { authenticated: session ?? 'N/A' };
  }

  @Get('me')
  me(@Session() session: UserSession) {
    return this.userService.findOneByEmail(session.user.email)
  }
}
