import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
    constructor(
        private databaseService: DatabaseService
    ) { }

    async findOneByEmail(email: string): Promise<User | null> {
        const user = this.databaseService.user.findUnique({ where: { email } });
        return user
    }

    async findOneById(id: string): Promise<User | null> {
        return this.databaseService.user.findUnique({ where: { id } });
    }
}
