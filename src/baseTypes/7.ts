/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
// enum WeekDays {
//   Mon = "monday",
//   Tue = "tuesday",
//  Wed = "wednesday",
//   Thu = "thursday",
//   Fri = "friday",
//   Sat = "saturday",
//   Sun = "sunday"
// }
enum WeekDays {
  Mon ,
  Tue,
 Wed ,
  Thu ,
  Fri ,
  Sat ,
  Sun      
}
function isWeekend(weekdays: WeekDays): boolean {
    return weekdays !== WeekDays.Sat && weekdays !== WeekDays.Sun ? true : false;
}