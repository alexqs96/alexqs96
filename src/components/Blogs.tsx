'use client'

import { allPosts, Post } from 'contentlayer/generated'
import Link from 'next/link'
import Image from 'next/image'
import { CompareDesc, FormatDate } from '@/utils/time'

function PostCard(post: Post) {
  return (
    <li className="overflow-hidden transition-[shadow, background] shadow-sm hover:shadow-xl duration-300 rounded-xl bg-white dark:bg-neutral-900 hover:dark:bg-neutral-800/60">
      <Link href={post.url} className="block">
        <div className="h-40 w-full overflow-hidden">
        <Image width={512} height={512} className="object-cover w-full h-full" src={post.cover} alt={post.title+" image"} priority unoptimized/>
        </div>							
        <div className="flex flex-col p-4">
          <span className="text-2xl font-bold truncate">{post.title}</span>
          <span className="opacity-80 truncate">{post.description}</span>
          <time dateTime={post.date} className="block text-xs text-opacity-60">
            {FormatDate(post.date)}
          </time>
        </div>
      </Link>
    </li>
  )
}

export default function BlogPage() {
  const posts = allPosts.sort((a, b) => CompareDesc(new Date(a.date), new Date(b.date)))

  return (
    <section className='mt-2'>
      <h1 className="text-4xl font-bold">{"Latest Post's"}</h1>
      <ul className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3">
        {
          posts?
          posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))
          :
          <span>No hay posts</span>
        }
      </ul>
    </section>
  )
}