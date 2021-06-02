import React from 'react'
import { View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import Lottie from 'lottie-react-native';
import { AntDesign } from '@expo/vector-icons';
import moment from 'moment'
import _find from 'lodash/find'
import _get from 'lodash/get'
import _map from 'lodash/map'
import Text from '../../components/atoms/Text'
import { colors, fontSize, margin } from '../../styles'

import Title from '../../components/molecules/Title'

import playLootie from '../../../assets/play.json'

import { useAlbum } from '../../context'
import { useSound } from '../../context/sound';
import CardPlay from '../../components/organisms/CardPlay';

const Home = () => {
  const { albums, handleFavorite } = useAlbum()
  const { handleSound } = useSound()

  return (
    <View style={{ backgroundColor: '#F5F5F5' }}>
      <FlatList
        key="list"
        data={albums}
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

export default Home