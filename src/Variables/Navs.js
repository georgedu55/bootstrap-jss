import { grays } from './Colors'
import { borderWidth, borderRadius, componentActiveColor, componentActiveBg } from './Components'
import { bodyBg } from './Body'
import { spacer } from './Spacing'
import { size } from '../Functions/size'

export const navLinkPaddingY = '.5rem'
export const navLinkPaddingX = '1rem'
export const navLinkDisabledColor = grays._600

export const navTabsBorderColor = grays._300
export const navTabsBorderWidth = borderWidth
export const navTabsBorderRadius = borderRadius
export const navTabsLinkHoverBorderColor = `${grays._200} ${grays._200} ${navTabsBorderColor}`
export const navTabsLinkActiveColor = grays._700
export const navTabsLinkActiveBg = bodyBg
export const navTabsLinkActiveBorderColor = `${grays._300} ${grays._300} ${navTabsLinkActiveBg}`

export const navPillsBorderRadius = borderRadius
export const navPillsLinkActiveColor = componentActiveColor
export const navPillsLinkActiveBg = componentActiveBg

export const navDividerColor = grays._200
export const navDividerMarginY = `${size(spacer).value / 2}${size(spacer).unit}`
