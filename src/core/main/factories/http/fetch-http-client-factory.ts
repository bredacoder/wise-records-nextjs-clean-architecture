import { FetchHttpClient } from '@/core/infra/http/fetch-http-client'

export const makeFetchHttpClient = (): FetchHttpClient => new FetchHttpClient()
