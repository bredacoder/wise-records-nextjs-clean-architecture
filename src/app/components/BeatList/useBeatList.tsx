import { makeRemoteLoadBeatList } from '@/core/main/factories/usecases/remote-load-beat-list-factory'

export async function useBeatList() {
  const beats = await makeRemoteLoadBeatList({ cache: 'force-cache' }).loadAll()

  return beats
}
