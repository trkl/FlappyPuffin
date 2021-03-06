import PhysicsEngine from "./PhysicsEngine";
import Event from '../Events/Event'
import Vector from '../Vector/Vector'

describe("PhysicsEngine", () => {
  let event;
  let gravityVector = new Vector([0, 9.82]);
  let weight = 20;

  beforeEach(() => {
    event = new Event();
    instance = new PhysicsEngine();
  });

//   it("[Constructor vector init ]vector should keep internal vector in sync with x and y", () => {
//     expect(instance.gravityForce()).toBeTruthy();
//   });

//   it("[Empty constructor] vector should return [0,0]", () => {
//     const vector = new Vector();
//     expect(vector.vector).toEqual([0, 0]);
//   });

//   it("vector should keep internal vector in sync with x and y", () => {
//     vector.x = 3;
//     vector.y = 5;
//     expect(
//       vector.x === vector.vector[0] && vector.y === vector.vector[1]
//     ).toBeTruthy();
//   });

//   it("vector should keep internal vector in sync with x and y", () => {
//     vector.vector[0] = 1;
//     vector.vector[1] = 3;
//     expect(
//       vector.x === vector.vector[0] && vector.y === vector.vector[1]
//     ).toBeTruthy();
//   });

//   it("plussing two vectors", () => {
//     expect(vector.plus(vector1).vector).toEqual([3, 5]);
//   });

//   it("minus'ing two vectors", () => {
//     expect(vector.minus(vector1).vector).toEqual([-1, -1]);
//   });

//   it("multiplying vector", () => {
//     const scale = 2;
//     expect(vector.multiply(scale).vector).toEqual([2, 4]);
//   });

//   it("dividing vectors", () => {
//     expect(vector.divide(2).vector).toEqual([1 / 2, 1]);
//   });

//   it("dot'ing vectors", () => {
//     expect(vector.dot(vector1)).toEqual(8);
//   });

//   it("Vector.Zero.vector should be [0,0]", () => {
//     expect(Vector.Zero.vector).toEqual([0, 0]);
//   });
// });
