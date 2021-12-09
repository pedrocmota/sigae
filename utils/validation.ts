import {constainsChar} from './stringUtils'

export const validateEmail = (email: string) => {
  if (email.length <= 0) return false
  var regex = /\S+@\S+\.\S+/
  return regex.test(email)
}

export const passwordStrength = (password: string) => {
  const validSize = password.length >= 6 && password.length <= 500
  const validUppercase = constainsChar(password, 'QWERTYUIOPASDFGHJKLÇZXCVBNM')
  const validNumbers = constainsChar(password, '1234567890')
  const validSpecials = constainsChar(password, '\'^£$%&*()}{@#~?><>,|=_+¬-]/!')
  const valid = validSize && validUppercase && validNumbers && validSpecials
  const num = [validSize, validUppercase, validNumbers, validSpecials].filter(Boolean).length
  const retorno = {
    valid: valid,
    validSize: validSize,
    validUppercase: validUppercase,
    validNumbers: validNumbers,
    validSpecials: validSpecials,
    strength: num
  }
  return retorno
}