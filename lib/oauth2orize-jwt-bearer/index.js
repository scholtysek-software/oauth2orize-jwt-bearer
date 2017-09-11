/**
 * Module dependencies.
 */
var Exchange = require('./exchange');
var AuthorizationError = require('./errors/authorizationerror');
var UserNotFoundError = require('./errors/usernotfounderror');
var LinkingError = require('./errors/linkingerror');
var AssertionFlowNotSupportedError = require('./errors/assertionflownotsupportederror');

/**
 * Framework version.
 */
require('pkginfo')(module, 'version');

/**
 * Expose constructors.
 */
exports.Exchange = Exchange;
exports.AuthorizationError = AuthorizationError;
exports.UserNotFoundError = UserNotFoundError;
exports.LinkingError = LinkingError;
exports.AssertionFlowNotSupportedError = AssertionFlowNotSupportedError;