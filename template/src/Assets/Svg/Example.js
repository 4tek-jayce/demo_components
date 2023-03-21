import * as React from 'react'
import { Path, Svg } from 'react-native-4tek-component-kit'

const ExampleSvg = ({ size = 20, color = '#063855' }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 48 1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path d="M0 0h48v1H0z" fill={color} fillRule="evenodd" />
  </Svg>
)

export default ExampleSvg
