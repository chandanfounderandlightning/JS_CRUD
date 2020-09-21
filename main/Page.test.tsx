import { mountComponentWithStore } from '../../common/test/ComponentHelper';
import Page from './Page';

describe('app/main/Page', () => {
  it('renders without crashing', () => {
    mountComponentWithStore(Page);
  });
});
