import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';
//determine if this is actually usable in the next example
describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
