import PropTypes from 'prop-types'
import React from 'react'

import * as S from './styles'

export const TabsItem = ({ children, ...rest }) => <S.Item {...rest}>{children}</S.Item>

TabsItem.propTypes = {
  children: PropTypes.node.isRequired
}
