import { HttpPipe } from './http.pipe';

describe('HttpPipe', () => {
  const pipe = new HttpPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Deve tranformar http em https', () => {
    expect(pipe.transform('http://www.google.com')).toBe('https://www.google.com')
  })
});
