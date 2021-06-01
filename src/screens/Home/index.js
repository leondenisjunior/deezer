import React from 'react'
import { View, Image, FlatList, TouchableOpacity } from 'react-native'
import Lottie from 'lottie-react-native';
import { AntDesign } from '@expo/vector-icons';
import moment from 'moment'
import _find from 'lodash/find'
import _get from 'lodash/get'
import _map from 'lodash/map'
import Text from '../../components/atoms/Text'
import { colors, fontSize, margin } from '../../styles'

import playLootie from '../../../assets/play.json'

import { useAlbum } from '../../context'
import { useSound } from '../../context/sound';

const Home = () => {
  const { albums, handleFavorite } = useAlbum()
  const { handleSound } = useSound()

  return (
    <View style={{ backgroundColor: '#F5F5F5' }}>
      <FlatList
        key="list"
        data={albums}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{ margin: margin.medium }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: colors.neutral, borderRadius: 15, marginBottom: margin.medium }}>
            <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }}>
              <AlbumImage {...item} />
              <View style={{ marginLeft: margin.small }}>
                <Text style={{ fontSize: fontSize.medium, width: 200 }} type="SemiBold" numberOfLines={1}>
                  {item.title}
                </Text>
                <Text numberOfLines={1}>
                  {item.artist.name}
                </Text>
                <Text style={{ fontSize: fontSize.small, color: colors.inactive }} numberOfLines={1}>
                  {moment().startOf('day')
                    .seconds(item.duration)
                    .format('mm:ss')}
                </Text>
                <AntDesign
                  name={item.play ? 'pause' : 'playcircleo'}
                  size={24}
                  color={colors.primary}
                  onPress={() => handleSound(item)}
                />
              </View>
            </View>
            <AntDesign
              name={item.favorite ? 'star' : 'staro'}
              size={24}
              color={colors.primary}
              style={{ marginRight: 10 }}
              onPress={() => handleFavorite(item)}
            />
          </View>
        )}
      />
    </View>
  )
}

const AlbumImage = (item) => {
  const { play, artist: { picture_medium } } = item
  return play ? (
    <Lottie
      style={{ width: 70, height: 70 }}
      resizeMode="contain"
      autoSize
      source={playLootie}
      autoPlay
      loop
    />
  ) : (
    <Image
      resizeMode="cover"
      style={{ height: 70, width: 70, borderRadius: 50 }}
      source={{ uri: picture_medium }} />
  )
}

export default Home