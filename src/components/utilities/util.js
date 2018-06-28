import options from './constants';

const classModifier = (opts, selection, prefix, defaultValue) => {
  if (opts.includes(selection)) {
    return `${prefix}--${selection}`;
  } else {
    return defaultValue ? `${prefix}--${defaultValue}` : '';
  }
};

const buttonTypeModifier = (type, prefix, defaultValue) => (
  classModifier(options.buttonTypes, type, prefix, defaultValue)
);

const typeModifier = (type, prefix, defaultValue) => (
  classModifier(options.types, type, prefix, defaultValue)
);

const sizeModifier = (size, prefix, defaultValue) => (
  classModifier(options.sizes, size, prefix, defaultValue)
);

const positionModifier = (position, prefix, defaultValue) => (
  classModifier(options.positions, position, prefix, defaultValue)
);

const alertStyleModifier = (alertStyle, prefix, defaultValue) => (
  classModifier(options.alerts, alertStyle, prefix, defaultValue)
);

const camelCaseToDash = (myStr) => myStr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

export {
  typeModifier,
  buttonTypeModifier,
  classModifier,
  sizeModifier,
  positionModifier,
  alertStyleModifier,
  camelCaseToDash,
};
