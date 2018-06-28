import React from 'react';
import { render } from 'enzyme';
import Collection from '../';
import CollectionItem from '../CollectionItem';

describe('Collection', () => {
  const props = { inset: 'sm' };
  const wrapper = (
    <Collection {...props}>
      <CollectionItem>Item</CollectionItem>
      <CollectionItem indicator="alert">Item 2</CollectionItem>
      <CollectionItem isSelected>Item 2</CollectionItem>
      <li>Some other child</li>
    </Collection>
  );

  it('renders correctly with default values', () => {
    const rendered = render(wrapper);
    expect(rendered).toMatchSnapshot();
  });
});
