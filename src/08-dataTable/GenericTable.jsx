
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
} from '@tanstack/react-table'

import { useState } from 'react'

export const Table = ({ columns, defaultData, pSize, pIndex }) => {

    const [data, _setData] = useState(() => [...defaultData])
    const [pageIndex, setPageIndex] = useState(pIndex); // Página actual
    const [pageSize, setPageSize] = useState(pSize); // Tamaño de la página (2 filas por página en este ejemplo)


    // Configurar la tabla con paginación
    const table = useReactTable({
        data,
        columns,
        pageCount: Math.ceil(data.length / pageSize), // Total de páginas (requerido)
        state: {
          pagination: { pageIndex, pageSize }, // Paginación controlada
        },
        manualPagination: false, // Si es `true`, manejas la paginación manualmente (para API externas)
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(), // Obtener el modelo de paginación
        onPaginationChange: setPageIndex, // Actualizar el estado cuando cambia la paginación
      });

      const handleNextPage = () => {
          setPageIndex(pageIndex + 1);
        
      };
    
      const handlePreviousPage = () => {
          setPageIndex(pageIndex - 1);
      };

      return (
        <div className="p-2">
          <table>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot>
              {table.getFooterGroups().map((footerGroup) => (
                <tr key={footerGroup.id}>
                  {footerGroup.headers.map((header) => (
                    <th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.footer,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </tfoot>
          </table>
    
          {/* Controles de paginación */}
          <div className="pagination">
            <button
              onClick={() => handlePreviousPage()}
              disabled={!table.getCanPreviousPage()} // Verifica si puede ir a la página anterior
            >
              Previous
            </button>
            <button
              onClick={() => handleNextPage()}
              disabled={!table.getCanNextPage()} // Verifica si puede ir a la página siguiente
            >
              Next
            </button>
            <span>
              Página{' '}
              <strong>
                {table.getState().pagination.pageIndex + 1} de{' '}
                {table.getPageCount()}
              </strong>
            </span>
            <select
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setPageIndex(0); // Reinicia a la primera página al cambiar el tamaño de página
              }}
            >
              {[2, 5, 10, 20].map((size) => (
                <option key={size} value={size}>
                  Mostrar {size}
                </option>
              ))}
            </select>
          </div>
          </div>
      );
    };