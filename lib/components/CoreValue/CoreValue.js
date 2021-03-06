import React from 'react';
import PropTypes from 'prop-types';

const CoreValue = ({ coreValue, plusOneCoreValue, studentId, count, color }) => {
  return (
    <div
      className={ count ? `no-opacity ${color}` : `coreValue-card ${color}`}
      onClick={() => plusOneCoreValue(coreValue, studentId)}>
        <article className='card dot'>
          <h3 className='core-value dot-core-value'>{ coreValue }</h3>
            <h4 className='core-value-counter dot-counter'>
                { count }
            </h4>
        </article>
    </div>
  );
};

CoreValue.propTypes = {
  coreValue: PropTypes.string,
  plusOneCoreValue: PropTypes.func,
  studentId: PropTypes.number,
  count: PropTypes.number,
  color: PropTypes.string
};

export default CoreValue;
