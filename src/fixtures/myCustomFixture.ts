import {test as baseTest}  from "@playwright/test"

type MyFixtures= {
    fixture1:any;
}

baseTest.extend<MyFixtures>({
    fixture1: async({}, use)=>{
        const fixture1 = "I am Fixture 1";
        console.log('Before part of fixture 1');
        await use(fixture1)
        
    }
})