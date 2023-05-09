import React from 'react'
import { GridComponent, ColumnDirective, ColumnsDirective, Page, Search, Inject, Toolbar } from '@syncfusion/ej2-react-grids'
import { employeesData, contextMenuItems, employeesGrid } from '../data/dummy';
import { Header } from '../components'
const Employee = () => {
    return (
        <div className="mt-12 md:mt-0 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Page" title="Employees" />
            <GridComponent
                dataSource={employeesData}
                allowSorting
                allowPaging
                toolbar={['Search']}
                width="auto"
            >
                <ColumnsDirective>
                    {employeesGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[ Page, Search, Toolbar]} />
            </GridComponent>
        </div>
    )
}

export default Employee