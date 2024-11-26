/* eslint-disable react/prop-types */
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data, changeUser}) => {
  return (
    <div className='h-screen w-full px-2'>
        <Header data={data} changeUser={changeUser}/>
        <TaskListNumbers data={data}/>
        <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard