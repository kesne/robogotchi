import { Robogotchi } from './../src/robo.js';

describe('Robogotchi', () => {
  jest.useFakeTimers();
  let robo;

  beforeEach( () => {
    robo = new Robogotchi('Bobby');
  });

  afterEach( () => {jest.clearAllTimers()} );

  test('should create an object with name, energy, temperature, and mood upon creation', () => {
    expect(robo.name).toEqual('Bobby');
    expect(robo.energy).toEqual(100);
    expect(robo.temperature).toEqual(20);
    expect(robo.mood).toEqual('happy');
  });

  test('should lose 1 energy / sec', () => {
    jest.advanceTimersByTime(10001);
    expect(robo.energy).toEqual(90);
  });
});
