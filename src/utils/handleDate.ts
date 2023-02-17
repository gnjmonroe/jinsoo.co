function handleDate(dateString: string): string {
  const [year, month] = dateString.split('-');
  const handledDate = year === 'ongoing' ? 'ongoing' : `${year}/${month}`;
  return handledDate;
}

export default handleDate;
