import styled from "styled-components/native"
import Lottie from 'lottie-react-native';

import Text from '../../atoms/Text'

import { colors, fontSize, margin } from "../../../styles"

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
  background-color: ${colors.neutral};
  border-radius: 15px;
  margin: 10px;
`

export const Wrapper = styled.View`
  margin: ${margin.medium}px;
  flex-direction: row;
  align-items: center;
`

export const AnimationPlay = styled(Lottie)`
  width: 70px;
  height: 70px;
`

export const Image = styled.Image`
  height: 70px; 
  width: 70px;
  border-radius: 50px;
`

export const WrapperText = styled.View`
  margin-left: ${margin.small}px;
`

export const Title = styled(Text)`
  font-size: ${fontSize.medium}px; 
  width: 200px;
`

export const Subtitle = styled(Text)`
  font-size: ${fontSize.small}px; 
  color: ${colors.inactive};
`