import { equal } from "assert"
import { parseTimeoutSeconds, defaultTimeout } from "../parseTimeoutSeconds"

describe("parseTimeoutSeconds", () => {
  it("should parse timeout with seconds", () => {
    equal(parseTimeoutSeconds(" 60    seconds"), 60)
    equal(parseTimeoutSeconds(" 1 second "), 1)
  })
  it("should parse timeout with minutes", () => {
    equal(parseTimeoutSeconds("1 minute"), 60)
    equal(parseTimeoutSeconds(" 2 minutes"), 120)
  })
  it("should parse timeout with dot", () => {
    equal(parseTimeoutSeconds("1.minutes"), 60)
    equal(parseTimeoutSeconds("1 . second"), 1)
  })
  it("should return defaultTimeout when timeout is not correct", () => {
    equal(parseTimeoutSeconds("blabla"), defaultTimeout)
    equal(parseTimeoutSeconds("blabla blabla"), defaultTimeout)
    equal(parseTimeoutSeconds("10 blabla"), defaultTimeout)
  })
})
