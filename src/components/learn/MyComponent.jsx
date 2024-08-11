//component = html + css + js

import './style.css'

const MyComponent = () => {
    //  This call fragment because only return 1 element only 
    let testVar = `Dallot learning IT`;
    console.log(`Check logger console in return ${testVar}`);// cannot try another below

    //printing only accept number and string

    //if really want to print on html return => JSON.stringify(<<variable>>);

    return (
        <>
            <div>{console.log(`This is test logger using fragment + {}`)}</div>
            <div className="testChild"
                style={
                    { borderRadius: "10px" }
                }
            >Khoi Ngo dang hoc reacjs for client mindset {testVar}</div>

        </>
    );
}

export default MyComponent;