'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const row = table.rows[i];

  // Додаємо нову комірку
  const targetIndex = row.cells.length - 1;
  const newCell = row.insertCell(targetIndex >= 0 ? targetIndex : 0);

  // Додаємо контент у нову комірку
  const secondCellValue = row.cells[1].textContent;

  newCell.textContent = secondCellValue;

  if (i === table.rows.length - 1) {
    newCell.style.fontWeight = 'bold'; // Робимо жирним тільки тут
  }
}
