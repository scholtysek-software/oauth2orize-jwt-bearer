/**
 * `AssertionFlowNotSupported` error.
 *
 * @api public
 */
function AssertionFlowNotSupportedError() {

  Error.call(this);
  Error.captureStackTrace(this, arguments.callee);
  this.name = 'AssertionFlowNotSupportedError';
  this.message = 'Assertion Flow not supported';
  this.code = 'assertion_flow_not_supported';
  this.uri = null;
  this.status = 501;
}

/**
 * Inherit from `Error`.
 */
AssertionFlowNotSupportedError.prototype.__proto__ = Error.prototype;


/**
 * Expose `AssertionFlowNotSupportedError`.
 */
module.exports = AssertionFlowNotSupportedError;
