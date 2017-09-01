/**
 * Module dependencies.
 */
var Exchange = require('./exchange');
var AuthorizationError = require('./errors/authorizationerror');

/**
 * Framework version.
 */
require('pkginfo')(module, 'version');

/**
 * Expose constructors.
 */
exports.Exchange = Exchange;
exports.AuthorizationError = AuthorizationError;
