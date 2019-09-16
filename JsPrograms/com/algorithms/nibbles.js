function tree()
{
    console.log("hi kapil asthana")
}
function one()
{

    throw new Error("kapil asthana something went wrong...");
    tree()
}
function two()
{
    try {
        one();
    } catch (error) {
     
    }
  
}

two();