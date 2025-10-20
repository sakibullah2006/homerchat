// src/lib/auth.ts
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { PrismaClient } from '@prisma/client';
import { TRUSTEDORIGINS } from './trusted.origins';
import { openAPI } from 'better-auth/plugins';

const prisma = new PrismaClient();

export const auth = betterAuth({
  url: process.env.BETTER_AUTH_URL, // Used to build callback URLs & cookies
  secret: process.env.BETTER_AUTH_SECRET,
  // Where requests will be routed (keep default for now → /api/auth/*)
  // basePath: "/api/auth",

  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),

  emailAndPassword: { enabled: true },

  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // Cache duration in seconds
    },
  },

  plugins: [
    openAPI()
  ],

  trustedOrigins: [
    ...TRUSTEDORIGINS
  ],
});
