export const formatDate = (dateCode: string | number): string => {
   const date = new Date(dateCode)
   const year = date.getFullYear()
   const month = date.getMonth() + 1
   const day = date.getDate()

   const formatedDay = day < 10 ? `0${day}` : day;
   const formatedMonth = month < 10 ? `0${month}` : month;

   return `${formatedDay}.${formatedMonth}.${year}`
}