export function chunkArray(array, pieces) {
  return array.reduce((acc, curr, idx) => {
    const index = Math.floor(idx / pieces)
    acc[index] = (acc[index] || []).concat(curr)
    return acc
  }, [])
}
