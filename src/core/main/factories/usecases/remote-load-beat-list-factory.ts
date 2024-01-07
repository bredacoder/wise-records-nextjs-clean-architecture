import { RemoteLoadBeatList } from '@/core/data/usecases/remote-load-beat-list/remote-load-beat-list'
import { LoadBeatList } from '@/core/domain/usecases/load-beat-list'
import { makeApiUrl } from '../http/api-url-factory'
import { makeHttpClientDecorator } from '../decorators/http-client-decorator-factory'
import { FetchRequestOptions } from '@/core/infra/http/fetch-http-client'

export const makeRemoteLoadBeatList = (
  options: FetchRequestOptions,
): LoadBeatList =>
  new RemoteLoadBeatList(
    makeApiUrl('/beats'),
    makeHttpClientDecorator(),
    options,
  )
