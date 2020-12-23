import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.push(`/hello-world`)
  }, [])
  return (
    <div>
      <div>hello</div>
    </div>
  )
}
