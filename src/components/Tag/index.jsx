import React from 'react';
import { string, bool, node } from 'prop-types';
// import '../../weave/components/tag';
import Icon from '../Icon';
import CustomTag from '../CustomTag';

import 'weave-ui/src/components/tag/index.scss';

const componentPrefix = 'weave-tag';

/**
 */

export default class Tag extends React.Component {
  constructor(props) {
    super();

    this.state = {
      weaveTagVisible: props.visible && true,
    };

    this.removeTag = this.removeTag.bind(this);
  }

  removeTag(e) {
    e.preventDefault();
    this.setState({ weaveTagVisible: false });
  }

  render() {
    const {
      content,
      children,
      dismissable,
    } = this.props;

    const componentClasses = [
      componentPrefix,
    ];

    if (this.state.weaveTagVisible) {
      return (
        <CustomTag
          {...this.props}
          componentClasses={componentClasses}
        >
          <p className={`${componentPrefix}__message`}>
            {content || children}
          </p>
          {
            dismissable &&
            <button
              className={`${componentPrefix}__close`}
              onClick={this.removeTag}
            >
              <Icon name="close" color="var(--font-color)" width={12} height={12} />
            </button>
          }
        </CustomTag>
      );
    }
    return null;
  }
}

const defaultProps = {
  tag: 'div',
  content: null,
  visible: true,
  dismissable: true,
  children: null,
};

const propTypes = {
  tag: string,
  /** Tag content (if props.children isn't specified) */
  content: string,
  visible: bool,
  dismissable: bool,
  /** Tag content (if props.content isn't specified) */
  children: node,
};

Tag.defaultProps = defaultProps;
Tag.propTypes = propTypes;
export { Tag };
