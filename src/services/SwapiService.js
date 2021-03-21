export default class SwapiService {

    _baseUrl = 'https://swapi.dev/api';
    
    getResource = async (url) => {
      const res = await fetch(`${this._baseUrl}${url}`)
      if (!res.ok) {
        throw new Error(`Could not fetch ${this._baseUrl}${url}, recieved ${res.status}`)
      }
      return await res.json()  
      };
    
     getAllPeople = async() => {
      const res = await this.getResource('/people/');
      const persons = []
       res.results.map(el => persons.push(this._transformApi._transformPerson(el)));
       return persons;       
      };
    
       getPersonById = async (id) => {
        const res = await this.getResource(`/people/${id}`);
        return this._transformApi._transformPerson(res)
      }
    getAllPlanets = async () => {
       const res = await this.getResource('/planets/')
       const planets = [];
       res.results.map((el) => planets.push(this._transformApi._transformPlanet(el)))
       return planets
    }
    getPlanetById = async (id) => {
      const planet = await this.getResource(`/planets/${id}`)
      return this._transformApi._transformPlanet(planet);
    }
    getAllStarships = async () => {
      const res = await this.getResource('/starships/')
      const starships = [];
      res.results.map(el => starships.push(this._transformApi._transformStarship(el)))
      return starships;
    }
    getStarshipsById = async (id) => {
      const starship = await this.getResource(`/starships/${id}`);
      return this._transformApi._transformStarship(starship)
    }

    getById = async(path, id) => {
      if (path.indexOf('/people') !== -1 ) {
        const res = await this.getPersonById(id)
        return res;
      }
      if (path.indexOf('/planets') !== -1 ) {
        const res = await this.getPlanetById(id)
        return res
      }
      if (path.indexOf('/starships') !== -1 ) {
        const res = await this.getStarshipsById(id) 
        return res;
      }
    }
      
    _transformApi = {

        _extractId(item) {
            const idRegExp = /\/([0-9]*)\/$/;
            return item.url.match(idRegExp)[1];
        },
        _transformPlanet(planet) {            
            return {              
                id: this._extractId(planet),
                name: planet.name,
                population: planet.population,
                rotationPeriod: planet.rotation_period,
                diameter: planet.diameter              
            }
        },
        _transformPerson(person) {
            return { 
                id: this._extractId(person),
                name: person.name,
                gender: person.gender,
                birthYear: person.birth_year,
                eyeColor: person.eye_color            
            }
        },
        _transformStarship(starship) {
            return {
                id: this._extractId(starship),
                name: starship.name,
                model: starship.model,
                manufacturer: starship.manufacturer,
                costInCredits: starship.costInCredits,
                length: starship.length,
                crew: starship.crew,
                passengers: starship.passengers,
                cargoCapacity: starship.cargoCapacity
            }
        }
    }    
    }

    // const swapi = new SwapiService();
    // function getById(path, id) {
    //   if (path.indexOf('/people') !== -1) {
    //   return swapi.getPersonById(id)
    //   }
    //   else if (path.indexOf('/planets') !== -1) {
    //   return swapi.getPlanetById(id)
    //   }
    //   else if (path.indexOf('/starships') !== -1) {
    //   return swapi.getStarshipsById(id)
    //   }
    // }
    // console.log(getById('/starships', 3))

    // swapi.getStarshipsById(3)
    // .then(res => console.log(res))

    // swapi.getAllStarships()
    // .then(req => console.log(req))
    // swapi.getAllPeople()
    // .then(res => console.log(res))
    // // swapi.getAllPeople().then((people) => {
    // //   people.forEach((p) => {
    // //     console.log(p.name)
    // //                         }) 
    // //                                       });
    // // swapi.getById(3).then((person) => console.log('person is: ' + person.name))
    // // swapi.getAllPlanets().then((planets) => {
    // //   planets.forEach((planet) => {
    // //     console.log(planet)
    // //   })
    // // })
    // // swapi.getAllPeople().then(people => {
    // //   people.forEach(person => console.log(person))
    // // })
    // swapi.getStarshipsById(2).then(planets => {
    //   console.log(planets)
    // })