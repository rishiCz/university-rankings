'use client'

// this component displays a line chart of the university's ranking over the years
// it uses the react-apexcharts library to render the chart

import dynamic from 'next/dynamic'
import React from 'react'
import { trpc } from '../../_trpc/client'
import { Spinner } from 'flowbite-react'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: true })
type Props = {
    universityId: string
}

const RankingChart = ({ universityId }: Props) => {

    // Fetch the university ranking data using TRPC
    // The query is enabled only if universityId is available
    const { isLoading, data, isError } = trpc.getUniversityRanking.useQuery(
        { id: universityId },
        { enabled: !!universityId }
    )

    if (isLoading) {
        return <div className='w-full shadow-lg border-2 not-dark:bg-white dark:border-gray-700 border-gray-100 flex justify-center items-center'>
            <Spinner className="mx-auto" />
        </div>
    }

    if (isError) {
        return <div className="text-red-500 text-center">Error loading data</div>
    }

    const options = {
        chart: {
            id: 'ranking-chart',
            toolbar: { show: false },
        },
        xaxis: {
            categories: data!.map(d => d.year),
            labels: {
                style: {
                    colors: '#848484',
                },
            },
        },
        yaxis: {
            reversed: true, //reversed the y-axis to show the highest rank at the top
            labels: {
                style: {
                    colors: '#848484',
                },
            },
        },
        markers: {
            size: 5,
            strokeColors: 'transparent'
        },
        stroke: {
            curve: 'smooth' as 'smooth',
        },
        tooltip: {
            y: {
                formatter: (val: number) => `Rank #${val}`,
            },
        },
        grid: {
            show: false,
        },
    }

    const series = [
        {
            name: 'Université de Montréal',
            data: data!.map(d => d.rank),
        },
    ]

    return (
        <div className='rounded px-2 shadow-lg border-2 not-dark:bg-white dark:border-gray-700 border-gray-100 text-black' >
            <Chart options={options} series={series} type="line" height={320} />
        </div>
    )
}

export default RankingChart
