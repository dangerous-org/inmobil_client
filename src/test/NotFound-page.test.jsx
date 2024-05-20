import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotFoundPage from '../pages/NotFoundPage/NotFound-Page';
import { MemoryRouter } from 'react-router-dom';

test('verifica que el h1 se renderiza en NotFoundPage', async () => {
  render(
    <MemoryRouter>
      <NotFoundPage />
    </MemoryRouter>
  );

  const h1Element = screen.getByRole('heading', { level: 1 });
  expect(h1Element).toBeInTheDocument();
});
