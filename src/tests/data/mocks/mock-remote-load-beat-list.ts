import { BeatModel } from '@/core/domain/models/beat'
import { faker } from '@faker-js/faker'

export const mockRemoteLoadBeatModel = (): BeatModel => ({
  id: faker.number.int(),
  title: faker.music.songName(),
  audio: faker.internet.url(),
  image: faker.image.url(),
  author: faker.person.firstName(),
  bpm: faker.number.int({ min: 60, max: 200 }),
  price: faker.number.float({ min: 0, max: 100, precision: 0.01 }),
  createdAt: faker.date.past(),
  updatedAt: faker.date.past(),
})

export const mockRemoteLoadBeatListModel = (): BeatModel[] => [
  mockRemoteLoadBeatModel(),
  mockRemoteLoadBeatModel(),
  mockRemoteLoadBeatModel(),
]
