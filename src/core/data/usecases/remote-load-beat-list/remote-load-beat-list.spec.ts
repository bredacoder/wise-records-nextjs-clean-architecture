import { faker } from '@faker-js/faker'
import { HttpClientSpy } from '../../mocks/mock-http'
import { RemoteLoadBeatList } from './remote-load-beat-list'
import { BeatModel } from '@/core/domain/models/beat'

interface SutTypes {
  sut: RemoteLoadBeatList
  httpClientSpy: HttpClientSpy<BeatModel[]>
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<BeatModel[]>()
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
})
