import { makeRemoteLoadBeatList } from '@/core/main/factories/usecases/remote-load-beat-list-factory'

export async function BeatList() {
  const beats = await makeRemoteLoadBeatList({ cache: 'force-cache' }).loadAll()

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
