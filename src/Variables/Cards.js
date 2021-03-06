import { white, black } from './Colors'
import { rgba } from '../Functions/rgba'
import { borderWidth, borderRadius } from './Components'
import { gridGutterWidth } from './Grid'
import { size } from '../Functions/size'

export const cardSpacerY = '.75rem'
export const cardSpacerX = '1.25rem'
export const cardBorderWidth = borderWidth
export const cardBorderRadius = borderRadius
export const cardBorderColor = rgba(black, 0.125)
export const cardInnerBorderRadius = `${size(cardBorderRadius).value - size(cardBorderWidth).value}${size(cardBorderRadius).unit}`

export const cardCapBg = rgba(black, 0.03)
export const cardBg = white

export const cardImgOverlayPadding = '1.25rem'

export const cardGroupMargin = `${size(gridGutterWidth).value / 2}${size(gridGutterWidth).unit}`

export const cardDeckMargin = cardGroupMargin

export const cardColumnsCount = '3'
export const cardColumnsGap = '1.25rem'
export const cardColumnsMargin = cardSpacerY
