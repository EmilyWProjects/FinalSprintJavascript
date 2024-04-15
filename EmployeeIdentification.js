fetch('./EmployeeIdentification.json')


  .then(response => response.json())
  .then(data => {

    const container = document.createElement('div');
    container.id = 'employeeContainer';
    
    data.forEach(employee => {

      const employeeDiv = document.createElement('div');
      employeeDiv.className = 'employee';

      employeeDiv.innerHTML = `
        <h2>${getFullName(employee)}</h2>
        <p>${getAge(employee)}</p>
        <p>${getEmployer(employee)}</p>
        <p>${getOrder(employee)}</p>
      `;

      container.appendChild(employeeDiv);

      console.log(getFullName(employee));
      console.log(getAge(employee));
      console.log(getEmployer(employee));
      console.log(getOrder(employee));
    });

    document.body.appendChild(container);
  })

  .catch(error => {
    console.error(error);
  });


  function getFullName(employee) {
    return `${employee.fname} ${employee.lname}`;
  }


  function getEmployer(employee){
    return `They work for ${employee.employer} and their position in the company is ${employee.position}.`;
  }


  function getOrder(employee){
    return `They would like to order a ${employee.order}.`;
  }


  function getAge(employee) {    
    return `${employee.fname} is ${new Date().getFullYear() - 
      new Date(employee.birthday).getFullYear()} years old.`; 
  }