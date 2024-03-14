import { BeatModel } from '@/core/domain/models/beat'
import { LoadBeatList } from '@/core/domain/usecases/load-beat-list'
import { HttpClient } from '../../protocols/http/http-client'

export class RemoteLoadBeatList implements LoadBeatList {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<BeatModel[]>,
    private readonly options?: any,
  ) {}

  async loadAll(): Promise<BeatModel[]> {
    try {
      const httpResponse = await this.httpClient.request({
        url: this.url,
        options: this.options,
        method: 'get',
      })

      return httpResponse.body || []
    } catch (error) {
      return []
    }
  }
}
