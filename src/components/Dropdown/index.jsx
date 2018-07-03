import React from 'react';
import { string, bool, node } from 'prop-types';
import 'weave-ui/src/components/dropdown/index.scss';
import CustomTag from '../utilities/CustomTag';

const componentPrefix = 'weave-has-dropdown';

export class Dropdown extends React.Component {
  constructor() {
    super();
    this.openDropdown = this.openDropdown.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentWillMount() {
    this.setState({ dropdownVisible: false });
  }

  openDropdown(e) {
    e.preventDefault();

    if (!this.state.dropdownVisible) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState({
      dropdownVisible: !this.state.dropdownVisible,
    });
  }

  handleOutsideClick(e) {
    // Ignore clicks on the component itself.
    if (this.node.contains(e.target)) {
      return;
    }

    this.setState({
      dropdownVisible: false,
    });

    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  renderChildren() {
    return React.Children.map(this.props.children, (child, index) => {
      if (child.type.displayName === 'DropdownMenu' || child.props['data-dropdown']) {
        // Checks children for <Popover> component and passes visibility state
        return React.cloneElement(
          child,
          {
            key: index,
            right: this.props.right,
            dropdownVisible: this.state.dropdownVisible,
          },
        );
      } else if (child.type.displayName === 'DropdownActivator' || child.props['data-dropdown-activator']) {
        // Checks children of a type <Activator> or that have a data attribute of
        // 'data-dropdown-activator' and adds an onClick method that will open the dropdown
        return React.cloneElement(child, { onClick: this.openDropdown });
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
        componentStyles={this.props.right ? { position: 'relative' } : {}}
      >
        {this.renderChildren()}
      </CustomTag>
    );
  }
}

const defaultProps = {
  tag: 'span',
  right: false,
  children: null,
};

const propTypes = {
  tag: string,
  right: bool,
  children: node,
};

Dropdown.defaultProps = defaultProps;
Dropdown.propTypes = propTypes;
export default Dropdown;
