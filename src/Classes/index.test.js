import * as Classes from './index'

describe('Classes', () => {
  it('Classes', () => {
    expect(Classes.Alert !== undefined).toBe(true)
    expect(Classes.Close !== undefined).toBe(true)
    expect(Classes.Transitions !== undefined).toBe(true)
    expect(Classes.Badge !== undefined).toBe(true)
    expect(Classes.Buttons !== undefined).toBe(true)
    expect(Classes.Images !== undefined).toBe(true)
    expect(Classes.Code !== undefined).toBe(true)
    expect(Classes.checkExported).toBe(true)
  })
})
