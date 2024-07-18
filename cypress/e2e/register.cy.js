import RegisterPage from '../pages/register.page'
import HomePage from '../pages/home.page'

describe('Cadastro', () => {
  it('Cadastro de ponto de doação com sucesso', () => { 
    HomePage.goToHome()
    RegisterPage.accessRegisterPage()
    RegisterPage.fillForm('Praça 08', 'test@example.com', '07144000', '2000', 'Rua dos bobos')
    RegisterPage.submitForm()
    RegisterPage.verifyRegisterDonation('Você fez a diferença!')
  })

  it('Não deve realizar cadastro com email invalido', () => {
    HomePage.goToHome()
    RegisterPage.accessRegisterPage()
    RegisterPage.fillForm('Praça 08', 'testexample.com', '07144000', '2000', 'Rua dos bobos')
    RegisterPage.submitForm()
    RegisterPage.verifyError('Informe um email válido')
  })

  it('Não deve realizar cadastro com cep inválido', () => {
    HomePage.goToHome()
    RegisterPage.accessRegisterPage()
    RegisterPage.fillForm('Praça 08', 'test@example.com', '0000', '2000', 'Rua dos bobos')
    RegisterPage.verifyError('Informe um CEP válido')
  })

  it('Não deve realizar cadastro com campos obrigatórios em branco', () => {
    HomePage.goToHome()
    RegisterPage.accessRegisterPage()
    RegisterPage.submitForm()

    const messages = [
      'Informe o seu nome completo',
      'Informe o seu melhor email',
      'Informe o seu CEP',
      'Informe um número maior que zero'
    ]

    for (const output : messages) {
      RegisterPage.verifyError(output)
    }
  })
})