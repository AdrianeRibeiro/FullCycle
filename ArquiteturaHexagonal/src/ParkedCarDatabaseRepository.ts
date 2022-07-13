import Connection from "./Connection";
import ParkedCar from "./ParkedCar";
import ParkedCarRepository from "./ParkedCarRepository";

export default class ParkedCarDatabaseRepository implements ParkedCarRepository {

  constructor (readonly connection: Connection) {

  }

  async save(parkedCar: ParkedCar): Promise<void> { 
    //const url = "postgres://postgres:postgres@localhost:5432"
    //const connection = pgp()(url)

    await this.connection.query("insert into parked_car (plate, checkin_date) values ($1, $2)", [parkedCar.plate, parkedCar.checkinDate])
    //await connection.$pool.end()
  }

  async update(parkedCar: ParkedCar): Promise<void> {
    //const url = "postgres://postgres:postgres@localhost:5432"
    //const connection = pgp()(url)
    await this.connection.query("update parked_car set checkout_date = now() where plate = $1", [parkedCar.plate])
    //await connection.$pool.end()
  }

  async list(): Promise<ParkedCar[]> {
    //const url = "postgres://postgres:postgres@localhost:5432"
    //const connection = pgp()(url)
    const parkedCarsData = await this.connection.query("select * from parked_car where checkout_date is null", [])
    //await connection.$pool.end()

    const parkedCars: ParkedCar[] = []

    for (const parkedCarData of parkedCarsData) {
      const parkedCar = new ParkedCar(parkedCarData.plate, new Date(parkedCarData.checkin_date))
      parkedCars.push(parkedCar)
    }

    return parkedCars
  }

  async get(plate: string): Promise<ParkedCar> {
    //const url = "postgres://postgres:postgres@localhost:5432"
    //const connection = pgp()(url)
    const parkedCarData = await this.connection.one("select * from parked_car where plate = $1 and checkout_date is null", [plate])
    //await connection.$pool.end()

    const parkedCar = new ParkedCar(parkedCarData.plate, new Date(parkedCarData.checkin_date))
    return parkedCar
  }
}