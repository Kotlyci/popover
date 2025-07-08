import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/dom';
import { initPopover } from './index.js';

describe('Popover', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button id="popover-btn">Показать popover</button>
      <div id="popover" class="popover hidden">Это всплывающее сообщение!</div>
    `;
    initPopover();
  });

  test('popover появляется по клику на кнопку', () => {
    const btn = document.getElementById('popover-btn');
    const popover = document.getElementById('popover');

    expect(popover).toHaveClass('hidden');
    fireEvent.click(btn);
    expect(popover).not.toHaveClass('hidden');
  });

  test('popover скрывается при повторном клике', () => {
    const btn = document.getElementById('popover-btn');
    const popover = document.getElementById('popover');

    fireEvent.click(btn); // показать
    fireEvent.click(btn); // скрыть

    expect(popover).toHaveClass('hidden');
  });

  test('popover скрывается при клике вне его', () => {
    const btn = document.getElementById('popover-btn');
    const popover = document.getElementById('popover');

    fireEvent.click(btn); // показать
    fireEvent.click(document.body); // клик вне

    expect(popover).toHaveClass('hidden');
  });
});