const express = require('express')
const dashController = require('../controllers/dashController')

const router = express.Router();

router.get('/totalPopulation', dashController.totalPopulation );

router.get('/top10Population',dashController.top10Population);

router.get('/Population100000000',dashController.Population100000000);

router.get('/PopulationBetween',dashController.PopulationBetween);

router.get('/NumberOfCountries',dashController.NumberOfCountries);

router.get('/AverageContinent',dashController.AverageContinent);

router.get('/CountryNameLanguage',dashController.CountryNameLanguage);

router.get('/MaxPopulationCountry',dashController.MaxPopulationCountry);

router.get('/AveragePopulationcity',dashController.AveragePopulationcity);

router.get('/CountryStartsWithA',dashController.CountryStartsWithA);

router.get('/CityNameYork',dashController.CityNameYork);

router.get('/updateJapanCityPopulation',dashController.updateJapanCityPopulation);

router.get('/updateAustraliaContinent',dashController.updateAustraliaContinent);

router.delete('/DeleteSmallCities',dashController.DeleteSmallCities);

module.exports = router;

