import { NUM_OF_BOARD_SPACES } from '../../constants/constants'

export function createSpaceIds(): number[] {
  const result = []
  for (let i = 0; i < NUM_OF_BOARD_SPACES; i++) {
    result.push(i + 1)
  }
  return result
}
