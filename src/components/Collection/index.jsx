import React from 'react';
import { string, oneOf, node, bool } from 'prop-types';
import CollectionItem from './CollectionItem';
import CustomTag from '../utilities/CustomTag';
import { sizeModifier } from '../utilities/util';

import 'weave-ui/src/components/collection/index.scss';

const componentPrefix = 'weave-collection';

/**
 * A collection is a versatile list of similar items that visually stands apart
 * from other elements on the page.
 */

const Collection = (props) => {
  const {
    inset,
    isHoverable,
    size,
    children,
  } = props;

  const componentClasses = [
    componentPrefix,
    isHoverable ? `${componentPrefix}--hoverable` : null,
    sizeModifier(size, componentPrefix),
  ];

  const renderChildren =
    React.Children.map(children, child => {
      if (child.type === CollectionItem) {
        // Checks children for <CollectionItem> component and passes inset prop
        return React.cloneElement(child, { inset });
      }
      // Will return any other children as normal
      return child;
    });

  return (
    <CustomTag componentClasses={componentClasses} {...props}>
      {renderChildren}
    </CustomTag>
  );
};

const defaultProps = {
  inset: undefined,
  tag: 'ul',
  isHoverable: false,
  size: null,
};

const propTypes = {
  inset: oneOf([undefined, 'sm', 'md', 'lg']),
  tag: string,
  isHoverable: bool,
  size: string,
  children: node.isRequired,
};

Collection.propTypes = propTypes;
Collection.defaultProps = defaultProps;

export default Collection;
