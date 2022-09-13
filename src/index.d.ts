import { PrismaClient } from "@prisma/client";

export function createContext(ctx: any): Promise<Context>;

export * from ".prisma/client/index.d.js";

export interface Context {
  prisma: PrismaClient;
}
