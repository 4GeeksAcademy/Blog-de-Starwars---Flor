const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			loadPeople: async () => {
			try {
				const response = await fetch("https://www.swapi.tech/api/people") 
				const data = await response.json()
				console.log(data.results)
				setStore ({people: data.results})
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
					setStore ({planets: data.results})
				} catch (error) {
					console.log(error)
					return false
				}
				},
			
		}
	};
};

export default getState;
