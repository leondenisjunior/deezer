import React, { createContext, useState, useEffect, useContext } from 'react';
import _map from 'lodash/map'
import _find from 'lodash/find'
import _size from 'lodash/size'
import _filter from 'lodash/filter'
import { albumApi } from '../services';

import { getFavoriteStorage, normalizeAlbumsEndFavorites, setFavoritesStorage, treatAlbumsData } from './utils';

const AlbumContext = createContext();

export const AlbumProvider = ({ children }) => {
  const [albums, setAlbums] = useState({});
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchAlbums()
    fetchFavorites()
  }, [])

  const fetchFavorites = async () => {
    try {
      const favoritesStorage = await getFavoriteStorage()
      setFavorites(favoritesStorage)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchAlbums = async () => {
    try {
      const { data } = await albumApi.getAlbums()

      const normalizeAlbum = treatAlbumsData(data?.data)
      const favoritesStorage = await getFavoriteStorage()

      if (_size(favoritesStorage)) {
        const albumsNormalize = normalizeAlbumsEndFavorites(normalizeAlbum, favoritesStorage)
        setAlbums(albumsNormalize)
        return
      }
      setAlbums(normalizeAlbum)
    } catch (error) {
      console.error(error)
    }
  }

  const handleFavorite = async (album) => {
    try {
      const favoritesStorage = await getFavoriteStorage()

      if (_size(favoritesStorage) && album.favorite) {
        const newFavorites = _filter(favoritesStorage, (favorite) => favorite.id != album.id)
        await setFavoritesStorage(newFavorites)
        const albumsNormalize = normalizeAlbumsEndFavorites(albums, newFavorites)
        setAlbums(albumsNormalize)
        return
      }

      if (_size(favoritesStorage)) {
        album.favorite = true
        favoritesStorage.push(album)
        await setFavoritesStorage(favoritesStorage)
        const albumsNormalize = normalizeAlbumsEndFavorites(albums, favoritesStorage)
        setAlbums(albumsNormalize)
        return
      }

      album.favorite = true
      await setFavoritesStorage([album])
      const albumsNormalize = normalizeAlbumsEndFavorites(albums, [album])
      setAlbums(albumsNormalize)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AlbumContext.Provider
      value={{
        albums,
        handleFavorite,
        favorites,
        setAlbums
      }}
    >
      {children}
    </AlbumContext.Provider>
  );
};

export const useAlbum = () => useContext(AlbumContext);

export default AlbumContext;
