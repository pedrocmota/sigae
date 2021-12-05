export type user_types = 'STUDENT' | 'TEACHER' | 'ADMIN'
export type user_states = 'UNREGISTERED' | 'UNCONFIRMED' | 'DISABLED' | 'ACTIVE'
export type codes_types = 'REGISTRATION' | 'CHANGE_PASSWORD' | 'CHANGE_EMAIL'

export type themeNames = 'LIGHT' | 'DARK'

export type emails_types = 'recovery' | 'register' | 'changeEmail'

export interface IRecoveryProps {
  name: string,
  link: string
}

export interface IRegisterProps {
  name: string,
  code: string
}