import React from 'react'
import { useTasks } from "../../queries/TaskQuery"
import TaskItem from './TaskItem'

const TaskList: React.VFC = () => {

    const { data:tasks, status } = useTasks() //  const tasks = usetasks().data; const status =usetasks().status
    if (status === 'loading') {
        return <div className="loader" />
    }else if (status === 'error'){
        return <div className="align-center">データの読み込みに失敗しました。</div>
    }else if (!tasks || tasks.length <= 0){
        return <div className="align-center">{status}データがありません</div>
    }

    return (
        <div className="inner">
        <ul className="task-list">
            {tasks.map(task => (
                <TaskItem key={task.id} task={task}/>
            ))}
        </ul>
    </div>
    )
}
export default TaskList


