/**
 * @package cross-fetch
 * @type {(function(*, *): Promise)|{Headers?: Headers, FetchError?: function(*, *, *): FetchError, Request?: Request, Response?: Response, readonly default?: function(*, *): Promise}}
 */
const fetch = require('node-fetch')
/**
 *
 * @type {string} api string
 */
const api = 'https://vultrex.dev/api';
/**
 * @function SDK
 * @constructor
 */
function SDK() {}

/**
 *
 * @returns {Promise<*>}
 */
SDK.prototype.honk = function () {
    return fetch(`${api}/honk`).then(x => x.text())
}
/**
 *
 * @returns {Promise<*>}
 */
SDK.prototype.slap = function () {
    return fetch(`${api}/slap`).then(x => x.text())
}
/**
 *
 * @returns {Promise<*>}
 */
SDK.prototype.bonk = function () {
    return fetch(`${api}/bonk`).then(x => x.text())
}
/**
 *
 * @returns {Promise<*>}
 */
SDK.prototype.cry = function () {
    return fetch(`${api}/cry`).then(x => x.text())
}
/**
 *
 * @returns {Promise<*>}
 */
SDK.prototype.hug = function () {
    return fetch(`${api}/hug`).then(x => x.text())
}
SDK.prototype.wave = function () {
    return fetch(`${api}/wave`).then(x => x.text())
}
module.exports = SDK;



