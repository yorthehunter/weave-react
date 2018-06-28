import React from 'react';
import { string, node } from 'prop-types';
import CustomTag from '../utilities/CustomTag';

const componentPrefix = 'weave-has-popover';

class Popover extends React.Component {
  constructor() {
    super();
    this.openPopover = this.openPopover.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentWillMount() {
    this.setState({ popoverVisible: false });
  }

  openPopover(e) {
    e.preventDefault();

    if (!this.state.popoverVisible) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState({
      popoverVisible: !this.state.popoverVisible,
    });
  }

  handleOutsideClick(e) {
    // Ignore clicks on the component itself.
    if (this.node.contains(e.target)) {
      return;
    }

    this.setState({
      popoverVisible: false,
    });

    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  renderChildren() {
    return React.Children.map(this.props.children, (child) => {
      if (!child) {
        // Returns nothing if no children passed
        return null;
      } else if (child.type.name === 'PopoverDisplay') {
        // Checks children for <Popover> component and passes visibility state
        return React.cloneElement(child, { popoverVisible: this.state.popoverVisible });
      } else if (child.type.name === 'PopoverActivator' || child.props['data-popover-activator']) {
        // Checks children of a type <PopoverActivator> or that have a data attribute of
        // 'data-popover-activator' and adds an onClick method that will open the popover
        return React.cloneElement(child, { onClick: this.openPopover });
      }
      // Will return any other children as normal
      return child;
    });
  }

  render() {
    const componentClasses = `${componentPrefix}`;

    return (
      <CustomTag
        {...this.props}
        componentRef={_node => { this.node = _node; }}
        componentClasses={componentClasses}
      >
        {this.renderChildren()}
      </CustomTag>
    );
  }
}

const defaultProps = {
  tag: 'span',
};

const propTypes = {
  tag: string,
  children: node.isRequired,
};

Popover.defaultProps = defaultProps;
Popover.propTypes = propTypes;
export default Popover;
