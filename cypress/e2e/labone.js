/// <reference types= "cypress" />
let emailtest=["noor.non1993@gmail.com"]
let password=["ab1993Cd"]
describe('test login', () => {
    it('signup ', () => {
        cy.visit("https://automationteststore.com/index.php?rt=account/login")
        cy.get('#accountFrm > fieldset > .btn').click()
        cy.get('#AccountFrm_firstname').type("noor")
        cy.get('#AccountFrm_lastname').type("yousef")
        cy.get('#AccountFrm_email').type(emailtest[0])
        cy.get('#AccountFrm_telephone').type('0786265277')
        cy.get('#AccountFrm_fax').type('0')
        cy.get('#AccountFrm_company').type("SITA")
        cy.get('#AccountFrm_address_1').type('Amman')
        cy.get('#AccountFrm_country_id').select('Jordan')
        cy.get('#AccountFrm_zone_id').select("Az Zarqa'")
        cy.get('#AccountFrm_city').type("amman")
        cy.get('#AccountFrm_postcode').type('000')
        cy.get('#AccountFrm_agree').check()

        cy.get('#AccountFrm_loginname').type('nooryousef12')
        cy.get('#AccountFrm_password').type(password[0])
        cy.get('#AccountFrm_confirm').type(password[0])
        cy.get('[for="AccountFrm_newsletter1"]').click()
        cy.get('.col-md-2 > .btn').click()
        cy.get('.mb40 > .btn').click
    });
    it('sign in', () => {
        cy.visit('https://automationteststore.com/index.php?rt=account/login')
        cy.get('#loginFrm_loginname').type('nooryousef12')
        cy.get('#loginFrm_password').type(password[0])
        cy.get('#loginFrm > fieldset > .btn').click()
    });
});