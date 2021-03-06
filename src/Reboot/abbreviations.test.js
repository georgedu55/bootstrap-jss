import { abbreviations } from './abbreviations'

describe('Reboot', () => {
  it('abbreviations', () => {
    expect(abbreviations).toEqual({
      'abbr[title],abbr[data-original-title]': {
        textDecoration: 'underline dotted',
        fallbacks: {
          textDecoration: 'underline'
        },
        cursor: 'help',
        borderBottom: 0
      }
    })
  })
})
