// const { calculator,server } = require('../app');
const { calculator,server } = require('../app');
 
afterAll((done) => {
    server.close(done); // closes the server so Jest can exit
});
 

describe('Calculator Unit Tests', () => {
    describe('Addition', () => {
     test('should add two positive numbers', () => {
         expect(calculator.add(2, 3)).toBe(5);
     });
 
     test('should add negative numbers', () => {
         expect(calculator.add(-2, -3)).toBe(-5);
     });
 
     test('should add positive and negative number', () => {
         expect(calculator.add(5, -3)).toBe(2);
     });
 
     test('should add zero', () => {
         expect(calculator.add(5, 0)).toBe(5);
         expect(calculator.add(0, -3)).toBe(-3);
     });
 
     test('should add one', () => {
         expect(calculator.add(1, 1)).toBe(2);
         expect(calculator.add(-1, 1)).toBe(0);
     });
 });

  describe('Subtraction', () => {
      test('should subtract two numbers', () => {
          expect(calculator.subtract(5, 3)).toBe(2);
      });
  
      test('should subtract negative numbers', () => {
          expect(calculator.subtract(-5, -3)).toBe(-2);
      });
  
      test('should subtract zero', () => {
          expect(calculator.subtract(5, 0)).toBe(5);
          expect(calculator.subtract(0, 5)).toBe(-5);
      });
  
      test('should subtract one', () => {
          expect(calculator.subtract(1, 1)).toBe(0);
          expect(calculator.subtract(-1, 1)).toBe(-2);
      });
  });

 describe('Multiplication', () => {
     test('should multiply two numbers', () => {
         expect(calculator.multiply(3, 4)).toBe(12);
     });
 
     test('should multiply with zero', () => {
         expect(calculator.multiply(5, 0)).toBe(0);
         expect(calculator.multiply(0, 10)).toBe(0);
     });
 
     test('should multiply with one', () => {
         expect(calculator.multiply(7, 1)).toBe(7);
         expect(calculator.multiply(1, -3)).toBe(-3);
     });
 
     test('should multiply negative numbers', () => {
         expect(calculator.multiply(-2, 3)).toBe(-6);
         expect(calculator.multiply(-2, -4)).toBe(8);
     });
 });

 describe('Division', () => {
     test('should divide two numbers', () => {
         expect(calculator.divide(10, 2)).toBe(5);
     });
 
     test('should return null for division by zero', () => {
         expect(calculator.divide(10, 0)).toBe(null);
     });
 
     test('should divide zero by a number', () => {
         expect(calculator.divide(0, 5)).toBe(0);
     });
 
     test('should divide by one', () => {
         expect(calculator.divide(5, 1)).toBe(5);
         expect(calculator.divide(-5, 1)).toBe(-5);
     });
 
     test('should divide negative numbers', () => {
         expect(calculator.divide(-10, 2)).toBe(-5);
         expect(calculator.divide(-10, -2)).toBe(5);
     });
 });

});
