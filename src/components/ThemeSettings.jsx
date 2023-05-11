import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { BsCheck } from 'react-icons/bs'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { themeColors } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'



const ThemeSet = () => {
    const { setColor, setMode, currentMode, currentColor, setThemeSettings } = useStateContext()
    return (
        <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0'>
            <div className="float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] w-400 ">
                <div className='flex justify-between items-center p-4 ml-4'>
                    <p className='text-xl font-semibold'>Settings</p>
                    <button type='button' onClick={() => setThemeSettings(false)} style={{ color: 'rgb(153, 171, 180)', borderRadius: "50%" }} className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray' >
                        <MdOutlineCancel />
                    </button>
                </div>

                <div className="flex-col border-t-1 border-color p-4 ml-4">
                    <p className='text-lg font-semibold'>Theme Options</p>

                    <div className="mt-4">
                        <input type="radio" name="theme" id="light" value="Light" className='cursor-pointer' onChange={setMode} checked={currentMode === 'Light'} />
                        <label htmlFor="light" className="ml-2 text-md cursor-pointer">Light</label>
                    </div>
                    <div className="mt-4">
                        <input type="radio" name="theme" id="dark" value="Dark" className='cursor-pointer' onChange={setMode} checked={currentMode === 'Dark'} />
                        <label htmlFor="dark" className="ml-2 text-md cursor-pointer">Dark</label>
                    </div>
                </div>

                <div className="flex-col border-t-1 border-color p-4 ml-4">
                    <p className='text-lg font-semibold'>Theme Colors</p>
                    <div className="flex gap-3">
                        {themeColors.map((color, index) => (
                            <TooltipComponent key={index} content={color.name} position='TopCenter'>
                                <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
                                    <button
                                        type='button'
                                        className='h-10 w-10 rounded-full'
                                        style={{ backgroundColor: color.color }}
                                        onClick={() => setColor(color.color)}
                                    >
                                        <BsCheck className={`ml-2 text-2xl text-white ${color.color === currentColor ? 'block' : 'hidden'}`} />
                                    </button>
                                </div>
                            </TooltipComponent>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ThemeSet