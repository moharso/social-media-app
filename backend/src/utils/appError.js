class AppError extends Error {
  constructor(message, statusCode) {
    // buil in error accepts only message
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";

    // pvz: creates a post without required fields
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
