
import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";
const data = [
    {
        name: "Assignment 1",
        Total_Mark: 60 ,
        mark: 60,
        
    },
    {
        name: "Assignment 2",
        Total_Mark: 60 ,
        mark: 54,
        
    },
    {
        name: "Assignment 3",
        Total_Mark: 60 ,
        mark: 50,
        
    },
    {
        name: "Assignment 4",
        Total_Mark: 60 ,
        mark: 60,
        
    },
    {
        name: "Assignment 5",
        Total_Mark: 60 ,
        mark: 41,
        
    },
    {
        name: "Assignment 6",
        Total_Mark: 60 ,
        mark: 48,
        
    },
    {
        name: "Assignment 7",
        Total_Mark: 60 ,
        mark: 30,
        
    },
    {
        name: "Assignment 8",
        Total_Mark: 60 ,
        mark: 60,
        
    },
    
];
const Statistics = () => {

    return (
        <>
            <div className='text-3xl font-bold text-center mt-16 p-10 '>
                <h3 >Statistics</h3>

            </div>

            <section className='my-container flex items-center justify-center'>
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart
                    
                    
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="Total_Mark" />
                    <Tooltip />
                    <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
                </ResponsiveContainer>
            </section>




        </>
    );
};

export default Statistics;