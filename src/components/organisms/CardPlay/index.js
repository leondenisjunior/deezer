import React from 'react'
import moment from 'moment'
import { AntDesign } from '@expo/vector-icons';

import { colors } from '../../../styles'
import Text from '../../atoms/Text'
import playLootie from '../../../../assets/play.json'

import { Container, Subtitle, AnimationPlay, Wrapper, Image, WrapperText, Title } from "./style"

const CardPlay = ({ data, handleSound, handleFavorite }) => {
  return (
    <Container>
      <Wrapper>
        <ImageAlbum {...data} />
        <WrapperText>
          <Title type="SemiBold">
            {data.title}
          </Title>
          <Text numberOfLines={1}>
            {data.artist.name}
          </Text>
          <Subtitle>
            {moment().startOf('day')
              .seconds(data.duration)
              .format('mm:ss')}
          </Subtitle>
          <AntDesign
            name={data.play ? 'pause' : 'playcircleo'}
            size={24}
            color={colors.primary}
            onPress={() => handleSound(data)}
          />
        </WrapperText>
      </Wrapper>
      <AntDesign
        name={data.favorite ? 'star' : 'staro'}
        size={24}
        color={colors.primary}
        style={{ marginRight: 10 }}
        onPress={() => handleFavorite(data)}
      />
    </Container>
  )
}

const ImageAlbum = (item) => {
  const { play, artist: { picture_medium } } = item
  return play ? (
    <AnimationPlay
      resizeMode="contain"
      autoSize
      source={playLootie}
      autoPlay
      loop
    />
  ) : (
    <Image
      resizeMode="cover"
      source={{ uri: picture_medium }} />
  )
}

export default CardPlay