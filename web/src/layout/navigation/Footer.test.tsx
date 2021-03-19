import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Footer from './Footer';

describe('Footer', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('creates snapshot', () => {
    const result = render(
      <Router>
        <Footer />
      </Router>
    );
    expect(result.asFragment()).toMatchSnapshot();
  });

  describe('Render', () => {
    it('renders component', () => {
      const { getByText, getAllByRole, getByRole } = render(
        <Router>
          <Footer />
        </Router>
      );

      expect(getByRole('contentinfo')).toBeInTheDocument();

      const links = getAllByRole('button');
      expect(links).toHaveLength(8);
      expect(links[0]).toHaveTextContent('Documentation');
      expect(links[1]).toHaveTextContent('Blog');
      expect(links[2]).toHaveTextContent('Code of conduct');
      expect(links[3]).toHaveTextContent('Contributing');
      expect(links[4]).toHaveTextContent('GitHub');
      expect(links[5]).toHaveTextContent('Slack');
      expect(links[6]).toHaveTextContent('Twitter');
      expect(links[7]).toHaveTextContent('Apache License 2.0');

      const statsLink = getByText('Stats');
      expect(statsLink).toBeInTheDocument();
      expect(statsLink).toHaveAttribute('href', '/stats');

      expect(getByText('© The Artifact Hub Authors')).toBeInTheDocument();
    });

    it('adds proper styles for hiding footer', () => {
      const { getByRole } = render(
        <Router>
          <Footer isHidden />
        </Router>
      );

      const footer = getByRole('contentinfo');
      expect(footer).toHaveClass('invisibleFooter');
    });
  });
});
