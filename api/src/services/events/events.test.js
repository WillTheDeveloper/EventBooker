import { events, event, createEvent, updateEvent, deleteEvent } from './events'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('events', () => {
  scenario('returns all events', async (scenario) => {
    const result = await events()

    expect(result.length).toEqual(Object.keys(scenario.event).length)
  })

  scenario('returns a single event', async (scenario) => {
    const result = await event({ id: scenario.event.one.id })

    expect(result).toEqual(scenario.event.one)
  })

  scenario('creates a event', async (scenario) => {
    const result = await createEvent({
      input: {
        title: 'String',
        start: '2022-07-10T19:16:17Z',
        end: '2022-07-10T19:16:17Z',
        authorId: scenario.event.two.authorId,
      },
    })

    expect(result.title).toEqual('String')
    expect(result.start).toEqual('2022-07-10T19:16:17Z')
    expect(result.end).toEqual('2022-07-10T19:16:17Z')
    expect(result.authorId).toEqual(scenario.event.two.authorId)
  })

  scenario('updates a event', async (scenario) => {
    const original = await event({ id: scenario.event.one.id })
    const result = await updateEvent({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a event', async (scenario) => {
    const original = await deleteEvent({ id: scenario.event.one.id })
    const result = await event({ id: original.id })

    expect(result).toEqual(null)
  })
})
