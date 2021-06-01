import AsyncStorage from '@react-native-async-storage/async-storage';
import _map from 'lodash/map'
import _find from 'lodash/find'
import _size from 'lodash/size'
import _filter from 'lodash/filter'

export const normalizeAlbumsEndFavorites = (albums, favoritesStorage) => {
  return _map(albums, (album) => {
    const isFavorite = _find(favoritesStorage, (favorite) => album.id === favorite.id)
    if (isFavorite) {
      album.favorite = true
      return album
    }
    album.favorite = false
    return album
  })

}

export const setFavoritesStorage = async (dataJson) => {
  try {
    const jsonValue = JSON.stringify(dataJson)
    await AsyncStorage.setItem('favorites', jsonValue)
  } catch (error) {
    console.error(error)
  }
}


export const getFavoriteStorage = async () => {
  try {
    const favoritesStorage = await AsyncStorage.getItem('favorites')
    if (_size(favoritesStorage)) {
      return JSON.parse(favoritesStorage)
    }
    return []
  } catch (error) {
    console.log(error)
  }
}


export const treatAlbumsData = (data) => {
  return _map(data, (album) => {
    return {
      play: false,
      favorite: false,
      ...album
    }
  })
}
