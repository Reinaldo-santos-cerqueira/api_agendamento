import * as EmailValidator from 'email-validator'
const validEmail = (email: string) => {
  if (EmailValidator.validate(email)) {
    return true
  }
  return false
}

export default validEmail
