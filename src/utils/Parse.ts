export const parsePreferredName = (full: string) => {
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