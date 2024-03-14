import {
  HttpClient,
  HttpRequest,
  HttpResponse,
} from '@/core/data/protocols/http/http-client'
import { makeApiHeaders } from '../factories/http/api-headers-factory'

export class HttpClientDecorator implements HttpClient {
  constructor(private readonly httpClient: HttpClient) {}

  async request(data: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.httpClient.request({
      ...data,
      headers: { ...makeApiHeaders() },
    })
    return httpResponse
  }
}
