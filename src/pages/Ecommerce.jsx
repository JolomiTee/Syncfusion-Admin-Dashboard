import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import { Stacked, Pie, Button, SparkLine } from '../components'
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

const Ecommerce = () => {
    return (
        <div className='mt-12 md:mt-0'>
            <div className="flex flex-wrap justify-center">
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl w-full p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">

                    <div className="flex justify-between items-center">

                        <div>
                            <p className='font-bold text-gray-400'>Earnings</p>
                            <p className='text-2xl'>$106,445.43</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Button
                            color="white"
                            bgColor="blue"
                            text="Download"
                            borderRadius="10px"
                            size="md"
                        />
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-1 items-center">
                    {earningData.map((item) => (
                        <div key={item.title} className="bg-white min-w-[290px] dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-4 rounded-2xl">
                            <button type='button' className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl' style={{ color: item.iconColor, backgroundColor: item.iconBg }}>
                                {item.icon}
                            </button>
                            <p className="mt-3">
                                <span className="text-lg font-semibold">
                                    {item.amount}
                                </span>
                                <span className={`text-sm text-${item.pcColor} ml-2`}>
                                    {item.percentage}
                                </span>
                            </p>
                            <p className='text-sm text-gray-400'>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex gap-10 flex-wrap justify-center">
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-3 rounded-2xl md:w-780">
                    <div className="flex justify-between">
                        <p className='font-semibold text-xl'>Revenue Updates</p>
                        <div className="flex items-center gap-4">
                            <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                                <span><GoPrimitiveDot /></span>
                                <span className="">Expenses</span>
                            </p>
                            <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                                <span><GoPrimitiveDot /></span>
                                <span className="">Budget</span>
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 flex gap-10 flex-wrap justify-center">
                        <div>
                            <div className="border-r-1 border-color m-4 pr-10">
                                <p className='flex items-center'>
                                    <span className='text-3xl font-semibold'>$87,900</span><span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full bg-green-400 ml-3 text-white text-xs'>23%</span>
                                </p>
                                <p className="text-gray-500 mt-1">Expense</p>
                            </div>
                            <div className="border-r-1 border-color m-4 pr-10">
                                <p className='flex items-center'>
                                    <span className='text-3xl font-semibold'>$87,900</span>
                                </p>
                                <p className="text-gray-500 mt-1">Budget</p>
                            </div>

                            <div className="mt-5">
                                <SparkLine
                                    id="line-sparkline"
                                    height="80px"
                                    width="250px"
                                    color="blue"
                                    currentColor="blue"
                                    type="Line"
                                    data={SparklineAreaData}
                                />
                            </div>

                            <div className="mt-10">
                                <Button
                                    color="white"
                                    bgColor="blue"
                                    text="Download Report"
                                    borderRadius="10px"
                                />
                            </div>
                        </div>
                        <Stacked
                            width="320px"
                            height="320px"
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ecommerce