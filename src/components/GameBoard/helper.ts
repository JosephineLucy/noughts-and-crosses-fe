export function createSpaceIds(numOfSpaces: number): number[] {
  const result = []
  for (let i = 0; i < numOfSpaces; i++) {
    result.push(i + 1)
  }
  return result
}
