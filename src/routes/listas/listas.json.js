export async function get() {
	try {
		const distritosPortugal = [
			'Aveiro',
			'Beja',
			'Braga',
			'Bragança',
			'Castelo Branco',
			'Coimbra',
			'Évora',
			'Faro',
			'Guarda',
			'Leiria',
			'Lisboa',
			'Portalegre',
			'Porto',
			'Santarém',
			'Setúbal',
			'Viana do Castelo',
			'Vila Real',
			'Viseu',
			'Ilha da Madeira',
			'Ilha de Porto Santo',
			'Ilha de Santa Maria',
			'Ilha de São Miguel',
			'Ilha Terceira',
			'Ilha Graciosa',
			'Ilha de São Jorge',
			'Ilha do Pico',
			'Ilha do Faial',
			'Ilha das Flores',
			'Ilha do Corvo'
		];

		const distritosPortugalDetails = [
			{
				name: 'Aveiro',
				flag: 'https://dados.gov.pt/s/brasoes/01.png',
				wikipediaUrl: 'https://pt.wikipedia.org/wiki/Distrito_de_Aveiro'
			},
			{
				name: 'Beja',
				flag: 'https://dados.gov.pt/s/brasoes/02.png',
				wikipediaUrl: 'https://pt.wikipedia.org/wiki/Distrito_de_Beja'
			},
			{
				name: 'Braga',
				flag: 'https://dados.gov.pt/s/brasoes/03.png',
				wikipediaUrl: 'https://pt.wikipedia.org/wiki/Distrito_de_Braga'
			},
			{
				name: 'Bragança',
				flag: 'https://dados.gov.pt/s/brasoes/04.png',
				wikipediaUrl: 'https://pt.wikipedia.org/wiki/Distrito_de_Bragança'
			},
			{
				name: 'Castelo Branco',
				flag: 'https://dados.gov.pt/s/brasoes/05.png',
				wikipediaUrl: 'https://pt.wikipedia.org/wiki/Distrito_de_Castelo_Branco'
			},
			{
				name: 'Coimbra',
				flag: 'https://dados.gov.pt/s/brasoes/06.png',
				wikipediaUrl: 'https://pt.wikipedia.org/wiki/Distrito_de_Coimbra'
			},
			{
				name: 'Évora',
				flag: 'https://dados.gov.pt/s/brasoes/07.png',
				wikipediaUrl: 'https://pt.wikipedia.org/wiki/Distrito_de_Évora'
			},
			{
				name: 'Faro',
				flag: 'https://dados.gov.pt/s/brasoes/08.png',
				wikipediaUrl: 'https://pt.wikipedia.org/wiki/Distrito_de_Faro'
			},
			{
				name: 'Guarda',
				flag: 'https://dados.gov.pt/s/brasoes/09.png',
				wikipediaUrl: 'https://pt.wikipedia.org/wiki/Distrito_da_Guarda'
			},
			{
				name: 'Leiria',
				flag: 'https://dados.gov.pt/s/brasoes/10.png',
				wikipediaUrl: 'https://pt.wikipedia.org/wiki/Distrito_de_Leiria'
			},
			{
				name: 'Lisboa',
				flag: 'https://dados.gov.pt/s/brasoes/11.png',
				wikipediaUrl: 'https://pt.wikipedia.org/wiki/Distrito_de_Lisboa'
			},
			{
				name: 'Portalegre',
				flag: 'https://dados.gov.pt/s/brasoes/12.png',
				wikipediaUrl: 'https://pt.wikipedia.org/wiki/Distrito_de_Portalegre'
			},
			{
				name: 'Porto',
				flag: 'https://dados.gov.pt/s/brasoes/13.png',
				wikipediaUrl: 'https://pt.wikipedia.org/wiki/Distrito_do_Porto'
			},
			{
				name: 'Santarém',
				flag: 'https://dados.gov.pt/s/brasoes/14.png',
				wikipediaUrl: 'https://pt.wikipedia.org/wiki/Distrito_de_Santarém'
			},
			{
				name: 'Setúbal',
				flag: 'https://dados.gov.pt/s/brasoes/15.png',
				wikipediaUrl: 'https://pt.wikipedia.org/wiki/Distrito_de_Setúbal'
			},
			{
				name: 'Viana do Castelo',
				flag: 'https://dados.gov.pt/s/brasoes/16.png',
				wikipediaUrl: 'https://pt.wikipedia.org/wiki/Distrito_de_Viana_do_Castelo'
			},
			{
				name: 'Vila Real',
				flag: 'https://dados.gov.pt/s/brasoes/17.png',
				wikipediaUrl: 'https://pt.wikipedia.org/wiki/Distrito_de_Vila_Real'
			},
			{
				name: 'Viseu',
				flag: 'https://dados.gov.pt/s/brasoes/18.png',
				wikipediaUrl: 'https://pt.wikipedia.org/wiki/Distrito_de_Viseu'
			},
			{
				name: 'Ilha da Madeira',
				flag: 'https://dados.gov.pt/s/brasoes/30.png',
				wikipediaUrl: 'https://pt.wikipedia.org/wiki/Região_Autónoma_da_Madeira'
			},
			{
				name: 'Ilha de Porto Santo',
				flag: 'https://dados.gov.pt/s/brasoes/30.png',
				wikipediaUrl: 'https://pt.wikipedia.org/wiki/Região_Autónoma_da_Madeira'
			},
			{
				name: 'Ilha de Santa Maria',
				flag: 'https://dados.gov.pt/s/brasoes/40.png',
				wikipediaUrl: 'https://pt.wikipedia.org/wiki/Açores'
			},
			{
				name: 'Ilha de São Miguel',
				flag: 'https://dados.gov.pt/s/brasoes/40.png',
				wikipediaUrl: 'https://pt.wikipedia.org/wiki/Açores'
			},
			{
				name: 'Ilha Terceira',
				flag: 'https://dados.gov.pt/s/brasoes/40.png',
				wikipediaUrl: 'https://pt.wikipedia.org/wiki/Açores'
			},
			{
				name: 'Ilha Graciosa',
				flag: 'https://dados.gov.pt/s/brasoes/40.png',
				wikipediaUrl: 'https://pt.wikipedia.org/wiki/Açores'
			},
			{
				name: 'Ilha de São Jorge',
				flag: 'https://dados.gov.pt/s/brasoes/40.png',
				wikipediaUrl: 'https://pt.wikipedia.org/wiki/Açores'
			},
			{
				name: 'Ilha do Pico',
				flag: 'https://dados.gov.pt/s/brasoes/40.png',
				wikipediaUrl: 'https://pt.wikipedia.org/wiki/Açores'
			},
			{
				name: 'Ilha do Faial',
				flag: 'https://dados.gov.pt/s/brasoes/40.png',
				wikipediaUrl: 'https://pt.wikipedia.org/wiki/Açores'
			},
			{
				name: 'Ilha das Flores',
				flag: 'https://dados.gov.pt/s/brasoes/40.png',
				wikipediaUrl: 'https://pt.wikipedia.org/wiki/Açores'
			},
			{
				name: 'Ilha do Corvo',
				flag: 'https://dados.gov.pt/s/brasoes/40.png',
				wikipediaUrl: 'https://pt.wikipedia.org/wiki/Açores'
			}
		];

		return {
			status: 200,
			body: {
				listas: [
					// {
					// 	name: 'Concelhos de Portugal',
					// 	data: concelhosPortugal
					// },
					{
						name: 'Distritos de Portugal',
						data: distritosPortugal
					},
					{
						name: 'Distritos de Portugal + Info Extra',
						data: distritosPortugalDetails
					}
				]
			}
		};
	} catch (error) {
		return { status: 500 };
	}
}
