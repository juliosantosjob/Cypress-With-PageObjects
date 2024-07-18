class RegisterPage {

    accessRegisterPage() {
        // Access the register page
        cy.get('strong').click()
        cy.get('h1').should('have.text', 'Cadastro de ponto de doação')
    }

    fillForm(nome, email, cep, number, addressDetails) {
        // fill the form
        cy.get('input[name="name"]').type(nome)
        cy.get('input[name="email"]').type(email)
        cy.get('input[name="cep"]').type(cep)

        cy.get('input[type="button"]').click()
        cy.get('input[type="number"]').type(number)

        cy.get('input[name="addressDetails"]').type(addressDetails)
        cy.get('img[alt="Cachorros"]').click()
    }

    submit() {
        cy.get('button[type="submit"]').click()
    }

    verifyRegisterDonation(message) {
        // Verify if the donation point was created
        cy.contains('h1', message)
            .should('be.visible')
    }

    verifyError(error) {
        // Veriy if error message was shown
        cy.contains('.alert-error', error).should('be.visible')
    }
}

export default new RegisterPage()