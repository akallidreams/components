const pascalize = (snakeWord: string) => {
  return snakeWord.split('-').map(word => word.replace(/^./, str => str.toUpperCase())).join('')
}

export const utils = {
  pascalize
}

// camelCase snake-case PascalCase