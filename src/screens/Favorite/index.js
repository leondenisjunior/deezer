import React from 'react'
import { View, FlatList } from 'react-native'
import _find from 'lodash/find'
import _get from 'lodash/get'
import _map from 'lodash/map'

import CardPlay from '../../components/organisms/CardPlay';

import { useAlbum } from '../../context'
import { useSound } from '../../context/sound'

const Favorite = () => {
  const { handleSound } = useSound()
  const { favorites, handleFavorite } = useAlbum()

  return (
    <View style={{ backgroundColor: '#F5F5F5' }}>
      <FlatList
        key="list"
        data={favorites}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CardPlay
            data={item}
            handleSound={handleSound}
            handleFavorite={handleFavorite}
          />
        )}
      />
    </View>
  )
}

export default Favorite