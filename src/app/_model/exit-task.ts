export interface employee{
    employeeId:number
    employeeName:string,
    completedTasks: string,
    completedTaskTime: string,
    completedTaskDate: string,
    exitReason: string,
    exitDate: string,
    tasks : Array<
        {
            taskTitle ?: string,
            assignedDepartment ?: string,
            assignedTo ?: string,
            isTaskCompleted ?: boolean,
            description ?: string, 
        }>
    

}


export const SCHEMA: employee[]=[
  {employeeId: 102 , employeeName: 'Alexander Leslie' , completedTasks:'2/3' , completedTaskTime:'2:00 pm', completedTaskDate : 'Jun 5, 2024', exitReason: 'resignation' , exitDate:'Dec 5, 2024', tasks:[{taskTitle:'Submit Laptop' ,assignedDepartment : 'IT', assignedTo :'John Doe', isTaskCompleted:false, description:'Submit laptop to IT department'}, {taskTitle:'Submit Laptop' ,assignedDepartment : 'HR', assignedTo :'John Doe', isTaskCompleted:true, description:'Submit laptop to IT department'}] },
  {employeeId: 103 , employeeName: 'Travis Scott' , completedTasks:'1/3' , completedTaskTime:'2:30 pm', completedTaskDate : 'may 5, 2024', exitReason: 'resignation' , exitDate:'Dec 5, 2024'    ,  tasks:[{taskTitle:'Submit Laptop' ,assignedDepartment : 'IT', assignedTo :'Micheal Henry', isTaskCompleted:true, description:'Submit laptop to IT department'}] },
  {employeeId: 104 , employeeName: 'Jimmy Anderson' , completedTasks:'1/3' , completedTaskTime:'2:30 pm', completedTaskDate : 'may 5, 2024', exitReason: 'resignation' , exitDate:'Dec 5, 2024'     , tasks:[{taskTitle:'Submit Laptop' ,assignedDepartment : 'IT', assignedTo :'Sophie turner', isTaskCompleted:false, description:'Submit laptop to IT department'}] },
  {employeeId: 105 , employeeName: 'Peter Parker' , completedTasks:'1/3' , completedTaskTime:'2:30 pm', completedTaskDate : 'may 5, 2024', exitReason: 'resignation' , exitDate:'Dec 5, 2024'     , tasks:[{taskTitle:'Submit Laptop' ,assignedDepartment : 'IT', assignedTo :'Kevin Owens', isTaskCompleted:true, description:'Submit laptop to IT department'}] },
  {employeeId: 106 , employeeName: 'XXXtentacion' , completedTasks:'1/3' , completedTaskTime:'2:30 pm', completedTaskDate : 'may 5, 2024', exitReason: 'resignation' , exitDate:'Dec 5, 2024'     , tasks:[{taskTitle:'Submit Laptop' ,assignedDepartment : 'IT', assignedTo :'John Doe', isTaskCompleted:true, description:'Submit laptop to IT department'}, {taskTitle:'Submit Laptop' ,assignedDepartment : 'HR', assignedTo :'John Doe', isTaskCompleted:true, description:'Submit laptop to IT department'}] },
  
  
  {employeeId: 102 , employeeName: 'Alexander Leslie' , completedTasks:'2/3' , completedTaskTime:'2:00 pm', completedTaskDate : 'Jun 5, 2024', exitReason: 'resignation' , exitDate:'Dec 5, 2024', tasks:[{taskTitle:'Submit Laptop' ,assignedDepartment : 'IT', assignedTo :'John Doe', isTaskCompleted:false, description:'Submit laptop to IT department'}, {taskTitle:'Submit Laptop' ,assignedDepartment : 'HR', assignedTo :'John Doe', isTaskCompleted:true, description:'Submit laptop to IT department'}] },
  {employeeId: 103 , employeeName: 'Travis Scott' , completedTasks:'1/3' , completedTaskTime:'2:30 pm', completedTaskDate : 'may 5, 2024', exitReason: 'resignation' , exitDate:'Dec 5, 2024'    ,  tasks:[{taskTitle:'Submit Laptop' ,assignedDepartment : 'IT', assignedTo :'Micheal Henry', isTaskCompleted:true, description:'Submit laptop to IT department'}] },
  {employeeId: 104 , employeeName: 'Jimmy Anderson' , completedTasks:'1/3' , completedTaskTime:'2:30 pm', completedTaskDate : 'may 5, 2024', exitReason: 'resignation' , exitDate:'Dec 5, 2024'     , tasks:[{taskTitle:'Submit Laptop' ,assignedDepartment : 'IT', assignedTo :'Sophie turner', isTaskCompleted:false, description:'Submit laptop to IT department'}] },
  {employeeId: 105 , employeeName: 'Peter Parker' , completedTasks:'1/3' , completedTaskTime:'2:30 pm', completedTaskDate : 'may 5, 2024', exitReason: 'resignation' , exitDate:'Dec 5, 2024'     , tasks:[{taskTitle:'Submit Laptop' ,assignedDepartment : 'IT', assignedTo :'Kevin Owens', isTaskCompleted:true, description:'Submit laptop to IT department'}] },
  {employeeId: 106 , employeeName: 'XXXtentacion' , completedTasks:'1/3' , completedTaskTime:'2:30 pm', completedTaskDate : 'may 5, 2024', exitReason: 'resignation' , exitDate:'Dec 5, 2024'     , tasks:[{taskTitle:'Submit Laptop' ,assignedDepartment : 'IT', assignedTo :'John Doe', isTaskCompleted:true, description:'Submit laptop to IT department'}, {taskTitle:'Submit Laptop' ,assignedDepartment : 'HR', assignedTo :'John Doe', isTaskCompleted:true, description:'Submit laptop to IT department'}] },
  
  {employeeId: 102 , employeeName: 'Alexander Leslie' , completedTasks:'2/3' , completedTaskTime:'2:00 pm', completedTaskDate : 'Jun 5, 2024', exitReason: 'resignation' , exitDate:'Dec 5, 2024', tasks:[{taskTitle:'Submit Laptop' ,assignedDepartment : 'IT', assignedTo :'John Doe', isTaskCompleted:false, description:'Submit laptop to IT department'}, {taskTitle:'Submit Laptop' ,assignedDepartment : 'HR', assignedTo :'John Doe', isTaskCompleted:true, description:'Submit laptop to IT department'}] },
  {employeeId: 103 , employeeName: 'Travis Scott' , completedTasks:'1/3' , completedTaskTime:'2:30 pm', completedTaskDate : 'may 5, 2024', exitReason: 'resignation' , exitDate:'Dec 5, 2024'    ,  tasks:[{taskTitle:'Submit Laptop' ,assignedDepartment : 'IT', assignedTo :'Micheal Henry', isTaskCompleted:true, description:'Submit laptop to IT department'}] },
  {employeeId: 104 , employeeName: 'Jimmy Anderson' , completedTasks:'1/3' , completedTaskTime:'2:30 pm', completedTaskDate : 'may 5, 2024', exitReason: 'resignation' , exitDate:'Dec 5, 2024'     , tasks:[{taskTitle:'Submit Laptop' ,assignedDepartment : 'IT', assignedTo :'Sophie turner', isTaskCompleted:false, description:'Submit laptop to IT department'}] },
  {employeeId: 105 , employeeName: 'Peter Parker' , completedTasks:'1/3' , completedTaskTime:'2:30 pm', completedTaskDate : 'may 5, 2024', exitReason: 'resignation' , exitDate:'Dec 5, 2024'     , tasks:[{taskTitle:'Submit Laptop' ,assignedDepartment : 'IT', assignedTo :'Kevin Owens', isTaskCompleted:true, description:'Submit laptop to IT department'}] },
  {employeeId: 106 , employeeName: 'XXXtentacion' , completedTasks:'1/3' , completedTaskTime:'2:30 pm', completedTaskDate : 'may 5, 2024', exitReason: 'resignation' , exitDate:'Dec 5, 2024'     , tasks:[{taskTitle:'Submit Laptop' ,assignedDepartment : 'IT', assignedTo :'John Doe', isTaskCompleted:true, description:'Submit laptop to IT department'}, {taskTitle:'Submit Laptop' ,assignedDepartment : 'HR', assignedTo :'John Doe', isTaskCompleted:true, description:'Submit laptop to IT department'}] },
  
  {employeeId: 102 , employeeName: 'Alexander Leslie' , completedTasks:'2/3' , completedTaskTime:'2:00 pm', completedTaskDate : 'Jun 5, 2024', exitReason: 'resignation' , exitDate:'Dec 5, 2024', tasks:[{taskTitle:'Submit Laptop' ,assignedDepartment : 'IT', assignedTo :'John Doe', isTaskCompleted:false, description:'Submit laptop to IT department'}, {taskTitle:'Submit Laptop' ,assignedDepartment : 'HR', assignedTo :'John Doe', isTaskCompleted:true, description:'Submit laptop to IT department'}] },
  {employeeId: 103 , employeeName: 'Travis Scott' , completedTasks:'1/3' , completedTaskTime:'2:30 pm', completedTaskDate : 'may 5, 2024', exitReason: 'resignation' , exitDate:'Dec 5, 2024'    ,  tasks:[{taskTitle:'Submit Laptop' ,assignedDepartment : 'IT', assignedTo :'Micheal Henry', isTaskCompleted:true, description:'Submit laptop to IT department'}] },
  {employeeId: 104 , employeeName: 'Jimmy Anderson' , completedTasks:'1/3' , completedTaskTime:'2:30 pm', completedTaskDate : 'may 5, 2024', exitReason: 'resignation' , exitDate:'Dec 5, 2024'     , tasks:[{taskTitle:'Submit Laptop' ,assignedDepartment : 'IT', assignedTo :'Sophie turner', isTaskCompleted:false, description:'Submit laptop to IT department'}] },
  {employeeId: 105 , employeeName: 'Peter Parker' , completedTasks:'1/3' , completedTaskTime:'2:30 pm', completedTaskDate : 'may 5, 2024', exitReason: 'resignation' , exitDate:'Dec 5, 2024'     , tasks:[{taskTitle:'Submit Laptop' ,assignedDepartment : 'IT', assignedTo :'Kevin Owens', isTaskCompleted:true, description:'Submit laptop to IT department'}] },
  {employeeId: 106 , employeeName: 'XXXtentacion' , completedTasks:'1/3' , completedTaskTime:'2:30 pm', completedTaskDate : 'may 5, 2024', exitReason: 'resignation' , exitDate:'Dec 5, 2024'     , tasks:[{taskTitle:'Submit Laptop' ,assignedDepartment : 'IT', assignedTo :'John Doe', isTaskCompleted:true, description:'Submit laptop to IT department'}, {taskTitle:'Submit Laptop' ,assignedDepartment : 'HR', assignedTo :'John Doe', isTaskCompleted:true, description:'Submit laptop to IT department'}] },
  

]