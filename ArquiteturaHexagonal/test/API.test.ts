import axios from "axios"

test("Deve executar o checkin de um carro", async function() {
  await axios({
    url: "http://localhost:3000/checkin",
    method: "post",
    data: {
      plate: "AAA-999",
      checkinDate: "2022-03-01T10:00:00-03:00"
    }
  })

  const responseGetParkedCars = await axios({
    url: "http://localhost:3000/parked_cars",
    method: "get"
  })

  const parkedCars = responseGetParkedCars.data
  //expect(parkedCars).toHaveLength(1)

  const responseCheckout = await axios({
    url: "http://localhost:3000/checkout",
    method: "post",
    data: {
      plate: "AAA-999",
      checkoutDate: "2022-03-01T12:00:00-03:00"
    }
  })

  const ticket = responseCheckout.data

  expect(ticket.period).toBe(2)
  expect(ticket.price).toBe(20)
})