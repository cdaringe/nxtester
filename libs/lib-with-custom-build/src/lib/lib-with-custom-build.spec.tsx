import React from 'react';
import { render } from '@testing-library/react';

import { zap } from './lib-with-custom-build';

describe(' LibWithCustomBuild', () => {
  it('should render successfully', () => {
    expect(zap).toBeTruthy();
  });
});
