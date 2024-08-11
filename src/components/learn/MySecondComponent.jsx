const SecondComponent = () => {
    return (
        <div> This is the SecondComponent from KhoiNgo</div>
    );
}

const AdditionalSecondComponent = () => {
    return (
        <div> This is come from multiple exporting</div>
    );
}
export default SecondComponent;
//or can be exported like this for multiple exporting component

export { SecondComponent, AdditionalSecondComponent }
