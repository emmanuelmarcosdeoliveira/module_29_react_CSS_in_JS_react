import styled from 'styled-components'

import { Props } from '.'

export const Title = styled.h3<Props>`
  color: ${(props) => props.theme.primaryColor};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: 700;
  margin-bottom: 1rem;
`
