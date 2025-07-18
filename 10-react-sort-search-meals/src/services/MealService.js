import axios from "axios";

export class MealService {
    static serverUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

    static getAllSeaFood() {
        let dataUrl = `${MealService.serverUrl}Seafood`;
        return axios.get(dataUrl);
    }
}