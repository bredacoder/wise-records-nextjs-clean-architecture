import { BeatModel } from '../models/beat'

export interface LoadBeatList {
  loadAll: () => Promise<BeatModel[]>
}
