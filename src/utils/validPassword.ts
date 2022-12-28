import { passwordStrength } from 'check-password-strength'
const validPassword = (password: string) => {
  if (passwordStrength(password).value === 'Strong' || password.length >= 10) {
    return true
  }
  return false
}

export default validPassword
