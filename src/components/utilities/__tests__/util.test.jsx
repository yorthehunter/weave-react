import {
  classModifier,
  buttonTypeModifier,
  sizeModifier,
  positionModifier,
  alertStyleModifier,
  camelCaseToDash,
} from '../util';

const prefix = 'prefix';

test('classModifier()', () => {
  const testArray = ['one', 'two', 'three', 'four', 'five'];

  expect(classModifier(testArray, 'one', prefix, null)).toEqual('prefix--one');
  expect(classModifier(testArray, 'notInArray', prefix, null)).toEqual('');
  expect(classModifier(testArray, 'notInArray', prefix, 'defaultValue')).toEqual('prefix--defaultValue');
});

test('buttonTypeModifier()', () => {
  expect(buttonTypeModifier('primary', prefix, null)).toEqual('prefix--primary');
  expect(buttonTypeModifier(null, prefix, 'default')).toEqual('prefix--default');
});

test('sizeModifier()', () => {
  expect(sizeModifier('sm', prefix, null)).toEqual('prefix--sm');
  expect(sizeModifier('xxxxl', prefix, 'default')).toEqual('prefix--default');
});

test('positionModifier()', () => {
  expect(positionModifier('inline', prefix, null)).toEqual('prefix--inline');
  expect(positionModifier(null, prefix, 'default')).toEqual('prefix--default');
});

test('alertStyleModifier()', () => {
  expect(alertStyleModifier('error', prefix, null)).toEqual('prefix--error');
  expect(alertStyleModifier(null, prefix, 'default')).toEqual('prefix--default');
});


test('camelCaseToDash()', () => {
  expect(camelCaseToDash('camelCase')).toEqual('camel-case');
});
