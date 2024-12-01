function Task(props) {
    const data = props.data;
    const index = props.index;

    return (
        <div style={{padding: '10px', border: "1px solid black", margin: "10px"}}>
            <div><b>Title: {data.title}</b></div>
            <div><b>Status: {data.status}</b></div>

            <select
                value={data.status}
                onChange={(event) => props.update(index, "status", event.target.value)}>
                <option value={0} disabled={true}>Select Level</option>
                <option value={1}>Open</option>
                <option value={2}>In Progress</option>
                <option value={3}>Waiting For CodReview</option>
                <option value={4}>Uploaded To Production</option>
            </select>

            <select value={data.assignee}
                    onChange={(event) => props.update(index, "assignee", event.target.value)}>
                <option value={0} disabled={true}>Select Assignee</option>
                {
                    props.teamMembers.map(teamMember => (
                        <option value={teamMember.id}>{teamMember.name}</option>
                    ))
                }
            </select>
        </div>
    )

}

export default Task;