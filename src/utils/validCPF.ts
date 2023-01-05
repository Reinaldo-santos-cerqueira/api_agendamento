import { isValidCPF } from 'js-cpf-validation'

export const validCPF = (cpf: string) => {
  if (!isValidCPF(cpf)) return false
  return true
}
