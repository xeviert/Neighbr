const App = require('./App');

describe('App Component', () => {
    test('render', () => {
      const { wrapper } = setup()
      expect(wrapper).toMatchSnapshot()
    })
  });