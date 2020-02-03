"use strict";
var TestA5;
(function (TestA5) {
    async function communicate(_url) {
        let response = await fetch(_url);
        console.log("Response", response);
    }
})(TestA5 || (TestA5 = {}));
//# sourceMappingURL=Test.js.map