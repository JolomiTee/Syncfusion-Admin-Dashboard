import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { Navbar, Footer, Sidebar, ThemeSettings } from './components'
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Line, Financial, ColorPicker, ColorMapping, Editor } from './pages'

import './App.css'



function App() {
    const [activeMenu, setactiveMenu] = useState(true)

    return (
        <div className="">
            <BrowserRouter>
                <div className="flex relative dark:bg-main-dark-bg">
                    <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
                        <TooltipComponent content="Settngs" position="Top">
                            <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{ background: 'blue', borderRadius: '50%' }}>
                                <FiSettings />
                            </button>
                        </TooltipComponent>

                    </div>
                    {activeMenu ?
                        (
                            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white '>
                                <Sidebar />
                            </div>
                        ) : (
                            <div className='w-0 dark:bg-secondary-dark-bg'><Sidebar /></div>
                        )
                    }
                    <div className={
                        `dark:bg-main-bg bg:main-bg min-h-screen w-full ${activeMenu ?
                            'md:ml-72'
                            :
                            'flex-2'}`}
                    >
                        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg vanbar w-full">
                            <Navbar />
                        </div>
                    </div>

                    <div className="">
                        <Routes>
                            //* Dashboard Routes
                            <Route path="/" element={<Ecommerce />} />
                            <Route path="/ecommerce" element={<Ecommerce />} />

                            {/* Pages */}
                            <Route path="/orders" element={<Orders />} />
                            <Route path="/employees" element={<Employees />} />
                            <Route path="/customers" element={<Customers />} />

                            {/* Apps */}
                            <Route path="/kanban" element={<Kanban />} />
                            <Route path="/editor" element={<Editor />} />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route path="/color-picker" element={<ColorPicker />} />

                            {/* Charts */}
                            <Route path="/bar" element={<Bar />} />
                            <Route path="/pie" element={<Pie />} />
                            <Route path="/line" element={<Line />} />
                            <Route path="/Area" element={<Area />} />
                            <Route path="/pyramid" element={<Pyramid />} />
                            <Route path="/Stacked" element={<Stacked />} />
                            <Route path="/financial" element={<Financial />} />
                            <Route path="/color-mapping" element={<ColorMapping />} />

                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
