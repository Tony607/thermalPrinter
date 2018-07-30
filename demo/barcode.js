var SerialPort = require('serialport')
serialPort = new SerialPort('COM3', {
	baudRate: 9600
}),
Printer = require('../src/printer')

serialPort.on('open',function() {
	var printer = new Printer(serialPort);
	printer.on('ready', function() {
		printer
			.barcodeTextPosition(2)
			.barcodeHeight(255)
			.printLine('UPCA')
			.barcode(Printer.BARCODE_TYPES.UPCA, '012345678911')
			.printLine('UPCE')
			.barcode(Printer.BARCODE_TYPES.UPCE, '012345678911')
			.printLine('EAN13')
			.barcode(Printer.BARCODE_TYPES.EAN13, '012345678911')
			.printLine('EAN8')
			.barcode(Printer.BARCODE_TYPES.EAN8, '01234567')
			.printLine('CODE39')
			.barcode(Printer.BARCODE_TYPES.CODE39, '012345678911')
			.printLine('I25')
			.barcode(Printer.BARCODE_TYPES.I25, '012345')
			.printLine('CODEBAR')
			.barcode(Printer.BARCODE_TYPES.CODEBAR, '012345678911')
			.printLine('CODE93')
			.barcode(Printer.BARCODE_TYPES.CODE93, '012345678911')
			.printLine('CODE128')
			.barcode(Printer.BARCODE_TYPES.CODE128, '012345678911')
			.printLine('CODE11')
			.barcode(Printer.BARCODE_TYPES.CODE11, '012345678911')
			.printLine('MSI')
			.barcode(Printer.BARCODE_TYPES.MSI, '012345678911')
			.print(function() {
				console.log('done');
				process.exit();
			});
	});
});
