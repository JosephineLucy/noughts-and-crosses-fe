import { NUM_OF_SPACES } from '../../constants/gameboard'

export function createSpaceIds() {
  const result = []
  for (let i = 0; i < NUM_OF_SPACES; i++) {
    result.push(i)
  }
  return result
}
