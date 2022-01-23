describe('Ticketbox', () => {
  beforeEach(() => {
    cy.visit('https://ticket-box.s3.eu-central-1.amazonaws.com/index.html')
  })

  it('successfully orders a ticket', { tags: ['@happy-path', '@main'] }, () => {
    cy.get('#first-name').type('Jorge')
    cy.get('#last-name').type('Coimbra')
    cy.get('#email').type('jorge-coimbra@example.com')

    cy.contains('button', 'Confirm Tickets')
      .as('submitBtn')
      .should('be.disabled')

    cy.get('#agree').check()

    cy.get('@submitBtn')
      .should('be.enabled')
      .click()

    cy.contains('.success p', 'Ticket(s) successfully ordered.')
      .should('be.visible')
  })

  it('adds an "invalid" class in the email field when missing the "@" sign', { tags: '@unhappy-path' }, () => {
    cy.get('#email')
      .type('user#example.com')
      .should('have.class', 'invalid')
  })

  it('customizes the Purchase Agreement based on what\'s typed', { tags: '@happy-path' }, () => {
    cy.get('#first-name').type('Maria')
    cy.get('#last-name')
      .as('lastName')
      .type('Souza')

    cy.contains(
      '.agreement p',
      'I, Maria Souza, wish to buy 1 General Admission ticket.'
    ).should('be.visible')

    cy.get('@lastName').clear()

    cy.contains(
      '.agreement p',
      'I, Maria, wish to buy 1 General Admission ticket.'
    ).should('be.visible')

    cy.get('#ticket-quantity').select('2')

    cy.contains(
      '.agreement p',
      'I, Maria, wish to buy 2 General Admission tickets.'
    ).should('be.visible')

    cy.get('#vip').check()

    cy.contains(
      '.agreement p',
      'I, Maria, wish to buy 2 VIP tickets.'
    ).should('be.visible')

    cy.contains('button', 'Reset').click()

    cy.contains(
      '.agreement p',
      'I, , wish to buy 1 General Admission ticket.'
    )
  })
})
