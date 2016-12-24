
This is a microservice which returns the date in natural language form as well as the corresponding unix timestamp form.


Example usage:

1 - Pass in a unix timestamp, and get back the date in both formats:
e.g: 
https://git-fcc-srini5.c9users.io/1450539600000
{"unix":1450539600000,"natural":"December 19, 2015"}

2 - Pass in a human readable date, and get back the date in both formats
(Note that any spaces will get replaced by %20 by the browser automatically):
If date is given as numbers separated by dashes, it will be interpreted as MM-DD-YYYY or YYYY-MM-DD by default
If month name is spelled out, either a three character month name or full name is acceptable.

e.g:
https://git-fcc-srini5.c9users.io/Dec%201,%201987
{"unix":565315200000,"natural":"December 1, 1987"}

https://git-fcc-srini5.c9users.io/December%201,%201987
{"unix":565315200000,"natural":"December 1, 1987"}

https://git-fcc-srini5.c9users.io/12-31-1991
{"unix":694137600000,"natural":"December 31, 1991"}





User Story: I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).

User Story: If it does, it returns both the Unix timestamp and the natural language form of that date.

User Story: If it does not contain a date or Unix timestamp, it returns null for those properties.



