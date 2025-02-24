// validation.js

function validate(state, schema) {
  let valid = true;
  let errors = {};

  for (const field in schema) {
    const rules = schema[field];
    const value = state[field];

    errors[field] = [];

    if (rules.required && !value) {
      errors[field].push(`${field} is required`);
      valid = false;
    }
    if (rules.pattern && !rules.pattern.test(value)) {
      errors[field].push(`${field} is invalid`);
      valid = false;
    }
    if (rules.minLength && value.length < rules.minLength) {
      errors[field].push(`${field} must be at least ${rules.minLength} characters`);
      valid = false;
    }
    if (rules.maxLength && value.length > rules.maxLength) {
      errors[field].push(`${field} must be no more than ${rules.maxLength} characters`);
      valid = false;
    }

    if (errors[field].length === 0) {
      delete errors[field];
    }
  }

  return { valid, errors };
}

export { validate };