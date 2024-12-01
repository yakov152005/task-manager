import React from "react";
import Task from "./Task";

class SprintBoard extends React.Component {
    state = {
        title: "My Sprint",
        tasks: [
            {title: "Task 1", status: 0, assignee: 0},
            {title: "Task 2", status: 0, assignee: 0}
        ],
        teamMembers: [
            {name: "Yakov", id: 1},
            {name: "Ido", id: 2},
            {name: "Amir", id: 3},
            {name: "Lior", id: 4},
            {name: "Toni", id: 5}
        ],
        newMembersName: "",
        addNewTask: ""
    }

    /*
    statusChanged = (index, newStatus) => {
        const current = this.state.tasks;
        const item = current[index];
        item.status = newStatus;
        this.setState({
            tasks: current
        })
    }

    assigneeChanged = (index, newAssignee) => {
        const current = this.state.tasks;
        const item = current[index];
        item.assignee = newAssignee;
        this.setState({
            tasks: current
        })
    }
     */

    taskChanged = (index, filed, value) => {
        const current = this.state.tasks;
        const item = current[index];
        item[filed] = value;
        this.setState({
            tasks: current
        });
    }

    newTeamMemberNameChange = (event) => {
        this.setState({
            newMembersName: event.target.value
        });
    }

    addTeamMember = () => {
        const current = this.state.teamMembers;
        current.push({
            name: this.state.newMembersName,
            id: current.length + 1
        });
        this.setState({
            teamMembers: current,
            newMembersName: ""
        });
    }

    addNewTaskChanged = (event) => {
        this.setState({
            addNewTask: event.target.value
        });
    }

    addTask = () => {
        const current = this.state.tasks;
        current.push({
            title: this.state.addNewTask,
            status: 0,
            assignee: 0
        })
        this.setState({
            tasks: current,
            addNewTask: ""
        })

    }

    render() {
        return (
            <div>
                <div><h5>Add Team Members:</h5>
                    <input onChange={this.newTeamMemberNameChange} placeholder={"Name"}
                           value={this.state.newMembersName}/>
                    <button
                        onClick={this.addTeamMember}
                        disabled={this.state.newMembersName.length === 0}>Add Team Member
                    </button>
                </div>
                <div><h5>Add New Task:</h5>
                    <input onChange={this.addNewTaskChanged}
                           placeholder={"Add Task"}
                           value={this.state.addNewTask}
                    />
                    <button onClick={this.addTask}
                            disabled={this.state.addNewTask.length === 0}>
                        Add Task
                    </button>
                </div><br/><br/>
                <div style={{fontSize: "20px", fontWeight: "bold"}}>
                    {this.state.title}
                </div>
                {
                    this.state.tasks.length === 0 ?
                        <div>Nothing to do.</div> :
                        <div>
                            {
                                this.state.tasks.map((task, index) => {
                                    return (
                                        <div>
                                            <Task
                                                index={index}
                                                data={task}
                                                teamMembers={this.state.teamMembers}
                                                update={this.taskChanged}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                }
            </div>
        )
    }
}

export default SprintBoard;