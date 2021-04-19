//making arrangements for terminal input 
const prompt = require('prompt-sync')();

console.log("What would you like to do ?");
let choice = 0, tasks=[], i = 0;
while(choice!=4){
    choice = prompt("\n1.New\t2.Display List\t3.Delete\t4.Quit\n");
    if(choice == 1){
        tasks[i] = prompt("\nWhat would you like to do ?");
        i++;
    }
    else if(choice == 2){
        for(j in tasks)
            console.log(j)
    }
    else if(choice == 3){
        let x = prompt("\nWhich task number would you like to delete out of the "+i+" tasks ?");
        tasks.splice(i,1);
        i--;
    }
    else if(choice == 4){
        console.log("\nThank you");
    }
    else
    console.log("\nInvalid choice")
}