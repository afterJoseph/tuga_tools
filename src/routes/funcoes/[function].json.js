function validar_nif(value) {
	if (!value) return false;
	const nif = value.toString();
	if (nif.length !== 9) return false;

	let validationSets = {
		one: ['1', '2', '3', '5', '6', '8'],
		two: ['45', '70', '71', '72', '74', '75', '77', '79', '90', '91', '98', '99']
	};

	if (
		!validationSets.one.includes(nif.substr(0, 1)) &&
		!validationSets.two.includes(nif.substr(0, 2))
	) {
		return false;
	}

	const total =
		nif[0] * 9 +
		nif[1] * 8 +
		nif[2] * 7 +
		nif[3] * 6 +
		nif[4] * 5 +
		nif[5] * 4 +
		nif[6] * 3 +
		nif[7] * 2;
	const modulo11 = Number(total) % 11;

	const checkDigit = modulo11 < 2 ? 0 : 11 - modulo11;

	return checkDigit === Number(nif[8]) ? value : null;
}

export async function get({ params }) {
	try {
		const masterFunctionsList = [
			{ name: 'validarnif', data: [{ name: 'Validar NIF', data: validar_nif.toString() }] }
		];

		const functions = masterFunctionsList.find((func) => func.name === params.function)?.data || [];

		return {
			status: 200,
			body: {
				functions
			}
		};
	} catch (error) {
		return { status: 500 };
	}
}
