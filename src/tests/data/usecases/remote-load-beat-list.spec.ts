import { faker } from '@faker-js/faker'
import { HttpClientSpy } from '../mocks/mock-http'
import { BeatModel } from '@/core/domain/models/beat'
import { RemoteLoadBeatList } from '@/core/data/usecases/remote-load-beat-list/remote-load-beat-list'
import { mockRemoteLoadBeatListModel } from '../mocks/mock-remote-load-beat-list'
import { HttpStatusCode } from '@/core/data/protocols/http/http-client'

interface SutTypes {
  sut: RemoteLoadBeatList
  httpClientSpy: HttpClientSpy<BeatModel[] | any>
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<BeatModel[] | any>()
  const sut = new RemoteLoadBeatList(url, httpClientSpy)
  return {
    sut,
    httpClientSpy,
  }
}

describe('RemoteLoadBeatList', () => {
  test('Should call HttpClient with correct URL and Method', () => {
    const url = faker.internet.url()
    const { sut, httpClientSpy } = makeSut(url)

    sut.loadAll()

    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('get')
  })

  test('Should return a list of Beats if HttpClient returns 200', async () => {
    const { sut, httpClientSpy } = makeSut()
    const httpResult = mockRemoteLoadBeatListModel()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    }

    const httpResponse = await sut.loadAll()

    expect(httpResponse).toEqual(httpResult)
  })

  test('Should return an empty list if HttpClient throws an error', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError,
    }

    const httpResponse = await sut.loadAll()

    expect(httpResponse).toEqual([])
  })
})
