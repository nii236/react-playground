export default class Logger {
  static LogInfo(message) {
    if (process.env.NODE_ENV === 'development') {
      console.info(message);
    }
  }

  static LogMessageAndObject(message, object) {
    if (process.env.NODE_ENV === 'development') {
      console.info(message, object);
    }
  }

  static LogObject(object) {
    if (process.env.NODE_ENV === 'development') {
      console.info(object);
    }
  }
}
