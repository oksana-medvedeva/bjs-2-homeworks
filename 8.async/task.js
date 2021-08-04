
function formatTime(hours, minutes) {
	if (hours < 10) {
		hours = "0" + hours;
	}
	if (minutes < 10) {
		minutes = "0"+ minutes;
	}
	return hours + ':' + minutes;
}

function getCurrentFormattedTime() {
	let date = new Date();
	return formatTime(date.getHours(), date.getMinutes())
}

class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.timerId = null;
	}

	addClock(time, callback, id) {
		if (id === undefined) {
			throw new Error('Нет параметра id');
		}
		if (this.alarmCollection.find(item => item.id === id)) {
			console.error(`id = ${id} уже существует`);
			return;
		}
		this.alarmCollection.push({id: id, time: time, callback: callback});
	}

	removeClock(id) {
		let index = this.alarmCollection.findIndex(item => item.id === id);
		if (index >= 0) {
			this.alarmCollection.splice(index, 1);
			return true;
		}
		return false;
	}

	getCurrentFormattedTime() {
		return getCurrentFormattedTime();
	}

	start() {
		function checkClock(alarm) {
			if (getCurrentFormattedTime() === alarm.time) {
				alarm.callback();
			}
		}

		if (this.timerId === null) {
			this.timerId = setInterval(() => this.alarmCollection.forEach((alarm) => {
				checkClock(alarm);
			}), 60000);
			this.alarmCollection.forEach((alarm) => {
				checkClock(alarm);
			});
		}
	}

	stop() {
		if (this.timerId !== null) {
			clearInterval(this.timerId);
			this.timerId = null;
		}
	}

	printAlarms() {
		this.alarmCollection.forEach((alarm) => {
			console.log(alarm.id + ' ' +alarm.time);
		});
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}

function testCase() {
	let testAlarm = new AlarmClock();
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	testAlarm.addClock(formatTime(hours, minutes), () => console.log("Таймер с id 1 сработал"), 1);
	testAlarm.addClock(formatTime(hours, minutes + 1), () => {
		console.log("Таймер с id 2 сработал"); 
		testAlarm.removeClock(2);
	}, 2);
	testAlarm.addClock(formatTime(hours, minutes + 2), () => {
		console.log("Таймер с id 3 сработал");
		testAlarm.clearAlarms();
		testAlarm.printAlarms();
	}, 3);
	testAlarm.printAlarms();
	testAlarm.start();
}

testCase();