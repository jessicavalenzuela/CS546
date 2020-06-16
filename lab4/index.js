const animals = require("./data/animals");
const connection = require("./mongoConnection")

const main = async () => {
    const sasha = await animals.create("Sasha", "Dog");
    console.log("-------------Sasha is a newly created animal!-------------")
    console.log(sasha);

    const lucy = await animals.create("Lucy", "Dog")
    console.log("-------------Lucy is a newly created animal!-------------")

    const allAnimals = await animals.getAll()
    console.log(allAnimals);

    const duke = await animals.create("Duke", "Walrus")
    console.log("-------------Duke is a newly created animal!-------------")
    console.log(duke)

    const sashita = await animals.rename(sasha._id, "Sashita")
    console.log("--------------Sasha was renamed to Shashita--------------")
    console.log(sashita)
    

    const removeLucy = await animals.remove(lucy._id)
    console.log("--------------------Lucy was removed---------------------")

    const newallAnimals = await animals.getAll()
    console.log(newallAnimals);

    const db = await connection();
    await db.serverConfig.close();
}
main().catch(error =>{
    console.log(error)
})