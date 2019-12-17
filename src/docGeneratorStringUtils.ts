export function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export function patternTitle(patternId: string): string {
  const parts = patternId.split("/").map(s =>
    capitalize(s)
      .split("-")
      .join(" ")
  )
  let res: string[]
  if (parts.length > 2) {
    const family = parts[0]
    const subfamilies = parts.slice(1, parts.length - 1).map(s => `[${s}]`)
    const name = parts[parts.length - 1]
    res = [family, subfamilies.concat(name).join(" ")]
  } else {
    res = parts
  }
  return res.join(": ")
}
