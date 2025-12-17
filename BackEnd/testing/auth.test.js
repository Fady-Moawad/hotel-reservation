const request = require('supertest')

describe('Login API', () => { //describe collection of same route
    it('should return 200 user found ', async () => { // single test
        const res = await request('http://localhost:4004') //send request on api
            .post('/api/hotel/login') //with method and end point
            .send({ // send data
                email: 'new@gmail.com',
                password: '!@#'
            })
        expect(res.statusCode).toBe(200) //expect result of statusCode response
    })


    it('should return 400 user not found ', async () => {
        const res = await request('http://localhost:4004')
            .post('/api/hotel/login')
            .send({
                email: 'not@gmail.com',
                password: '123'
            })
        expect(res.statusCode).toBe(400)
    })
})

describe('Regiter API', () => {
    it('should return 201 for create new user', async () => {
        const res = await request('http://localhost:4004')
            .post('/api/hotel/register')
            .send({
                name: 'new',
                email: 'new2@gmail.com',
                password: '!@#'
            })
        expect(res.statusCode).toBe(201)
    })

    it('should return 400 for invalid email', async () => {
        const res = await request('http://localhost:4004')
            .post('/api/hotel/register')
            .send({
                name: 'new',
                email: 'new1@gmail.com',
                password: '!@#'
            })
        expect(res.statusCode).toBe(400)
    })
})

describe('Reservation API', () => {
    it('should return 201 complete reservation secceded', async () => {
        const res = await request('http://localhost:4004')
            .post('/api/hotel/reservation')
            .send({
                name: 'new',
                email: 'new@gmail.com',
                checkInDate: '2025-12-17',
                checkOutDate: '2025-12-20',
                type: 'double'
            })
        expect(res.statusCode).toBe(201)
    })

    it('should return 400 invalid date', async () => {
        const res = await request('http://localhost:4004')
            .post('/api/hotel/reservation')
            .send({
                name: 'new',
                email: 'new@gmail.com',
                checkInDate: '2025-12-20',
                checkOutDate: '2025-12-17',
                type: 'single'
            })
        expect(res.statusCode).toBe(400)
    })

})