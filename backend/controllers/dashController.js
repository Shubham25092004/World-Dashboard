const db = require('../config/db')



async function totalPopulation(req,res){
try {
    const [result] = await db.query("select sum(Population) as tpop from country;") 
    res.status(200).send(result[0])
} catch (error) {
    res.status(500).send({msg:"Server error"})
}
}

async function top10Population(req, res) {
  try {
    const [result] = await db.query('select name , Population from country order by Population desc limit 10;');

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
}




async function Population100000000(req, res) {
  try {
    const [result] = await db.query('SELECT Name, Population FROM country WHERE Population > 100000000;');

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
}

async function PopulationBetween(req, res) {
  try {
    const [result] = await db.query('SELECT Name, Population FROM city WHERE Population BETWEEN 1000000 AND 5000000;');

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
}

async function NumberOfCountries(req, res) {
  try {
    const [result] = await db.query('SELECT Continent, COUNT(*) AS NumberOfCountries FROM country GROUP BY Continent;');

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
}

async function AverageContinent(req, res) {
  try {
    const [result] = await db.query('SELECT Continent, AVG(LifeExpectancy) AS AverageLifeExpectancy FROM country GROUP BY Continent;');

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
}

async function CountryNameLanguage(req, res) {
  try {
    const [result] = await db.query('SELECT country.Name AS CountryName, countrylanguage.Language FROM countrylanguage JOIN country ON countrylanguage.CountryCode = country.Code;');

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
}

async function MaxPopulationCountry(req, res) {
  try {
    const [result] = await db.query('SELECT Name, Population FROM country WHERE Population = (SELECT MAX(Population) FROM country);');

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
}

async function AveragePopulationcity(req, res) {
  try {
    const [result] = await db.query('SELECT Name, Population FROM city WHERE Population > (SELECT AVG(Population) FROM city);');

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
}

async function CountryStartsWithA(req, res) {
  try {
    const [result] = await db.query("SELECT Name FROM country WHERE Name LIKE 'A%';");

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
}

async function CityNameYork(req, res) {
  try {
    const [result] = await db.query("SELECT Name FROM city WHERE Name LIKE '%York%';");

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
}

async function updateJapanCityPopulation(req, res) {
  try {
    const [result] = await db.query("UPDATE city SET Population = Population * 1.10 WHERE CountryCode = 'JPN';");

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
}


async function updateAustraliaContinent(req, res) {
  try {
    const [result] = await db.query(
      "UPDATE country SET Continent = 'Oceania' WHERE Name = 'Australia';"
    );

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
}

async function DeleteSmallCities(req, res) {
  try {
    const [result] = await db.query(
      "DELETE FROM city WHERE Population < 500;"
    );

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
}



module.exports = {
    totalPopulation,
    top10Population,
    Population100000000,
    PopulationBetween,
    NumberOfCountries,
    AverageContinent,
    CountryNameLanguage,
    MaxPopulationCountry,
    AveragePopulationcity,
    CountryStartsWithA,
    CityNameYork,
    updateJapanCityPopulation,
    updateAustraliaContinent,
    DeleteSmallCities
}