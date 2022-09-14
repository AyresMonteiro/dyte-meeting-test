export class EnvUtilsError extends Error {
  constructor(message) {
    super(message);

    Object.setPrototypeOf(this, EnvUtilsError.prototype);
  }
}

export class EnvUtils {
  static get(key) {
    if (typeof key !== "string") {
      throw new EnvUtilsError("key is not a string");
    }

    const value = process.env[key];

    if (!value) {
      throw new EnvUtilsError(`key "${key}" is not set`);
    }

    return value;
  }
}
