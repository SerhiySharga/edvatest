const {server} = require('../src/js/javaScript/app2.js');
const request = require('request-promise');

describe('Testing server', () => {
    beforeAll(() => {
        server.listen(3001);
    });

    it('/ url', async () => {
        const resp = await request({
            method: 'GET',
            url: 'http://localhost:3001',
            qs: '',
            json: true,
            resolveWithFullResponse: true,
        });

        console.log(resp);

        expect(resp.body).toBe('Home page!', 'Result incorrect');
        expect(resp.statusCode).toBe(200, 'Result incorrect');
    });

    it('/ url', async () => {
        const resp = await request({
            method: 'GET',
            url: 'http://localhost:3001/users',
            qs: '',
            json: true,
            resolveWithFullResponse: true,
        });

        console.log(resp);

        expect(resp.body).toBe('User list!', 'Result incorrect');
        expect(resp.statusCode).toBe(200, 'Result incorrect');
        expect(resp.statusMessage).toBe('test users', 'Result incorrect');
    });

    afterAll(() => {
        process.exit();
    });
});
