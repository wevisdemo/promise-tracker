export function transformBoolean(value: string): boolean {
  if (value === 'TRUE') return true;
  return false;
}

export function guardEmptiness(value: string): string | null {
  if (value === '-' || value === '') return null;
  return value;
}
