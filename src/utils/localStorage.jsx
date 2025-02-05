const employees = [
    {
      "id": "1",
      "password": "password123",
      "email": "employee1@example.com"
    },
    {
      "id": "2",
      "password": "password456",
      "email": "employee2@example.com"
    },
    {
      "id": "3",
      "password": "password789",
      "email": "employee3@example.com"
    },
    {
      "id": "4",
      "password": "password101",
      "email": "employee4@example.com"
    },
    {
      "id": "5",
      "password": "password202",
      "email": "employee5@example.com"
    }
  ]
  

  const admin = [{
    "id": "1",
    "password": "adminPassword123",
    "email": "admin@example.com"
  }]
  
  export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
  }

  export const getLocalStorage=()=>{
  const data = localStorage.getItem('employees')
  console.log(JSON.parseData);
  }