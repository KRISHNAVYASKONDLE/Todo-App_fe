const person={
 
        name: 'Krishna vyas',
        address:
        {
            line1:'13-4-249,bommalgudi',
            city:'warangal',
            zipcode:'506002'
        },
        profiles:['twitter','fb','youtube'],   
        printProfile: () =>
        {
            person.profiles.map(
                (profile)=>
             console.log(profile)
            
            )
        }
}

export default function LearnJs()
{
    return(
        <>
        <div className="LearnJs">{person.profiles[0]}</div>
        <div className="LearnJs">{person.printProfile()}</div>
        
        </>
    )
}