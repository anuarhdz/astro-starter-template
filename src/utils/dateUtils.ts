export const getHumanDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return `${date.toLocaleDateString('es', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`;
}

export const getISODate = (dateStr: string) => {
  //console.log(new Date(dateStr).toISOString())
  return new Date(dateStr).toISOString();
  //return new Date(dateStr).toLocaleDateString('es-mx');
}

