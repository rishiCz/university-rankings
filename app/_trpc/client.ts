import { createTRPCReact } from "@trpc/react-query";
import { type AppRouter } from "@/server";

// creating common trpc client for the application
// This will be used to access the server-side procedures defined in the AppRouter
export const trpc = createTRPCReact<AppRouter>({})