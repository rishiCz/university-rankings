import { UniversityRankingRow, UniversityRow } from "@/types";
import { get_all_university, get_university_ranking_by_id } from "./controller";
import { publicProcedure, router } from "./trpc";

// This is the main router for the application
// It defines the procedures that can be called from the client side
export const appRouter = router({

    getAllUniversities: publicProcedure.query(async () => {
        return await get_all_university() as UniversityRow[]
    }),

    getUniversityRanking: publicProcedure.input((val: unknown) => {
        // Validating the input to ensure it is an object with an 'id' property of type string
        if (typeof val === "object" && val !== null && "id" in val && typeof (val as any).id === "string") {
            return val as { id: string };
        }
        throw new Error("Invalid input");
    }).query(async ({ input }) => {
        return await get_university_ranking_by_id(input.id) as UniversityRankingRow[]
    }),
})

export type AppRouter = typeof appRouter