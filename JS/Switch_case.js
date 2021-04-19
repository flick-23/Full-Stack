//consider the example
let role='guest';
//see if he is guest, moderator, or admin

switch(role)
{
    case 'guest':   console.log('Guest User');
                    console.log('BYE!');
    break;

    case 'moderator':   console.log('Moderator User');
    break;
    
    case 'admin': console.log('Admin User');
    break;
    // can have as many as you need.
    /**
     * 
     * 
     */
    default :
    console.log("Unknown user BITCH!");
}
/**
 * case values can be even numbers , characters , even boolean (usually not used!)
 * Also note, above logic can be implemented using if else statements
 */