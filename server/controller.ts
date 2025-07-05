import { PrismaClient } from '../app/generated/prisma/client';

// this file contains the controller functions that interact with the database
// it uses Prisma Client to execute raw SQL queries Instead of using Prisma's ORM methods

const prisma = new PrismaClient()

export const get_all_university = async () => {
    return await prisma.$queryRaw`
    SELECT * FROM universities`
}

export const get_university_ranking_by_id = async (id: string) => {
    return await prisma.$queryRaw`
    SELECT * FROM univ_rankings
    WHERE universityId = ${id}
    ORDER BY year`
}