import { useBeatList } from './useBeatList'

export async function BeatList() {
  const beats = await useBeatList()

  return (
    <main>
      <h1>Beats</h1>
      <div>
        {beats.map((beat) => (
          <div key={beat.id}>
            <h2>{beat.title}</h2>
          </div>
        ))}
      </div>
    </main>
  )
}
