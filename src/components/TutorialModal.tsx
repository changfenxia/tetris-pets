import React from 'react';
import '../styles/TutorialModal.css';

interface TutorialModalProps {
  onClose: () => void;
}

const TutorialModal: React.FC<TutorialModalProps> = ({ onClose }) => {
  return (
    <div className="tutorial-overlay">
      <div className="tutorial-modal">
        <h2>Добро пожаловать в Tetris - Коллекционер питомцев!</h2>
        <div className="tutorial-content">
          <p>🎮 <strong>Как играть:</strong></p>
          <ul>
            <li>Управляйте фигурами с помощью стрелок</li>
            <li>Собирайте полные ряды, чтобы получить очки</li>
            <li>За каждый собранный ряд есть шанс получить питомца</li>
            <li>Чем больше рядов за раз - тем выше шанс на редкого питомца!</li>
          </ul>
          <p>✨ <strong>Питомцы:</strong></p>
          <ul>
            <li>Каждый питомец даёт бонус к шансу получения новых</li>
            <li>Существует 5 редкостей: от обычных до легендарных</li>
            <li>Некоторые питомцы настолько редки, что о них ходят только легенды...</li>
          </ul>
        </div>
        <button className="tutorial-button" onClick={onClose}>
          Начать игру!
        </button>
      </div>
    </div>
  );
};

export default TutorialModal;

// Добавляем пустой экспорт, чтобы файл считался модулем
export {}; 