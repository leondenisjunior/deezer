import instance from './instance'

export const albumApi = {
  getAlbums: async () => instance.get('/chart/0/tracks')
}