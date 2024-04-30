export function withSpaceAndComma(n: string): string {
  return n.replace(/\B(?=(\d{3})+(?!\d))/g, ' ').replace('.', ',');
}
