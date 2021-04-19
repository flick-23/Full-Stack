//Consider the example
/**
 * If hour is b/w 6am to 12pm -GM
 * If b/w 12 pm to 6pm - GNoon
 * Else GEve
 */
/**Syntax:
 * if (condition)
 * {
 *      Statements;
 * }
 * else if (condition)
 * {
 *      Statements;
 * }
 * .
 * .
 * else if(condition)
 * {
 *      Statement N;
 * }
 * else
 * {
 *      Statements;
 * }
 */
let hour = 14;
if(hour >=6 && hour<12)
{
    console.log('Good morning!');
}
else if(hour>=12 && hour<=18)
{
    console.log('Good afternoon!');
}
else
{
    console.log('Good Evening!');
}