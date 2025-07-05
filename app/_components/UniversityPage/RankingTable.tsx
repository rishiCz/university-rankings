import React from 'react'

// This component displays a table of university ranking factors and their scores
// It takes a `tableData` prop which contains the scores for various factors
type Props = {
    tableData: {
        overall: number;
        academicReputation: number;
        employerReputation: number;
        facultyStudentRatio: number;
        sustainability: number;
    }
}
const toTitleCase = (camelCaseStr: string)=> {
  return camelCaseStr
    .replace(/([A-Z])/g, ' $1') 
    .replace(/^./, str => str.toUpperCase()); 
}
const RankingTable = ({ tableData }: Props) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Factors
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Score / 100
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(tableData).map(([factor, value],ind) => (
                        <tr key={ind} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {toTitleCase(factor)}
                            </th>
                            <td className="px-6 py-4">
                                {value}
                            </td>
                        </tr>


                    ))}
                    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                             
                        </th>
                        <td className="px-6 py-4">
                            
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default RankingTable