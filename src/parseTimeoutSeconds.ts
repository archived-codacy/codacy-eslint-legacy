export const defaultTimeout = 15 * 60

export function parseTimeoutSeconds(timeoutString?: string): number {
  if (!timeoutString) return defaultTimeout
  const l = timeoutString
    .replace(".", " ")
    .split(" ")
    .filter(i => i) // remove empty strings
  if (l.length !== 2) return defaultTimeout
  const number = parseInt(l[0])
  const timeUnit = l[1]
  if (isNaN(number)) return defaultTimeout
  switch (timeUnit) {
    case "second":
    case "seconds":
      return number
    case "minute":
    case "minutes":
      return number * 60
    default:
      return defaultTimeout
  }
}
