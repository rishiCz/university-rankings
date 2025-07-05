'use client'
import { Spinner } from "flowbite-react";
import { trpc } from "../../_trpc/client"
import { MdLocationPin } from "react-icons/md";
import RankingChart from "./RankingChart";
import Image from "next/image";
import RankingTable from "./RankingTable";

// This component displays the university page with its details and rankings
// It fetches the university data and rankings using TRPC and displays them in a structured layout

const UniversityPage = () => {
  // Fetch the university data using TRPC
  const { data, isLoading, isError } = trpc.getAllUniversities.useQuery()

  // If the data is still loading, show a spinner
  if (isLoading) {
    return <Spinner className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
  }

  // If there is an error, show an error message
  if (isError) {
    return <div className="text-red-500 text-center">Error loading data</div>
  }

  const university = data![0]
  const { id, name, location, logo, description, ...tableData } = university ?? {}

  return (
    <div className=" mx-auto max-w-[1200px] dark:bg-gray-900 bg-gray-100 shadow-lg min-h-[100svh]">

      <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-12 lg:py-24">
          <div className="flex gap-5 mb-8 mx-auto w-fit items-center">
            <Image src={logo} className=" rounded mb-2" alt="Logo" width={80} height={80} />
            <div>
              <h1 className=" text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">{name}</h1>
              <div className="flex text-xl items-center gap-2 text-white">
                <MdLocationPin size={22} />
                <p className="pt-1">{location} </p>
              </div>
            </div>
          </div>
          <p className={`mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 text-justify`}>{description}</p>
        </div>
      </section>

      <div className="p-4">
        <h1 className="mb-4 mt-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">World University Rankings</span> Over 5 Years</h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Explore {name}'s rankings over the past 5 years.</p>
        <div className=" grid md:grid-cols-2 gap-4 mt-4">
          <RankingChart universityId={id} />
          <RankingTable tableData={tableData} />
        </div>
      </div>


    </div>
  )
}

export default UniversityPage