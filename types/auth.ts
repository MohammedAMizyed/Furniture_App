export interface LogIn {
  username: string
  password: string
  expiresInMins: number | string
}

export interface Register {
  firstName: string
  lastName: string
  age: number | string
}
