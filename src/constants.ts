enum ECountry {
  Russia = 'Россия',
  USA = 'США',
}

const countries = [
  {
    value: ECountry.Russia,
    id: "0",
  },
  {
    value: ECountry.USA,
    id: "1",
  },
]

const russianCities = [
  {
    value: "Москва",
    id: "0",
  },
  {
    value: "Санкт-Петербург",
    id: "1",
  },
]

const usaCities = [
  {
    value: "Вашингтон",
    id: "0",
  },
  {
    value: "Нью-Йорк",
    id: "1",
  },
]

export { ECountry, countries, russianCities, usaCities }
