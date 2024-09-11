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
        {
            firstName: 'tanner',
            lastName: 'linsley',
            age: 24,
            visits: 100,
            status: 'In Relationship',
            progress: 50,
        },
        {
            firstName: 'tandy',
            lastName: 'miller',
            age: 40,
            visits: 40,
            status: 'Single',
            progress: 80,
        },
        {
            firstName: 'joe',
            lastName: 'dirte',
            age: 45,
            visits: 20,
            status: 'Complicated',
            progress: 10,
        },
    ];

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

            <Table columns={columns} defaultData={defaultData} />

        </>
    )

}
