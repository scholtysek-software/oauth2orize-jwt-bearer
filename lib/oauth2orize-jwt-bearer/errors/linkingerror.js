/**
 * `Linking` error.
 *
 * @api public
 */
function LinkingError(params) {
  
  Error.call(this);
  Error.captureStackTrace(this, arguments.callee);
  this.name = 'LinkingError';
  this.message = 'Linking error';
  this.code = 'linking_error';
  this.uri = null;
  this.status = 401;
  Object.assign(this, params);
}

/**
 * Inherit from `Error`.
 */
LinkingError.prototype.__proto__ = Error.prototype;


/**
 * Expose `LinkingError`.
 */
module.exports = LinkingError;
