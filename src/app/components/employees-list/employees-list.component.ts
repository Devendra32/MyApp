import { Component, OnInit } from '@angular/core';
import { Employee } from '../../employee'

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [
    {
        "id": 1, "name": "John Smith", "age": 35, "email": "john.smith@example.com", "phone": "(123) 456-7890", "address": "123 Main St.", "city": "Anytown", "state": "CA", "zip": "12345", "country": "USA", "occupation": "Engineer", "company": "ABC Inc.", "salary": 100000, "start_date": "2020-01-01", "end_date": "NA","status": "Active", "department": "Engineering", "supervisor": "Jane Doe", "favorite_color": "Red", "language": "English", "column21":"abc", "column22":"abc", "column23":"abc", "column24":"abc", "column25":"abc", "column26":"abc"
    },
    {
        "id": 1, "name": "John Smith", "age": 35, "email": "john.smith@example.com", "phone": "(123) 456-7890", "address": "123 Main St.", "city": "Anytown", "state": "CA", "zip": "12345", "country": "USA", "occupation": "Engineer", "company": "ABC Inc.", "salary": 100000, "start_date": "2020-01-01", "end_date": "NA","status": "Active", "department": "Engineering", "supervisor": "Jane Doe", "favorite_color": "Red", "language": "English", "column21":"abc", "column22":"abc", "column23":"abc", "column24":"abc", "column25":"abc", "column26":"abc"
    },
    {
        "id": 1, "name": "John Smith", "age": 35, "email": "john.smith@example.com", "phone": "(123) 456-7890", "address": "123 Main St.", "city": "Anytown", "state": "CA", "zip": "12345", "country": "USA", "occupation": "Engineer", "company": "ABC Inc.", "salary": 100000, "start_date": "2020-01-01", "end_date": "NA","status": "Active", "department": "Engineering", "supervisor": "Jane Doe", "favorite_color": "Red", "language": "English", "column21":"abc", "column22":"abc", "column23":"abc", "column24":"abc", "column25":"abc", "column26":"abc"
    },
    {
        "id": 1, "name": "John Smith", "age": 35, "email": "john.smith@example.com", "phone": "(123) 456-7890", "address": "123 Main St.", "city": "Anytown", "state": "CA", "zip": "12345", "country": "USA", "occupation": "Engineer", "company": "ABC Inc.", "salary": 100000, "start_date": "2020-01-01", "end_date": "NA","status": "Active", "department": "Engineering", "supervisor": "Jane Doe", "favorite_color": "Red", "language": "English", "column21":"abc", "column22":"abc", "column23":"abc", "column24":"abc", "column25":"abc", "column26":"abc"
    },
    {
        "id": 1, "name": "John Smith", "age": 35, "email": "john.smith@example.com", "phone": "(123) 456-7890", "address": "123 Main St.", "city": "Anytown", "state": "CA", "zip": "12345", "country": "USA", "occupation": "Engineer", "company": "ABC Inc.", "salary": 100000, "start_date": "2020-01-01", "end_date": "NA","status": "Active", "department": "Engineering", "supervisor": "Jane Doe", "favorite_color": "Red", "language": "English", "column21":"abc", "column22":"abc", "column23":"abc", "column24":"abc", "column25":"abc", "column26":"abc"
    },
    {
        "id": 1, "name": "John Smith", "age": 35, "email": "john.smith@example.com", "phone": "(123) 456-7890", "address": "123 Main St.", "city": "Anytown", "state": "CA", "zip": "12345", "country": "USA", "occupation": "Engineer", "company": "ABC Inc.", "salary": 100000, "start_date": "2020-01-01", "end_date": "NA","status": "Active", "department": "Engineering", "supervisor": "Jane Doe", "favorite_color": "Red", "language": "English", "column21":"abc", "column22":"abc", "column23":"abc", "column24":"abc", "column25":"abc", "column26":"abc"
    },
    {
        "id": 1, "name": "John Smith", "age": 35, "email": "john.smith@example.com", "phone": "(123) 456-7890", "address": "123 Main St.", "city": "Anytown", "state": "CA", "zip": "12345", "country": "USA", "occupation": "Engineer", "company": "ABC Inc.", "salary": 100000, "start_date": "2020-01-01", "end_date": "NA","status": "Active", "department": "Engineering", "supervisor": "Jane Doe", "favorite_color": "Red", "language": "English", "column21":"abc", "column22":"abc", "column23":"abc", "column24":"abc", "column25":"abc", "column26":"abc"
    },
    {
        "id": 1, "name": "John Smith", "age": 35, "email": "john.smith@example.com", "phone": "(123) 456-7890", "address": "123 Main St.", "city": "Anytown", "state": "CA", "zip": "12345", "country": "USA", "occupation": "Engineer", "company": "ABC Inc.", "salary": 100000, "start_date": "2020-01-01", "end_date": "NA","status": "Active", "department": "Engineering", "supervisor": "Jane Doe", "favorite_color": "Red", "language": "English", "column21":"abc", "column22":"abc", "column23":"abc", "column24":"abc", "column25":"abc", "column26":"abc"
    },
    {
        "id": 1, "name": "John Smith", "age": 35, "email": "john.smith@example.com", "phone": "(123) 456-7890", "address": "123 Main St.", "city": "Anytown", "state": "CA", "zip": "12345", "country": "USA", "occupation": "Engineer", "company": "ABC Inc.", "salary": 100000, "start_date": "2020-01-01", "end_date": "NA","status": "Active", "department": "Engineering", "supervisor": "Jane Doe", "favorite_color": "Red", "language": "English", "column21":"abc", "column22":"abc", "column23":"abc", "column24":"abc", "column25":"abc", "column26":"abc"
    },
    {
        "id": 1, "name": "John Smith", "age": 35, "email": "john.smith@example.com", "phone": "(123) 456-7890", "address": "123 Main St.", "city": "Anytown", "state": "CA", "zip": "12345", "country": "USA", "occupation": "Engineer", "company": "ABC Inc.", "salary": 100000, "start_date": "2020-01-01", "end_date": "NA","status": "Active", "department": "Engineering", "supervisor": "Jane Doe", "favorite_color": "Red", "language": "English", "column21":"abc", "column22":"abc", "column23":"abc", "column24":"abc", "column25":"abc", "column26":"abc"
    },
    {
        "id": 1, "name": "John Smith", "age": 35, "email": "john.smith@example.com", "phone": "(123) 456-7890", "address": "123 Main St.", "city": "Anytown", "state": "CA", "zip": "12345", "country": "USA", "occupation": "Engineer", "company": "ABC Inc.", "salary": 100000, "start_date": "2020-01-01", "end_date": "NA","status": "Active", "department": "Engineering", "supervisor": "Jane Doe", "favorite_color": "Red", "language": "English", "column21":"abc", "column22":"abc", "column23":"abc", "column24":"abc", "column25":"abc", "column26":"abc"
    },
    {
        "id": 1, "name": "John Smith", "age": 35, "email": "john.smith@example.com", "phone": "(123) 456-7890", "address": "123 Main St.", "city": "Anytown", "state": "CA", "zip": "12345", "country": "USA", "occupation": "Engineer", "company": "ABC Inc.", "salary": 100000, "start_date": "2020-01-01", "end_date": "NA","status": "Active", "department": "Engineering", "supervisor": "Jane Doe", "favorite_color": "Red", "language": "English", "column21":"abc", "column22":"abc", "column23":"abc", "column24":"abc", "column25":"abc", "column26":"abc"
    },
    {
        "id": 1, "name": "John Smith", "age": 35, "email": "john.smith@example.com", "phone": "(123) 456-7890", "address": "123 Main St.", "city": "Anytown", "state": "CA", "zip": "12345", "country": "USA", "occupation": "Engineer", "company": "ABC Inc.", "salary": 100000, "start_date": "2020-01-01", "end_date": "NA","status": "Active", "department": "Engineering", "supervisor": "Jane Doe", "favorite_color": "Red", "language": "English", "column21":"abc", "column22":"abc", "column23":"abc", "column24":"abc", "column25":"abc", "column26":"abc"
    }
]
  cols!: any[]

  constructor() { }

  ngOnInit() {

    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'name', header: 'name' },
      { field: 'age', header: 'age' },
      { field: 'email', header: 'email' },
      { field: 'phone', header: 'phone' },
      { field: 'address', header: 'address' },
      { field: 'city', header: 'city' },
      { field: 'state', header: 'state' },
      { field: 'zip', header: 'zip' },
      { field: 'country', header: 'country' },
      { field: 'occupation', header: 'occupation' },
      { field: 'company', header: 'company' },
      { field: 'salary', header: 'salary' },
      { field: 'start_date', header: 'start_date' },
      { field: 'end_date', header: 'end_date' },
      { field: 'status', header: 'status' },
      { field: 'department', header: 'department' },
      { field: 'supervisor', header: 'supervisor' },
      { field: 'favorite_color', header: 'favorite_color' },
      { field: 'language', header: 'language' },
      { field: 'column21', header: 'column21' },
      { field: 'column22', header: 'column22' },
      { field: 'column23', header: 'column23' },
      { field: 'column24', header: 'column24' },
      { field: 'column25', header: 'column25' },
      { field: 'column26', header: 'column26' },

    ];

  }
}
