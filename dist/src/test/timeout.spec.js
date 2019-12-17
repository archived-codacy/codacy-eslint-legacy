"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const parseTimeoutSeconds_1 = require("../parseTimeoutSeconds");
describe("parseTimeoutSeconds", () => {
    it("should parse timeout with seconds", () => {
        assert_1.equal(parseTimeoutSeconds_1.parseTimeoutSeconds(" 60    seconds"), 60);
        assert_1.equal(parseTimeoutSeconds_1.parseTimeoutSeconds(" 1 second "), 1);
    });
    it("should parse timeout with minutes", () => {
        assert_1.equal(parseTimeoutSeconds_1.parseTimeoutSeconds("1 minute"), 60);
        assert_1.equal(parseTimeoutSeconds_1.parseTimeoutSeconds(" 2 minutes"), 120);
    });
    it("should parse timeout with hours", () => {
        assert_1.equal(parseTimeoutSeconds_1.parseTimeoutSeconds("1 hour"), 60 * 60);
        assert_1.equal(parseTimeoutSeconds_1.parseTimeoutSeconds("1 hours"), 60 * 60);
    });
    it("should parse timeout with dot", () => {
        assert_1.equal(parseTimeoutSeconds_1.parseTimeoutSeconds("1.hour"), 60 * 60);
        assert_1.equal(parseTimeoutSeconds_1.parseTimeoutSeconds("1 . second"), 1);
    });
    it("should return defaultTimeout when timeout is not correct", () => {
        assert_1.equal(parseTimeoutSeconds_1.parseTimeoutSeconds("blabla"), parseTimeoutSeconds_1.defaultTimeout);
        assert_1.equal(parseTimeoutSeconds_1.parseTimeoutSeconds("blabla blabla"), parseTimeoutSeconds_1.defaultTimeout);
        assert_1.equal(parseTimeoutSeconds_1.parseTimeoutSeconds("10 blabla"), parseTimeoutSeconds_1.defaultTimeout);
    });
});
//# sourceMappingURL=timeout.spec.js.map