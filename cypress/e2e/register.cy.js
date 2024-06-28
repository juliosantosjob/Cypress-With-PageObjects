import RegisterPage from '../pages/register.page'
import HomePage from '../pages/home.page'

describe('Cadastro', () => {
  const homePage = new HomePage()
  const registerPage = new RegisterPage()

  it('Cadastro de ponto de doação com sucesso', () => { 
    homePage.goToHome()
    registerPage.accessRegisterPage()
    registerPage.fillForm('Praça 08', 'test@example.com', '07144000', '2000', 'Rua dos bobos')
    registerPage.submitForm()
    registerPage.verifyRegisterDonation('Você fez a diferença!')
  })

  it('Não deve realizar cadastro com email invalido', () => {
    homePage.goToHome()
    registerPage.accessRegisterPage()
    registerPage.fillForm('Praça 08', 'testexample.com', '07144000', '2000', 'Rua dos bobos')
    registerPage.submitForm()
    registerPage.verifyError('Informe um email válido')
  })

  it('Não deve realizar cadastro com cep inválido', () => {
    homePage.goToHome()
    registerPage.accessRegisterPage()
    registerPage.fillForm('Praça 08', 'test@example.com', '0000', '2000', 'Rua dos bobos')
    registerPage.verifyError('Informe um CEP válido')
  })

  it.only('Não deve realizar cadastro com campos obrigatórios em branco', () => {
    homePage.goToHome()
    registerPage.accessRegisterPage()
    registerPage.submitForm()

    const messagesErro = [
      'Informe o seu nome completo',
      'Informe o seu melhor email',
      'Informe o seu CEP',
      'Informe um número maior que zero'
    ]

    for (let output = 0; output < messagesErro.length; output++) {
      registerPage.verifyError(messagesErro[output])
    }
  })
})