import * as React from 'react'

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'

import { Table } from './GenericTable';

export const Componente2 = () => {


    const defaultData = [
        {
            Name: 'jabon',
            Price: '1000',
            Brand: 'Irex',
        },
        {
            Name: 'arroz',
            Price: '500',
            Brand: 'Luciana',
        },
        {
            Name: 'pan',
            Price: '800',
            Brand: 'Bimbo',
        },
    ];

    const columnHelper = createColumnHelper()

    const columns = [

        columnHelper.accessor(row => row.Name, {
            id: 'Name',
            cell: info => <i>{info.getValue()}</i>,
            header: () => <span>Nombre</span>,
            footer: info => info.column.id,
        }),
        columnHelper.accessor(row => row.Price, {
            id: 'Price',
            cell: info => <i>{info.getValue()}</i>,
            header: () => <span>Precio</span>,
            footer: info => info.column.id,
        }),
        columnHelper.accessor(row => row.Brand, {
            id: 'Brand',
            cell: info => <i>{info.getValue()}</i>,
            header: () => <span>Marca</span>,
            footer: info => info.column.id,
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