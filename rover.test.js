let rover = require('./rover');
describe('initSta', () => {
	it('should say the initial position', () => {
		expect(typeof rover).toBe('object');
	});

	it('should say the initial position', () => {
		expect(rover.x).toBe(0);
	});

	it('should say the initial position', () => {
		expect(rover.y).toBe(0);
	});

	it('should say the initial position', () => {
		expect(rover.direction).toBe('n');
	});

	it('should move',() =>{
		rover.forward()
		expect(rover.x).toBe(0);
		expect(rover.y).toBe(-1);
		expect(rover.direction).toBe('n');
	});
	it('should move', () =>{
		rover.forward()
		expect(rover.x).toBe(0);
		expect(rover.y).toBe(-2);
		expect(rover.direction).toBe('n');

	});

});
