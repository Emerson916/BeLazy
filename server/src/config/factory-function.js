function buildErrorObject(message) {
  return {
    error: true,
    message,
  };
}

module.exports = buildErrorObject;
