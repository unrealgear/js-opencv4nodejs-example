const cv = require("opencv4nodejs");

describe('Checking subtraction matching', function () {
    it('Default example', async function () {
        const actual = await cv.imreadAsync('./images/windows_actual.png');
        const expected = await cv.imreadAsync('./images/windows_expected.png');

        let matched = actual.sub(expected);

        cv.imwrite('./result-subtraction-windows.png', matched)
    })
});
