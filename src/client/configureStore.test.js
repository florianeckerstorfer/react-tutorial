import configureStore, { getMessage, getMessageAsync } from './configureStore'

let state

beforeEach(() => {
  const store = configureStore({ hello: undefined })
  state = store.getState()
})

test('configureStore returns Redux store', () => {
  const store = configureStore({ hello: undefined })
  expect(store.dispatch).not.toBeFalsy()
  expect(store.getState).not.toBeFalsy()
  expect(store.subscribe).not.toBeFalsy()
  expect(store.replaceReducer).not.toBeFalsy()
})

test('configureStore accepts preloaded state', () => {
  const store = configureStore({ hello: { message: 'foobar' } })
  expect(store.getState().hello.get('message')).toBe('foobar')
})

test('getMessage returns message from hello state', () => {
  const message = getMessage(state)
  expect(message).toBe('Initial reducer message')
})

test('getMessageAsync returns messageAsync from hello state', () => {
  const message = getMessageAsync(state)
  expect(message).toBe('Initial reducer message for async call')
})
