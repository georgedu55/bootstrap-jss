import { spacer } from './Spacing'
import { grays, black } from './Colors'
import { rgba } from '../Functions/rgba'
import { borderWidth } from './Components'

import {
  fontFamilySansSerif,
  fontFamilyMonospace,
  fontFamilyBase,
  fontSizeBase,
  fontSizeLg,
  fontSizeSm,
  fontWeightLight,
  fontWeightLighter,
  fontWeightBolder,
  fontWeightNormal,
  fontWeightBold,
  fontWeightBase,
  lineHeightBase,
  h1FontSize,
  h2FontSize,
  h3FontSize,
  h4FontSize,
  h5FontSize,
  h6FontSize,
  headingsMarginBottom,
  headingsFontFamily,
  headingsFontWeight,
  headingsLineHeight,
  headingsColor,
  display1Size,
  display2Size,
  display3Size,
  display4Size,
  display1Weight,
  display2Weight,
  display3Weight,
  display4Weight,
  displayLineHeight,
  leadFontSize,
  leadFontWeight,
  smallFontSize,
  textMuted,
  blockquoteSmallColor,
  blockquoteFontSize,
  hrBorderColor,
  hrBorderWidth,
  markPadding,
  dtFontWeight,
  kbdBoxShadow,
  nestedKbdFontWeight,
  listInlinePadding,
  markBg,
  hrMarginY
} from './Fonts'

describe('Fonts', () => {
  it('Font Family', () => {
    expect(fontFamilySansSerif).toEqual('-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"')
    expect(fontFamilyMonospace).toEqual('SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace')
    expect(fontFamilyBase).toEqual(fontFamilySansSerif)
  })

  it('Font Size', () => {
    expect(fontSizeBase).toEqual('1rem')
    expect(fontSizeLg).toEqual('1.25rem')
    expect(fontSizeSm).toEqual('0.875rem')
  })

  it('Font Weight', () => {
    expect(fontWeightLight).toEqual(300)
    expect(fontWeightLighter).toEqual('lighter')
    expect(fontWeightNormal).toEqual(400)
    expect(fontWeightBold).toEqual(700)
    expect(fontWeightBolder).toEqual('bolder')
    expect(fontWeightBase).toEqual(fontWeightNormal)
    expect(lineHeightBase).toEqual(1.5)
  })

  it('Font Headers', () => {
    expect(h1FontSize).toEqual('2.5rem')
    expect(h2FontSize).toEqual('2rem')
    expect(h3FontSize).toEqual('1.75rem')
    expect(h4FontSize).toEqual('1.5rem')
    expect(h5FontSize).toEqual('1.25rem')
    expect(h6FontSize).toEqual(fontSizeBase)

    expect(headingsMarginBottom).toEqual(fontSizeBase)
    expect(headingsFontFamily).toEqual('inherit')
    expect(headingsFontWeight).toEqual(500)
    expect(headingsLineHeight).toEqual(1.2)
    expect(headingsColor).toEqual('inherit')
  })

  it('Display', () => {
    expect(display1Size).toEqual('6rem')
    expect(display2Size).toEqual('5.5rem')
    expect(display3Size).toEqual('4.5rem')
    expect(display4Size).toEqual('3.5rem')

    expect(display1Weight).toEqual(300)
    expect(display2Weight).toEqual(300)
    expect(display3Weight).toEqual(300)
    expect(display4Weight).toEqual(300)
    expect(displayLineHeight).toEqual(headingsLineHeight)
  })

  it('Lead', () => {
    expect(leadFontSize).toEqual('1.25rem')
    expect(leadFontWeight).toEqual(300)
  })

  it('Small Font', () => {
    expect(smallFontSize).toEqual('80%')
  })

  it('Misc', () => {
    expect(textMuted).toEqual(grays._600)
    expect(blockquoteSmallColor).toEqual(grays._600)
    expect(blockquoteFontSize).toEqual('1.25rem')
    expect(hrBorderColor).toEqual(rgba(black, 0.1))
    expect(hrBorderWidth).toEqual(borderWidth)
    expect(markPadding).toEqual('.2em')
    expect(dtFontWeight).toEqual(fontWeightBold)

    expect(kbdBoxShadow).toEqual(`inset 0 -.1rem 0 ${rgba(black, 0.25)}`)
    expect(nestedKbdFontWeight).toEqual(fontWeightBold)
    expect(listInlinePadding).toEqual('.5rem')
    expect(markBg).toEqual('#fcf8e3')
    expect(hrMarginY).toEqual(spacer)
  })
})
