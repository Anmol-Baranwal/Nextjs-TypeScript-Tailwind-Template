import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex h-screen items-start justify-center pt-28">
      Hi! Thanks for using the Template -{' '}
      <Link
        href={'https://github.com/sponsors/Anmol-Baranwal'}
        className="w-40 font-bold hover:underline"
        target="_blank"
      >
        @Anmol
      </Link>
    </div>
  )
}
