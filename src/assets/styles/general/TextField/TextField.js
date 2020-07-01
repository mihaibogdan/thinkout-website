import React from 'react';
import '@rmwc/textfield/styles';

import { StyledTextField } from './styles';

function TextField({ ...props }) {
  return <StyledTextField {...props} ripple={false} />;
}

export default TextField;
