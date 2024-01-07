import { HttpClient } from '@/core/data/protocols/http/http-client'
import { HttpClientDecorator } from '../../decorators/http-client-decorator'
import { makeFetchHttpClient } from '../http/fetch-http-client-factory'

export const makeHttpClientDecorator = (): HttpClient =>
  new HttpClientDecorator(makeFetchHttpClient())
