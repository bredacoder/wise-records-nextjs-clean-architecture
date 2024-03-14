import { BeatList } from '../components/BeatList'
import { ModeToggle } from '../components/ModeToggle'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <ModeToggle />
      <BeatList />
    </main>
  )
}
