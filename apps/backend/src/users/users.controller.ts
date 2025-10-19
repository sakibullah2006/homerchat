import { Controller, Get, UseGuards } from '@nestjs/common';
import { AllowAnonymous, AuthGuard, OptionalAuth, Session } from '@thallesp/nestjs-better-auth';
import type { UserSession } from '@thallesp/nestjs-better-auth'

@Controller('users')
export class UsersController {

    @Get('public')
    @AllowAnonymous() // Allow anonymous access
    async getPublic() {
        return { message: 'Public route' };
    }

    @Get('optional')
    @OptionalAuth() // Authentication is optional
    async getOptional(@Session() session: UserSession) {
        return { authenticated: session ?? 'N/A' };
    }

}
