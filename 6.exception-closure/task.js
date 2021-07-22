// Задание 1

function parseCount(value) {
	let result = Number.parseInt(value);
	if (isNaN(result)) {
		throw new Error("Невалидное значение");
	}
	return result;
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (e) {
		return e;
	}
}

// Задание 2 

class Triangle {
	constructor(side1, side2, side3) {
		this.sides = [side1, side2, side3].sort((a, b) => a - b);
		if (this.sides[2] > this.sides[1] + this.sides[0]) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
	}

	getPerimeter() {
		return this.sides.reduce((a, b) => a + b, 0);
	}

	getArea() {
		let semiperimeter = this.getPerimeter() / 2;
		let area = Math.sqrt(semiperimeter * (semiperimeter - this.sides[0]) * (semiperimeter - this.sides[1]) * (semiperimeter - this.sides[2]));
		return Math.round(area * 1000) / 1000;
	}
}

class ErrorTriangle {
	getPerimeter() {
		return "Ошибка! Треугольник не существует";
	}

	getArea() {
		return "Ошибка! Треугольник не существует"
	}
}

function getTriangle(side1, side2, side3) {
	try {
		return new Triangle(side1, side2, side3);
	} catch (e) {
		return new ErrorTriangle();
	}
}


