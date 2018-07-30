var SerialPort = require('serialport'),
	serialPort = new SerialPort('COM3', {
		baudRate: 9600
	}),
	Printer = require('../src/printer');

var opts = {
    maxPrintingDots: 15,
    heatingTime: 150,
    heatingInterval: 4,
    commandDelay: 5
};

serialPort.on('open',function() {
	var printer = new Printer(serialPort, opts);
	printer.hasPaper(function(paper) {
		console.log(paper);
		process.exit();
	});
});
