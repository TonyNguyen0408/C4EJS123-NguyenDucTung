// 1. Cho 1 chuỗi str_input. Viết chương trình đảo ngược chuỗi và in ra kết quả.
// let str_input = prompt('Enter the string');
// let str_output = '';
// for (let i = str_input.length - 1; i >= 0; i--){
//     str_output += str_input[i];
// }
// alert(`String reverse result : ${str_output}`);

// 2. Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa. 
// let str = prompt('Enter the string')
// let strUpperCase =  str[0].toUpperCase() + str.slice(1);
// alert(strUpperCase);

// 3. Viết một chương trình xóa các phần tử trùng của một mảng và in ra kết quả.
// let arr = prompt('Enter the array, separated by commas(,)');
// let str = arr.split(',');
// let set = new Set(str);
// let newArr = Array.from(set);
// alert(newArr);

// 4. Tạo dữ liệu của 3 nhân viên mindX (gồm tên, tuổi, mức lương, chức vụ). Xây dựng chương trình quản lý nhân viên với các chức năng (Read, Create, Update, Delete).
const employees = [
    {
    Name : 'Trieu Dinh',
    Age : 37,
    Salary : 2000, 
    Title: 'Teacher',
    },
    {
    Name : 'Tong Quang Thanh',
    Age : 27,
    Salary : 1000, 
    Title: 'Tutor',
    },
    {
    Name : 'Hoang Oanh',
    Age : 24,
    Salary : 1000, 
    Title: 'Assistant',
    },    
];
let option = prompt('Hi there, welcome to MindX employees database, what do you want (Read, Create, Update, Delete) ?');
    if((option == 'Read')){
        console.log('The current employees are:')
        for (let i = 0; i < employees.length; i++){
            console.log(`${Object.keys(employees[i])[0]} : ${employees[i].Name}`);
            console.log(`${Object.keys(employees[i])[1]} : ${employees[i].Age}`);
            console.log(`${Object.keys(employees[i])[2]} : ${employees[i].Salary}`);
            console.log(`${Object.keys(employees[i])[3]} : ${employees[i].Title}`);
        }
    }else if((option == 'Create')){        
        const newEmployee = [];
        for (let i = 0 ; i < employees.length ; i++ ){
            let createEmployee = employees[i][Object.keys(employees[i])[4]];
            newEmployee.push(createEmployee);
        }
        nameNewEmployee = prompt('Enter the name of the new employee');   
        for (let x of employees){
            if(x.Name === nameNewEmployee){  
                console.log(`${Object.keys(employees[i])[0]} : ${employees[i].Name}`);
                console.log(`${Object.keys(employees[i])[1]} : ${employees[i].Age}`);
                console.log(`${Object.keys(employees[i])[2]} : ${employees[i].Salary}`);
                console.log(`${Object.keys(employees[i])[3]} : ${employees[i].Title}`);
            }    
        }
        alert('Done');
    }else if((option == 'Update')){
        updateEmployee = prompt('Enter the position you want to update');
        updateEmployee = prompt('Enter the new name');
        employees[updateEmployee] = updateEmployee;
        alert('Done');
    }else if((option == 'Delete')){
        deleteEmployee = prompt('Enter the position you want to delete');
        employees.splice(deleteEmployee-1,1);
        alert('Done');
    }else{
        alert('This command is not supported');
    }
