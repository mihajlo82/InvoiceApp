export const generete_id = () => {
    //just for testing purposes - in production mode I would use some library
    const rand1 = Math.random();
    const rand2 = Math.random();
    const rand3 = Math.random();
    
    const id = rand1.toString() + rand2.toString() + rand3.toString();
    return id;
}