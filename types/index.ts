
export type UniversityRow = {
    id: string
    name: string
    description: string
    logo: string
    location: string
    overall: number 
    academicReputation: number 
    employerReputation: number 
    facultyStudentRatio: number 
    sustainability: number
}

export type UniversityRankingRow = {
    id: string
    university_id: string
    year: number
    rank: number
}