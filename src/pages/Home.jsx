import React from 'react'
import { Navbar } from '../components/Navbar'
import { Announcement } from '../components/Announcement'
import { Slider } from '../components/Slider'

export default function Homepage() {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
        </div>
    )
}
