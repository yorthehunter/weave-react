import React from 'react';
import { oneOfType, array, arrayOf, oneOf, string } from 'prop-types';
import shortid from 'shortid';
import classnames from 'classnames';
import CustomTag from '../CustomTag';

import 'weave-ui/src/components/table/index.scss';

const componentPrefix = 'weave-table';

const createTDs = (tdData, isHeading) => {
  const Tag = isHeading ? 'th' : 'td';

  return (
    Array.isArray(tdData) ?
      tdData.map((td) => (
        <Tag
          key={shortid.generate()}
          dangerouslySetInnerHTML={{ __html: td }}
        />
      ))
      :
      <Tag dangerouslySetInnerHTML={{ __html: tdData }} />
  );
};

const createTRs = (trData) => (
  trData.map((tr) => (
    <tr key={shortid.generate()}>
      {createTDs(tr)}
    </tr>
  ))
);

const VerticalTable = ({ headings, data }) => (
  <React.Fragment>
    <thead>
      <tr>
        {createTDs(headings, true)}
      </tr>
    </thead>
    <tbody>
      {createTRs(data)}
    </tbody>
  </React.Fragment>
);

const HorizontalTable = ({ headings, data }) => (
  <tbody>
    {
      headings.map((tr, index) => (
        <tr key={shortid.generate()}>
          <th
            style={{ textAlign: 'right' }}
            scope="row"
          >
            {headings[index]}
          </th>
          {createTDs(data[index])}
        </tr>
      ))
    }
  </tbody>
);

export const Table = (props) => {
  const {
    type,
    orientation,
    size,
  } = props;

  const tableType = (modifiers) => {
    let arr = modifiers.map((modifier) => `${componentPrefix}--${modifier}`);
    return classnames(arr);
  };

  const componentClasses = [
    componentPrefix,
    type && tableType(type),
  ];

  return (
    <CustomTag
      {...props}
      tag="table"
      componentClasses={componentClasses}
    >
      {
        orientation === 'horizontal' ?
          <HorizontalTable {...props} />
        :
          <VerticalTable {...props} />
      }
    </CustomTag>
  );
};

Table.defaultProps = {
  orientation: 'vertical',
  type: null,
  size: null,
};
Table.propTypes = {
  orientation: oneOf(['vertical', 'horizontal']),
  type: oneOfType([string, array]),
  size: string,
};
const commonDefaultProps = {
  headings: null,
};
const commonPropTypes = {
  headings: arrayOf(string),
  data: array.isRequired,
};
VerticalTable.defaultProps = commonDefaultProps;
VerticalTable.propTypes = commonPropTypes;
HorizontalTable.defaultProps = commonDefaultProps;
HorizontalTable.propTypes = commonPropTypes;

export default Table;
