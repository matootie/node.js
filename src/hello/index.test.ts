import { hello } from "./index"

describe("When using the example module...", () => {
  describe("...expect the hello function to...", () => {
    it('...return "Hello, test!" when given "test".', () => {
      const result = hello("test")
      expect(result).toBe("Hello, test!")
    })
  })
})
