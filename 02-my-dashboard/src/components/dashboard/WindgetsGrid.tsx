'use client'

import React from 'react'
import { SimpleWidget } from './SimpleWidget'
import { useAppSelector } from '@/store'
import { IoCartOutline } from 'react-icons/io5'

export const WindgetsGrid = () => {

    const count = useAppSelector(state => state.counter.count)



    return (
        <div className="flex flex-wrap p-2">
            <SimpleWidget
                title={count.toString()}
                subtitle='Productos agregados'
                label='Contador'
                icon={<IoCartOutline
                    className="text-blue-500"
                    size={50} />}
                href='./counter' />
        </div>
    )
}
