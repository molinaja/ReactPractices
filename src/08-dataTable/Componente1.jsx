import * as React from 'react'

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'

import { Table } from './GenericTable';

export const Componente1 = () => {

    const defaultData = [
        { firstName: 'Alice', lastName: 'Smith', age: 30, visits: 50, status: 'Single', progress: 75 },
        { firstName: 'Bob', lastName: 'Johnson', age: 28, visits: 20, status: 'Married', progress: 60 },
        { firstName: 'Charlie', lastName: 'Williams', age: 35, visits: 80, status: 'Single', progress: 90 },
        { firstName: 'David', lastName: 'Brown', age: 40, visits: 45, status: 'Complicated', progress: 55 },
        { firstName: 'Eva', lastName: 'Jones', age: 22, visits: 25, status: 'In Relationship', progress: 65 },
        { firstName: 'Frank', lastName: 'Garcia', age: 31, visits: 70, status: 'Single', progress: 85 },
        { firstName: 'Grace', lastName: 'Martinez', age: 27, visits: 15, status: 'Married', progress: 50 },
        { firstName: 'Hannah', lastName: 'Rodriguez', age: 33, visits: 60, status: 'Complicated', progress: 40 },
        { firstName: 'Ian', lastName: 'Wilson', age: 29, visits: 35, status: 'In Relationship', progress: 70 },
        { firstName: 'Jack', lastName: 'Anderson', age: 42, visits: 90, status: 'Single', progress: 95 },
        { firstName: 'Kara', lastName: 'Thomas', age: 25, visits: 30, status: 'Married', progress: 65 },
        { firstName: 'Liam', lastName: 'Taylor', age: 38, visits: 50, status: 'In Relationship', progress: 80 },
        { firstName: 'Mia', lastName: 'Moore', age: 26, visits: 22, status: 'Single', progress: 55 },
        { firstName: 'Noah', lastName: 'Jackson', age: 32, visits: 75, status: 'Complicated', progress: 45 },
        { firstName: 'Olivia', lastName: 'White', age: 41, visits: 40, status: 'Married', progress: 60 },
        { firstName: 'Paul', lastName: 'Harris', age: 27, visits: 10, status: 'In Relationship', progress: 90 },
        { firstName: 'Quinn', lastName: 'Martin', age: 34, visits: 55, status: 'Single', progress: 70 },
        { firstName: 'Riley', lastName: 'Thompson', age: 39, visits: 20, status: 'Complicated', progress: 50 },
        { firstName: 'Sophie', lastName: 'Garcia', age: 28, visits: 65, status: 'Married', progress: 75 },
        { firstName: 'Tom', lastName: 'Martinez', age: 45, visits: 80, status: 'In Relationship', progress: 85 },
        { firstName: 'Uma', lastName: 'Roberts', age: 24, visits: 25, status: 'Single', progress: 60 },
        { firstName: 'Victor', lastName: 'Walker', age: 30, visits: 50, status: 'Married', progress: 45 },
        { firstName: 'Wendy', lastName: 'Adams', age: 31, visits: 70, status: 'Complicated', progress: 55 },
        { firstName: 'Xander', lastName: 'Green', age: 29, visits: 15, status: 'In Relationship', progress: 90 },
        { firstName: 'Yara', lastName: 'Nelson', age: 35, visits: 40, status: 'Single', progress: 70 },
        { firstName: 'Zach', lastName: 'Carter', age: 37, visits: 25, status: 'Married', progress: 80 },
        { firstName: 'Amy', lastName: 'Mitchell', age: 26, visits: 60, status: 'In Relationship', progress: 65 },
        { firstName: 'Ben', lastName: 'Perez', age: 40, visits: 75, status: 'Complicated', progress: 50 },
        { firstName: 'Cara', lastName: 'Robinson', age: 27, visits: 20, status: 'Single', progress: 55 },
        { firstName: 'Derek', lastName: 'Clark', age: 34, visits: 45, status: 'Married', progress: 60 },
        { firstName: 'Ella', lastName: 'Lewis', age: 28, visits: 30, status: 'In Relationship', progress: 75 },
        { firstName: 'Felix', lastName: 'Lee', age: 36, visits: 50, status: 'Single', progress: 80 },
        { firstName: 'Gina', lastName: 'Young', age: 31, visits: 70, status: 'Married', progress: 85 },
        { firstName: 'Harry', lastName: 'Hernandez', age: 27, visits: 15, status: 'In Relationship', progress: 90 },
        { firstName: 'Ivy', lastName: 'King', age: 32, visits: 60, status: 'Single', progress: 65 },
        { firstName: 'Jason', lastName: 'Scott', age: 40, visits: 80, status: 'Complicated', progress: 55 },
        { firstName: 'Kelsey', lastName: 'Wright', age: 29, visits: 20, status: 'Married', progress: 70 },
        { firstName: 'Leo', lastName: 'Lopez', age: 38, visits: 25, status: 'In Relationship', progress: 85 },
        { firstName: 'Megan', lastName: 'Hill', age: 33, visits: 40, status: 'Single', progress: 60 },
        { firstName: 'Nina', lastName: 'Cruz', age: 26, visits: 55, status: 'Married', progress: 75 },
        { firstName: 'Oscar', lastName: 'Gomez', age: 31, visits: 35, status: 'Complicated', progress: 50 },
        { firstName: 'Paula', lastName: 'James', age: 28, visits: 70, status: 'In Relationship', progress: 90 },
        { firstName: 'Quincy', lastName: 'Bennett', age: 45, visits: 15, status: 'Single', progress: 70 },
        { firstName: 'Rita', lastName: 'Morris', age: 30, visits: 50, status: 'Married', progress: 85 },
        { firstName: 'Steve', lastName: 'Parker', age: 27, visits: 25, status: 'In Relationship', progress: 90 },
        { firstName: 'Tina', lastName: 'Cook', age: 33, visits: 75, status: 'Single', progress: 65 },
        { firstName: 'Ursula', lastName: 'Wood', age: 36, visits: 20, status: 'Complicated', progress: 55 },
        { firstName: 'Victor', lastName: 'Cole', age: 39, visits: 30, status: 'Married', progress: 60 },
        { firstName: 'Will', lastName: 'Morgan', age: 28, visits: 45, status: 'In Relationship', progress: 80 },
        { firstName: 'Xena', lastName: 'Bell', age: 34, visits: 65, status: 'Single', progress: 75 },
        { firstName: 'Yasmine', lastName: 'Murphy', age: 29, visits: 15, status: 'Married', progress: 55 },
        { firstName: 'Zane', lastName: 'Bailey', age: 30, visits: 50, status: 'Complicated', progress: 40 },
        { firstName: 'Aiden', lastName: 'Hughes', age: 35, visits: 20, status: 'In Relationship', progress: 90 },
        { firstName: 'Becky', lastName: 'Cruz', age: 32, visits: 70, status: 'Single', progress: 80 },
        { firstName: 'Carl', lastName: 'Ward', age: 29, visits: 30, status: 'Married', progress: 65 },
        { firstName: 'Diana', lastName: 'Foster', age: 40, visits: 55, status: 'In Relationship', progress: 70 },
        { firstName: 'Ethan', lastName: 'Gordon', age: 28, visits: 15, status: 'Single', progress: 75 },
        { firstName: 'Felicia', lastName: 'Simmons', age: 31, visits: 45, status: 'Married', progress: 60 },
        { firstName: 'George', lastName: 'Ward', age: 26, visits: 25, status: 'Complicated', progress: 50 },
        { firstName: 'Holly', lastName: 'Perry', age: 37, visits: 60, status: 'In Relationship', progress: 85 },
        { firstName: 'Isaac', lastName: 'Cook', age: 32, visits: 10, status: 'Single', progress: 65 },
        { firstName: 'Jasmine', lastName: 'Griffin', age: 27, visits: 40, status: 'Married', progress: 75 },
        { firstName: 'Kyle', lastName: 'Price', age: 34, visits: 50, status: 'In Relationship', progress: 90 },
        { firstName: 'Laura', lastName: 'Kim', age: 29, visits: 25, status: 'Single', progress: 55 },
        { firstName: 'Matt', lastName: 'Reed', age: 40, visits: 35, status: 'Complicated', progress: 70 },
        { firstName: 'Nora', lastName: 'Hughes', age: 31, visits: 70, status: 'Married', progress: 60 },
        { firstName: 'Oscar', lastName: 'Cook', age: 27, visits: 80, status: 'In Relationship', progress: 85 },
        { firstName: 'Penny', lastName: 'Wright', age: 35, visits: 45, status: 'Single', progress: 90 },
        { firstName: 'Quinn', lastName: 'Bennett', age: 32, visits: 15, status: 'Married', progress: 70 },
        { firstName: 'Randy', lastName: 'Foster', age: 39, visits: 50, status: 'Complicated', progress: 55 },
        { firstName: 'Sally', lastName: 'Diaz', age: 30, visits: 20, status: 'In Relationship', progress: 65 },
        { firstName: 'Tommy', lastName: 'Carter', age: 28, visits: 60, status: 'Single', progress: 80 },
        { firstName: 'Ulysses', lastName: 'Griffin', age: 31, visits: 70, status: 'Married', progress: 75 },
        { firstName: 'Vera', lastName: 'Bennett', age: 26, visits: 30, status: 'In Relationship', progress: 90 },
        { firstName: 'Willow', lastName: 'Foster', age: 27, visits: 20, status: 'Single', progress: 50 },
        { firstName: 'Xander', lastName: 'Perry', age: 33, visits: 45, status: 'Married', progress: 60 },
        { firstName: 'Yosef', lastName: 'Cook', age: 28, visits: 55, status: 'In Relationship', progress: 85 },
        { firstName: 'Zelda', lastName: 'Ward', age: 30, visits: 15, status: 'Single', progress: 70 },
        { firstName: 'Avery', lastName: 'Davis', age: 40, visits: 25, status: 'Complicated', progress: 60 },
        { firstName: 'Blake', lastName: 'Hill', age: 31, visits: 80, status: 'Married', progress: 75 },
        { firstName: 'Chloe', lastName: 'Lopez', age: 29, visits: 35, status: 'In Relationship', progress: 90 },
        { firstName: 'Dylan', lastName: 'Cook', age: 26, visits: 10, status: 'Single', progress: 55 },
        { firstName: 'Emma', lastName: 'Robinson', age: 34, visits: 45, status: 'Married', progress: 65 },
        { firstName: 'Felix', lastName: 'Harris', age: 32, visits: 75, status: 'In Relationship', progress: 80 },
        { firstName: 'Giselle', lastName: 'Taylor', age: 27, visits: 20, status: 'Single', progress: 60 },
        { firstName: 'Henry', lastName: 'Walker', age: 35, visits: 50, status: 'Complicated', progress: 55 },
        { firstName: 'Irene', lastName: 'Garcia', age: 30, visits: 25, status: 'Married', progress: 70 },
        { firstName: 'James', lastName: 'Brown', age: 29, visits: 60, status: 'In Relationship', progress: 85 },
        { firstName: 'Kelly', lastName: 'Wilson', age: 31, visits: 15, status: 'Single', progress: 50 },
        { firstName: 'Luca', lastName: 'Moore', age: 34, visits: 70, status: 'Married', progress: 60 },
        { firstName: 'Maya', lastName: 'Young', age: 26, visits: 35, status: 'In Relationship', progress: 80 },
        { firstName: 'Nate', lastName: 'Martin', age: 28, visits: 40, status: 'Single', progress: 70 },
        { firstName: 'Olive', lastName: 'Carter', age: 31, visits: 60, status: 'Complicated', progress: 55 },
        { firstName: 'Paul', lastName: 'Rodriguez', age: 33, visits: 20, status: 'Married', progress: 65 },
        { firstName: 'Quinn', lastName: 'Wright', age: 39, visits: 50, status: 'In Relationship', progress: 90 },
        { firstName: 'Rita', lastName: 'Jones', age: 27, visits: 15, status: 'Single', progress: 80 },
        { firstName: 'Steve', lastName: 'Perry', age: 35, visits: 45, status: 'Married', progress: 60 },
        { firstName: 'Tina', lastName: 'Parker', age: 30, visits: 25, status: 'In Relationship', progress: 75 },
        { firstName: 'Ursula', lastName: 'Nelson', age: 27, visits: 60, status: 'Single', progress: 85 },
        { firstName: 'Victor', lastName: 'Perry', age: 31, visits: 20, status: 'Married', progress: 90 },
        { firstName: 'Willow', lastName: 'James', age: 29, visits: 70, status: 'Complicated', progress: 55 },
        { firstName: 'Xander', lastName: 'Bennett', age: 34, visits: 15, status: 'In Relationship', progress: 80 },
        { firstName: 'Yvonne', lastName: 'Simmons', age: 28, visits: 45, status: 'Single', progress: 70 },
        { firstName: 'Zane', lastName: 'Scott', age: 36, visits: 50, status: 'Married', progress: 65 },
        { firstName: 'Aiden', lastName: 'Cruz', age: 30, visits: 55, status: 'In Relationship', progress: 75 },
        { firstName: 'Brianna', lastName: 'Reed', age: 27, visits: 20, status: 'Single', progress: 60 },
        { firstName: 'Connor', lastName: 'Lewis', age: 33, visits: 45, status: 'Married', progress: 70 },
        { firstName: 'Diana', lastName: 'Wilson', age: 32, visits: 60, status: 'In Relationship', progress: 85 },
        { firstName: 'Ethan', lastName: 'Mitchell', age: 28, visits: 10, status: 'Single', progress: 55 },
        { firstName: 'Faith', lastName: 'Thomas', age: 30, visits: 70, status: 'Married', progress: 65 },
        { firstName: 'George', lastName: 'Harris', age: 34, visits: 50, status: 'In Relationship', progress: 80 },
        { firstName: 'Holly', lastName: 'Garcia', age: 27, visits: 25, status: 'Single', progress: 70 }
    ]
    

    const columnHelper = createColumnHelper()

    const columns = [
        columnHelper.accessor('firstName', {
            cell: info => info.getValue(),
            footer: info => info.column.id,
        }),
        columnHelper.accessor(row => row.lastName, {
            id: 'lastName',
            cell: info => <i>{info.getValue()}</i>,
            header: () => <span>Last Name</span>,
            footer: info => info.column.id,
        }),
        columnHelper.accessor('age', {
            header: () => 'Age',
            cell: info => info.renderValue(),
            footer: info => info.column.id,
        }),
        columnHelper.accessor('visits', {
            header: () => <span>Visits</span>,
            footer: info => info.column.id,
        }),
        columnHelper.accessor('status', {
            header: 'Status',
            footer: info => info.column.id,
        }),
        columnHelper.accessor('progress', {
            header: 'Profile Progress',
            footer: info => info.column.id,
        }),
        // Nueva columna para los botones
        columnHelper.display({
            id: 'actions',
            header: 'Actions',
            cell: info => (
                <div>
                    <button onClick={() => handleEdit(info.row.original)}>Edit</button>
                    <button onClick={() => handleDelete(info.row.original)}>Delete</button>
                </div>
            ),
        }),
    ]

    const handleEdit = row => {
        console.log('Edit clicked', row);
        // Lógica para editar
      };
    
      const handleDelete = row => {
        console.log('Delete clicked', row);
        // Lógica para eliminar
      };

    return (
        <>

            <Table columns={columns} defaultData={defaultData} pSize={10} pIndex={0} />

        </>
    )

}
