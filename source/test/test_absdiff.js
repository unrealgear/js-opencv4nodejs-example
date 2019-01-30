const cv = require("opencv4nodejs");

describe('Checking absdiff matching', function () {
    it('Default example', async function () {
        const actual = await cv.imreadAsync('./images/windows_actual.png');
        const expected = await cv.imreadAsync('./images/clean.png');

        let matched = actual.absdiff(expected);

        cv.imwrite('./result-absdiff-windows.png', matched)
    })
});
