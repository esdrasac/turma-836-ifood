const { DateTime } = require('luxon')

exports.request = (path) => {
    const dt = DateTime.now()
    return console.info(`[REQUEST: ${path}] => ${dt.toISO()}`)
}