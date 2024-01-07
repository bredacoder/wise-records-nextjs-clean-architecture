import {
  HttpClient,
  HttpRequest,
  HttpResponse,
} from '@/core/data/protocols/http/http-client'

export interface FetchRequestOptions {
  cache?: RequestCache
  next?: NextFetchRequestConfig
}

export class FetchHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    const response = await fetch(data.url, {
      method: data.method,
      body: data.body,
      headers: data.headers,
      ...data.options,
    })

    return {
      statusCode: response.status,
      body: response.json(),
    }
  }
}
