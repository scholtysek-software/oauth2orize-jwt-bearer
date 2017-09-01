/**
 * `UserNotFound` error.
 *
 * @api public
 */
function UserNotFoundError(consentCode) {
  
  Error.call(this);
  Error.captureStackTrace(this, arguments.callee);
  this.name = 'UserNotFoundError';
  this.message = message || null;
  this.code = 'user_not_found';
  this.consentCode = consentCode;
  this.uri = uri;
  this.status = 401;
}

/**
 * Inherit from `Error`.
 */
UserNotFoundError.prototype.__proto__ = Error.prototype;


/**
 * Expose `AuthorizationError`.
 */
module.exports = UserNotFoundError;
