import { formatTime } from "../../helpers/formatTime";  

describe('formatTime', () => {
  it('formats 0 seconds correctly', () => {
    expect(formatTime(0)).toBe('00:00');
  });

  it('formats seconds less than 10', () => {
    expect(formatTime(5)).toBe('00:05');
    expect(formatTime(9)).toBe('00:09');
  });

  it('formats seconds between 10 and 59', () => {
    expect(formatTime(15)).toBe('00:15');
    expect(formatTime(59)).toBe('00:59');
  });

  it('formats exactly 60 seconds as 1 minute', () => {
    expect(formatTime(60)).toBe('01:00');
  });

  it('formats minutes and seconds correctly', () => {
    expect(formatTime(125)).toBe('02:05');  
    expect(formatTime(3599)).toBe('59:59'); 
  });

  it('formats large numbers of seconds correctly', () => {
    expect(formatTime(3600)).toBe('60:00'); 
    expect(formatTime(3661)).toBe('61:01'); 
  });

  it('handles negative numbers by treating them as 0', () => {
    expect(formatTime(-5)).toBe('00:00');
    expect(formatTime(-100)).toBe('00:00');
  });

  it('handles floating point numbers by truncating them', () => {
    expect(formatTime(59.999)).toBe('00:59');
    expect(formatTime(125.5)).toBe('02:05');
  });
});