import {initTRPC} from '@trpc/server'

const t = initTRPC.create();
// Create a base router and procedure

export const router = t.router
export const publicProcedure = t.procedure