export const inServer = () => {
  return typeof window === 'undefined'
}

export const constainsChar = (str: string, chars: string) => {
  var contains = false
  chars.split('').forEach((c) => {
    if (str.includes(c)) contains = true
  })
  return contains
}