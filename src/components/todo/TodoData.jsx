const TodoData = (props) => {
    console.log(`>>>> Check props: ${Object.values(props)}`);
    console.log(props);


    const {name, someOtherData} = props;
    

    return (<>
        <div className='task-list-table'>
            <div>My name is {someOtherData.address}</div>
            <div>{JSON.stringify(name)}</div>
            <div>Learning React</div>
            <div>Coding Java</div>
        </div>
    </>);
}


export default TodoData;