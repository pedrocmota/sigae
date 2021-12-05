export const constainsChar = (str: string, chars: string) => {
  var contains = false
  chars.split('').forEach((c) => {
    if (str.includes(c)) contains = true
  })
  return contains
}

export const getPreferredNames = (full: string) => {
  const array = full.split(' ')
  const first = array[0]
  const combinations: string[] = []
  array.forEach((surname, index) => {
    if (index > 0) {
      combinations.push(`${first} ${surname}`)
    }
  })
  return combinations
}