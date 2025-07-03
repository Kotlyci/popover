import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Popover from './Popover';

describe('Popover', () => {
  test('показывает popover при isOpen=true', () => {
    render(
      <Popover
        title="Заголовок"
        content="Текст подсказки"
        isOpen={true}
        position="top"
      >
        <button>Кнопка</button>
      </Popover>
    );
    expect(screen.getByText('Заголовок')).toBeInTheDocument();
    expect(screen.getByText('Текст подсказки')).toBeInTheDocument();
  });

  test('не показывает popover при isOpen=false', () => {
    render(
      <Popover
        title="Заголовок"
        content="Текст подсказки"
        isOpen={false}
        position="top"
      >
        <button>Кнопка</button>
      </Popover>
    );
    expect(screen.queryByText('Заголовок')).toBeNull();
    expect(screen.queryByText('Текст подсказки')).toBeNull();
  });
});