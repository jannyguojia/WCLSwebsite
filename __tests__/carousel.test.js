// carousel.test.js

const carouselModule = require('../carouseltest');
test('leftShift decreases index', () => {
    carouselModule.leftShift();
    expect(carouselModule.getIndex()).toBe(-1);
});

test('rightShift increases index', () => {
    carouselModule.rightShift();
    expect(carouselModule.getIndex()).toBe(0);
});

test('setIndex sets the correct index', () => {
    carouselModule.setIndex(2);
    expect(carouselModule.getIndex()).toBe(2);
});