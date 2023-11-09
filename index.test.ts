import { setupServer } from 'msw/node'
import { http, HttpResponse } from 'msw'

const server = setupServer()
server.use(
  http.get('http://localhost:3000/example', () => {
    console.log('### msw stub called !!')
    return HttpResponse.json({
      id: '15d42a4d-1948-4de4-ba78-b8a893feaf45',
      firstName: 'John',
    })
  }),
)
server.events.on('request:start', ({ request }) => {
  console.log('MSW intercepted:', request.method, request.url)
})

describe('example', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('case 1', async () => {
    const res = await fetch('http://localhost:3000/example')
    const data = await res.json()
    expect(data).toEqual({
      id: '15d42a4d-1948-4de4-ba78-b8a893feaf45',
      firstName: 'John',
    })
  })
})
