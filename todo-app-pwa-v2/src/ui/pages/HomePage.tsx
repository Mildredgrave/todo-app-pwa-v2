import TaskForm from "../components/task/TaskForm"
import TaskList from "../components/task/TaskList"
import type {Task} from "../../domain/task/task.type"
import type {Student} from "../../domain/student/student.type"
import StudentInfo from "../components/student/StudentInfo"
import StudentRegisterDialog from "../components/student/StudentRegisterDialog"
import {useState} from 'react';

function HomePage() {
  const [isRegisterDialogOpen, setIsRegisterDialogOpen] = useState(false);

  const addTask = (title: string) => {}
  const onComplete = (id: string) => {}
  const onRegister = async (name: string, studentKey: string) => {}

  const tasks: Task[] = [
    {
      id: '1',
      title: 'Tarea 1',
      completed: false,
      assignedto: '123',
      assignedtoName: 'Juan Perez'
    },
    {
      id: '2',
      title: 'Tarea 2',
      completed: true,
      assignedto: '1234',
      assignedtoName: 'Jerson Quiñonez'
    }
  ]

  const student: Student = {
    id: '123',
    name: 'Juan Perez',
    studentKey: '2026-1'
  }

  const students: Student[] = [
    { 
      id: '123', 
      name: 'Juan Perez', 
      studentKey: '2026-1' 
    },
    { 
      id: '124', 
      name: 'Mildred Grave', 
      studentKey: '2026-1' 
    },
    { 
      id: '125', 
      name: 'Diego Perez', 
      studentKey: '2026-1' 
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-base-200">
      <header className="navbar bg-primary text-primary-content px-4">
        <h1 className="text-lg sm:text-xl font-bold">TO DO App</h1>
      </header>
      <div className="flex-1 w-full max-w-3xl mx-auto p-4 space-y-4">   
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <StudentInfo 
              student={student} 
              onRegisterStudentOpen={() => setIsRegisterDialogOpen(true)} 
            />
          </div>
        </div>  
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <TaskForm addTask={addTask} studentList={students}/>
          </div>
        </div> 
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h3 className="card-title text-base sm:text-lg">
              Lista de tareas
            </h3>
            <TaskList tasks={tasks} onComplete={onComplete} />
          </div>
        </div>
      </div>  
      <StudentRegisterDialog 
        isOpen={isRegisterDialogOpen} 
        onClose={() => setIsRegisterDialogOpen(false)} 
        onRegister={onRegister} 
      />    
      <footer className="footer footer-center p-4 bg-neutral text-neutral-content text-sm">
        UMES
      </footer>
    </div>
  )
}


export default HomePage
