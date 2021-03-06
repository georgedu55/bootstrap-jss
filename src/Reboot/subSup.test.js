import { subSup } from './subSup'

describe('Reboot', () => {
  it('subSup', () => {
    expect(subSup).toEqual({
      'sub,sup': {
        position: 'relative',
        fontSize: '75%',
        lineHeight: 0,
        verticalAlign: 'baseline'
      },
      sub: {
        bottom: '-0.25em'
      },
      sup: {
        top: '-0.5em'
      }
    })
  })
})
