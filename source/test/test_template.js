const cv = require("opencv4nodejs");

describe('Checking template matching', function () {
    it('Default example', function () {

        const findWaldo = async () => {
            // Load images
            const originalMat = await cv.imreadAsync('./images/findwaldo.jpg');
            const waldoMat = await cv.imreadAsync('./images/waldo.jpg');

            // Match template (the brightest locations indicate the highest match)
            const matched = originalMat.matchTemplate(waldoMat, 5);

            // Use minMaxLoc to locate the highest value (or lower, depending of the type of matching method)
            const minMax = matched.minMaxLoc();
            const { maxLoc: { x, y } } = minMax;

            // Draw bounding rectangle
            originalMat.drawRectangle(
                new cv.Rect(x, y, waldoMat.cols, waldoMat.rows),
                new cv.Vec(0, 255, 0),
                2,
                cv.LINE_8
            );

            // Open result in new window, commented as it is not necessary for demo
            /*
            cv.imshow('We\'ve found Waldo!', originalMat);
            cv.waitKey();
            */

            cv.imwrite('./result-template-default.png', originalMat);
        };

        // noinspection JSIgnoredPromiseFromCall
        findWaldo();
    });

    it('Check windows using template', async function () {
        const actual = await cv.imreadAsync('./images/windows_actual.png');
        const template = await cv.imreadAsync('./images/windows_expected.png');

        const matched = actual.matchTemplate(template, 5);

        cv.imwrite('./result-template-windows.png', matched);
    })
});
