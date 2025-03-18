import { formatDate } from '../utils/formatDate';

describe('formatDate function', () => {
  it('formats date in short format by default', () => {
    const testDate = new Date(2023, 0, 15); // Jan 15, 2023
    const formatted = formatDate(testDate);
    
    // Handle different browser implementations by checking for parts
    expect(formatted).toContain('Jan');
    expect(formatted).toContain('15');
    expect(formatted).toContain('2023');
  });
  
  it('formats date in long format when specified', () => {
    const testDate = new Date(2023, 0, 15); // Jan 15, 2023
    const formatted = formatDate(testDate, 'long');
    
    // Note: This could vary by browser and locale, so test for parts
    expect(formatted).toContain('January');
    expect(formatted).toContain('15');
    expect(formatted).toContain('2023');
    // Expect a weekday to be present, exact day will depend on machine locale
    expect(formatted).toMatch(/(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)/);
  });
}); 