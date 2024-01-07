export const makeApiHeaders = (): any => {
  return {
    'Content-Type': 'application/json',
    apikey: process.env.NEXT_PUBLIC_API_KEY as string,
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  }
}
