
export function checkDescription(descriptionsArr: FlavorText[]) {
  const description = descriptionsArr.find((desc) => desc.language.name === 'en')
  return description ? description.flavor_text : 'NO DATA'
}

export function checkHabitat(habitat: { name: string } | null) {
  return habitat ? habitat.name : 'unknown'
}

export function checkErrorType(error: unknown) {
  return error instanceof Error ? error : new Error(String(error))
}