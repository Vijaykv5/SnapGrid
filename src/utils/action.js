export const INSERT_ELEMENT = 'INSERT_ELEMENT';

export function insertElement(newElement) {
  return {
    type: INSERT_ELEMENT,
    payload: newElement,
  };
}
