export const schema = gql`
  type Event {
    id: Int!
    title: String!
    location: String
    start: DateTime!
    end: DateTime!
    capacity: Int
    author: User!
    authorId: Int!
    EventsOnUsers: [EventsOnUsers]!
  }

  type Query {
    events: [Event!]! @requireAuth
    event(id: Int!): Event @requireAuth
  }

  input CreateEventInput {
    title: String!
    location: String
    start: DateTime!
    end: DateTime!
    capacity: Int
    authorId: Int!
  }

  input UpdateEventInput {
    title: String
    location: String
    start: DateTime
    end: DateTime
    capacity: Int
    authorId: Int
  }

  type Mutation {
    createEvent(input: CreateEventInput!): Event! @requireAuth
    updateEvent(id: Int!, input: UpdateEventInput!): Event! @requireAuth
    deleteEvent(id: Int!): Event! @requireAuth
  }
`
