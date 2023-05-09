import React from 'react'
import { GridComponent, ColumnDirective, ColumnsDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids'
import {ordersData, contextMenuItems, ordersGrid} from '../data/dummy';
import {Header} from '../components'


const Orders = () => {
    return (
        <div className="mt-12 md:mt-0 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Page" title="Orders" />
            <GridComponent
                id='grid-component'
                dataSource={ordersData}
                allowSorting
                allowPaging
            >
                <ColumnsDirective>
                    {ordersGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
            </GridComponent>
        </div>
    )
}

export default Orders