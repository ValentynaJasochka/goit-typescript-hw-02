/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T extends Object, B extends Object> (objA: T, objB: B) {
  return Object.assign(objA, objB);
}

export { }

