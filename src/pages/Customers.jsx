import React from 'react'
import { GridComponent, ColumnDirective, ColumnsDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids'
import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../components'
const Customer = () => {
    return (
        <div className="mt-12 md:mt-0 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Page" title="Customers" />
            <GridComponent
                dataSource={customersData}
                allowSorting
                allowPaging
                toolbar={['Delete']}
                width="auto"
                editSettings={{
                    allowDeleting: true,
                    allowEditing: true
                }}
            >
                <ColumnsDirective>
                    {customersGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
            </GridComponent>
        </div>
    )
}

export default Customer