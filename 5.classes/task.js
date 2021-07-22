// Задание 1 

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name; 
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state = this.state * 1.5;
	}

	set state(value) {
		if (value < 0) {
			this._state = 0;
		} else if (value > 100) {
			this._state = 100;
		} else {
			this._state = value;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount)
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount)
		this.type = "book";
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount)
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount)
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount)
		this.type = "detective";
	}
}

// Задание 2

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		let result = this.books.find((book) => book[type] === value);
		return result === undefined ? null : result;
	}

	giveBookByName(bookName) {
		let index = this.books.findIndex((book) => book.name === bookName);
		if (index >= 0) {
			return this.books.splice(index, 1)[0];
		} else {
			return null;
		}
	}
} 

// Задание 3 

class Student {
	constructor(name) {
		this.name = name;
		this.subjects = {};
	}

	addMark(mark, subject) {
		if (mark > 5 || mark < 1) {
			alert("Ошибка, оценка должна быть числом от 1 до 5")
			return;
		}

		if (this.subjects[subject] === undefined) {
			this.subjects[subject] = [];
		}

		this.subjects[subject].push(mark);
	}

	getAverageBySubject(subject) {
		if (this.subjects[subject] === undefined)  {
			return "Несуществующий предмет";
		} 

		let sum = this.subjects[subject].reduce((mark1, mark2) => mark1 + mark2, 0);
		return sum / this.subjects[subject].length;
	}

	getAverage() {
		let keys = Object.keys(this.subjects);
		let size = keys.length;
		let sum = keys.map((subject) => this.getAverageBySubject(subject)).reduce((subject1, subject2) => subject1 + subject2, 0);
		return sum / size;
	}
}