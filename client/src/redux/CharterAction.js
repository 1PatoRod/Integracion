import {
	allCharacts,
	clearCharact,
	charterDetail,
	clearCharDetail,
	searchCharacter,
	setCurrent,
	filters,
    locations,
} from "./CharterSlice";
import axios from "axios";

//=============================================GET ALL CHARACTERS=============================================\\
const getAllCharacters = () => {
	return async (dispatch) => {
		const response = (await axios(`http://localhost:3001/character`)).data;
		return dispatch(allCharacts(response));
	};
};
const clearAllCharact = () => {
	return (dispatch) => {
		const response = [];
		dispatch(clearCharact(response));
	};
};
//=================================================GET DETAIL=================================================\\
const getCharDetail = (id) => {
	return async (dispatch) => {
		const response = (await axios(`http://localhost:3001/character/${id}`))
			.data;
		return dispatch(charterDetail(...response));
	};
};
const clearGetCharDetail = () => {
	return (dispatch) => {
		const response = {};
		dispatch(clearCharDetail(response));
	};
};
//===================================================Search===================================================\\
const searchCharacterName = (name) => {
	return async (dispatch) => {
		const response = (
			await axios(`http://localhost:3001/character?name=${name}`)
		).data;
		return dispatch(searchCharacter(response));
	};
};
//===================================================Current===================================================\\
const setCurrentPage = (num) => {
	return (dispatch) => {
		console.log(num);
		return dispatch(setCurrent(num));
	};
};
//===================================================Filters===================================================\\
const applyFilters = ({ fSpecies, fStatus, fGender, fOrigin, fLocation, oAlphabetic }) => {
	return (dispatch, getState) => {
		const character = getState().characts.charactOfficial;

		const filteredSpecies = filterSpecies(character, fSpecies);
		const filteredStatus = filterStatus(filteredSpecies, fStatus);
		const filteredGender = filterGender(filteredStatus, fGender);
		const filteredOrigin = filterOrigin(filteredGender, fOrigin);
		const filteredLocation = filterLocation(filteredOrigin, fLocation);
		const orderedAlphabetic = orderAlphabetic(filteredLocation, oAlphabetic);
		return dispatch(filters(orderedAlphabetic));
	};
};
const filterSpecies = (character, fSpecies) => {
	if (fSpecies !== "All") {
		const response = character?.filter((el) => el.species === fSpecies);
		return response;
	}
	return character;
};
const filterStatus = (filteredSpecies, fStatus) => {
	if (fStatus !== "All"){
		const response = filteredSpecies?.filter((el) => el.status === fStatus);
		return response;
	}
	return filteredSpecies
};
const filterGender = (filteredStatus, fGender) => {
	if (fGender !== "All") {
		const response = filteredStatus?.filter((el) => el.gender === fGender);
		return response;
	}
	return filteredStatus;
};
const filterOrigin = (filteredGender, fOrigin) => {
	if (fOrigin !== "All") {
		const response = filteredGender?.filter((el) => el.origin === fOrigin);
		return response;
	}
	return filteredGender;
};
const filterLocation = (filteredOrigin, fLocation) => {
	if (fLocation !== "All") {
		const response = filteredOrigin?.filter((el) => el.location === fLocation);
		return response;
	}
	return filteredOrigin;
};
const orderAlphabetic = (filteredLocation, oAlphabetic) => {
	if (oAlphabetic !== "All") {
		let sortFilter =
			oAlphabetic === "A_Z"
				? filteredLocation.sort((a, b) => {
						if (a.name > b.name) return 1;
						if (b.name > a.name) return -1;
						return 0;
				})
				: filteredLocation.sort((a, b) => {
						if (a.name > b.name) return -1;
						if (b.name > a.name) return 1;
						return 0;
				});
		return sortFilter;
	}
	return filteredLocation;
};
//============================================Get Location or Origin============================================\\
const getLocation = () => {
    return async (dispatch) => {
        const response = (await axios('http://localhost:3001/location')).data
        return dispatch(locations(response))
    }
}

export {
	getAllCharacters,
	clearAllCharact,
	getCharDetail,
	clearGetCharDetail,
	searchCharacterName,
	setCurrentPage,
	applyFilters,
    getLocation,
};
