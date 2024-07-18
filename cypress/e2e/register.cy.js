import RegisterPage from '../pages/register.page'

describe('Cadastro', () => {  
  it('Cadastro de ponto de doação com sucesso', () => { 
    RegisterPage.goToRegisterPage()
    RegisterPage.fillForm('Praça 08', 'test@example.com', '07144000', '2000', 'Rua dos bobos')
    RegisterPage.submit()
    RegisterPage.verifyRegisterDonation('Você fez a diferença!')
  })

  it('Não deve realizar cadastro com email invalido', () => {
    RegisterPage.goToRegisterPage()
    RegisterPage.fillForm('Praça 08', 'testexample.com', '07144000', '2000', 'Rua dos bobos')
    RegisterPage.submit()
    RegisterPage.verifyError('Informe um email válido')
  })

  it('Não deve realizar cadastro com cep inválido', () => {
    RegisterPage.goToRegisterPage()
    RegisterPage.fillForm('Praça 08', 'test@example.com', '0000', '2000', 'Rua dos bobos')
    RegisterPage.verifyError('Informe um CEP válido')
  })

  it('Não deve realizar cadastro com campos obrigatórios em branco', () => {
    RegisterPage.goToRegisterPage()
    RegisterPage.submit()

    const messages = [
      'Informe o seu nome completo',
      'Informe o seu melhor email',
      'Informe o seu CEP',
      'Informe um número maior que zero'
    ]

    for (const output of messages) {
      RegisterPage.verifyError(output)
    }
  })
})