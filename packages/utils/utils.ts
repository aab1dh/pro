export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (typeof middle !== 'undefined' ? ` ${middle}` : '') +
    (typeof last !== 'undefined' ? ` ${last}` : '')
  );
}
