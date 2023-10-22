'use client'

import Link from "next/link"

export default function NotFound() {
  return (
    <>
      <section className='grid h-[50dvh] place-content-center text-center gap-10'>
      <h2 className='text-7xl -mb-5 font-bold'>Oops</h2>
      <h1 className='text-4xl font-medium'>{`This page doesn't exist`}</h1>
      <Link href="/" className='wave rounded-md py-1.5 px-3 w-fit mx-auto transition-opacity duration-200 hover:opacity-90 pressable'>
        Home Page
      </Link>
      </section>
    </>
  )
}