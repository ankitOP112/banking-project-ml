const ngrok = require("ngrok");
const updater = require("./descriptorUpdater");

(async function () {
    try {
        const url = await ngrok.connect(1234);
        await updater(url);
    } catch (err) {
        console.error(err);
    }
})();
