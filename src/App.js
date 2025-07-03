import React, { useState } from 'react';
import Popover from './Popover';
import './Popover.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  // Функции для открытия/закрытия по наведению
  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div style={{ padding: '100px', textAlign: 'center' }}>
      <Popover
        title="Заголовок Popover"
        content="Это содержимое всплывающей подсказки. Здесь можно разместить любую информацию."
        isOpen={isOpen}
        position="top"
      >
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Наведи для Popover
        </button>
      </Popover>
    </div>
  );
}

export default App;