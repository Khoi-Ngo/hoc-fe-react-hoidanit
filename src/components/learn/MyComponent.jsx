//component = html + css + js

import './style.css'

const MyComponent = () => {
    return (
        <>
            // {/* This call fragment because only return 1 element only */}
            <div className="testChild"
                style={
                    { borderRadius: "10px" }
                }
            >Khoi Ngo dang hoc reacjs for client mindset</div>

        </>
    );
}

export default MyComponent;