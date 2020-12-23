import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const prefix =
  process.env.NODE_ENV === 'production'
    ? 'https://0407chan.github.io/hello-world'
    : ''

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push(`${prefix}/hello-world`)
  }, [])
  return (
    <div>
      <div>hello</div>
    </div>
  )
}
