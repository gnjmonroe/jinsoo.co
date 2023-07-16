export default function handleDate(dateString: string): string {
  const [year, month] = dateString.split('-');

  return year === 'ongoing' ? 'ongoing' : `${year}/${month}`;
}
