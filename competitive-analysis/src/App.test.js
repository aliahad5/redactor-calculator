import { renderToString } from 'react-dom/server';
import App from './App';

test('renders pricing recommendation section', () => {
  const html = renderToString(<App />);
  expect(html).toContain('Competitive Pricing Analysis');
  expect(html).toContain('How Sighthound Redactor Compares');
});
