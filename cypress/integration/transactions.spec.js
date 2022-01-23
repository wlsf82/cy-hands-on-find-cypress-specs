describe('Transactions', () => {
  context('Happy path', { tags: '@happy-path' }, () => {
    it('completes a transaction through flow A', () => {
      // some code that tests completing a transaction through flow A
    })

    it('completes a transaction through flow B', () => {
      // some code that tests completing a transaction through flow B
    })
  })

  context('Unhappy paths', { tags: '@unhappy-path' }, () => {
    it('warns on missing mandatory fields', () => {
      // some code that tests warning on missing fields
    })

    it('errors on invalid data', () => {
      // some code that tests error on invalid data
    })
  })
})
