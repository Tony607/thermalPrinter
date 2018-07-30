var SerialPort = require('serialport'),
	serialPort = new SerialPort('COM3', {
		baudRate: 9600
	}),
	Printer = require('../src/printer');

var c1 = __dirname + '/../images/table1.png';
var cl = __dirname + '/../images/c_l.png';
var cw = __dirname + '/../images/c_w.png';

serialPort.on('open',() => {
	var opts = {
		maxPrintingDots: 5,
		heatingTime: 60,
		heatingInterval: 4,
		commandDelay: 5000
	};
	var printer = new Printer(serialPort, opts);
	printer.on('ready', function() {
		printer
		.printLine('|-------2018/7/30-----|')
		.printImage(c1, true, 0.2, true)
		.printImage(cl, true, 0.2, true)
		.printImage(cw, true, 0.2, true)
		.printLine('|---->>>>><<<<END>>>--|')
		.lineFeed(3)
		.print(function() {
			console.log('done');
			process.exit();
		});
	});
});

serialPort.on('data', (data) => {
    console.log(data)
  })