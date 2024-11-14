const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			person: {},
			misFavoritos: [],
			planet: {},
			vehicle: {},
		},
		actions: {
			// Use getActions to call a function within a fuction

			loadPeople: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people")
					const data = await response.json()
					console.log(data.results)
					setStore({ people: data.results })
				} catch (error) {
					console.log(error)
					return false
				}
			},
			loadPlanet: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets")
					const data = await response.json()
					console.log(data.results)
					setStore({ planets: data.results })
				} catch (error) {
					console.log(error)
					return false
				}
			},
			loadVehicle: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/vehicles")
					const data = await response.json()
					console.log(data.results)
					setStore({ vehicles: data.results })
				} catch (error) {
					console.log(error)
					return false
				}
			},
			loadInfoPeople: async (theid) => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people/" + theid)
					const data = await response.json()
					console.log(data.result)
					setStore({ person: data.result })
				} catch (error) {
					console.log(error)
					return false
				}
			},
			favoritos: (item) => {
				if (getStore().misFavoritos.includes(item)) {
					//Si ya existe en favoritos lo borra
					let aux = []
					aux = getStore().misFavoritos.filter((nombre) => nombre != item)
					setStore({ misFavoritos: aux })
				} else {
					//Si no existe lo agrega.
					setStore({ misFavoritos: [...getStore().misFavoritos, item] })

				}
			},
			loadInfoPlanet: async (theid) => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets/" + theid)
					const data = await response.json()
					console.log(data.result)
					setStore({ planet: data.result })
				} catch (error) {
					console.log(error)
					return false
				}
			},
			loadInfoVehicle: async (theid) => {
				try {
					const response = await fetch("https://www.swapi.tech/api/vehicles/" + theid)
					const data = await response.json()
					console.log(data.result)
					setStore({ vehicle: data.result })
				} catch (error) {
					console.log(error)
					return false
				}
			},
		}
	};
};

export default getState;
