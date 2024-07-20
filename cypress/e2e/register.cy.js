import RegisterPage from '../pages/register.page'
import { generatePoint } from '../utils/pointDonation'

describe('Cadastro', () => {
  it('Cadastro de ponto de doação com sucesso', () => {
    let point = generatePoint()

    RegisterPage.openRegisterPage()
    RegisterPage.fillForm(point)
    RegisterPage.submit()
    RegisterPage.verifyRegisterDonation('Você fez a diferença!')
  })

  it('Não deve realizar cadastro com email invalido', () => {
    let point = generatePoint()
    point.email = 'example.com'

    RegisterPage.openRegisterPage()
    RegisterPage.fillForm(point)
    RegisterPage.submit()
    RegisterPage.verifyError('Informe um email válido')
  })

  it('Não deve realizar cadastro com cep inválido', () => {
    let point = generatePoint()
    point.zipCode = '0000'

    RegisterPage.openRegisterPage()
    RegisterPage.fillForm(point)
    RegisterPage.verifyError('Informe um CEP válido')
  })

  it('Não deve realizar cadastro com campos obrigatórios em branco', () => {
    RegisterPage.openRegisterPage()
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