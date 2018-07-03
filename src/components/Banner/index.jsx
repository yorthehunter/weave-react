import React from 'react';
import { oneOf, string, bool, node } from 'prop-types';
import 'weave-ui/src/components/banner/index.scss';
import { sizeModifier, alertStyleModifier } from '../utilities/util';
import Icon from '../Icon';
import CustomTag from '../CustomTag';

const componentPrefix = 'weave-banner';

/**
 * A banner is a notification that is usually dismissable and often appears at
 * the top of the page, just below the nav (e.g. a flash message in Rails).
 */

export default class Banner extends React.Component {
  constructor(props) {
    super();

    this.state = {
      weaveBannerVisible: props.visible && true,
    };

    this.removeBanner = this.removeBanner.bind(this);
  }

  removeBanner(e) {
    e.preventDefault();
    this.setState({ weaveBannerVisible: false });
  }

  render() {
    const {
      content,
      children,
      type,
      size,
      responsive,
      dismissable,
      flat,
      html,
    } = this.props;

    const componentClasses = [
      componentPrefix,
      sizeModifier(size, componentPrefix),
      alertStyleModifier(type, componentPrefix),
      responsive && `${componentPrefix}--responsive`,
      flat && `${componentPrefix}--flat`,
    ];

    if (this.state.weaveBannerVisible) {
      return (
        <CustomTag
          {...this.props}
          componentClasses={componentClasses}
        >
          {
            html ?
              <p
                className={`${componentPrefix}__message`}
                dangerouslySetInnerHTML={{ __html: html }}
              />
              :
              <p className={`${componentPrefix}__message`}>
                {content || children}
              </p>
          }
          {
            dismissable &&
            <button
              className={`${componentPrefix}__close`}
              onClick={this.removeBanner}
            >
              <Icon name="close" color="var(--font-color)" />
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
  type: null,
  size: null,
  content: null,
  visible: false,
  responsive: false,
  dismissable: true,
  flat: false,
  html: null,
  children: null,
};

const propTypes = {
  tag: string,
  type: oneOf([
    'error',
    'success',
    'warning',
    'info',
    null,
  ]),
  size: oneOf([
    'sm',
    'md',
    'lg',
    null,
  ]),
  /** Banner content (if props.children isn't specified) */
  content: string,
  visible: bool,
  responsive: bool,
  dismissable: bool,
  flat: bool,
  /** Banner can accept html, useful for outside sources of content */
  html: string,
  /** Banner content (if props.content isn't specified) */
  children: node,
};

Banner.defaultProps = defaultProps;
Banner.propTypes = propTypes;
export { Banner };
