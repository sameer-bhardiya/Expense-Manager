import React from 'react'
import {Chart as ChartJs, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'

import {Line} from 'react-chartjs-2'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'
import { dateFormat } from '../../utils/dateFormat'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Chart() {
    const {incomes, expenses,totalBalance} = useGlobalContext()

    const data = {
        labels: incomes.map((inc) =>{
            const {date} = inc
            return dateFormat(date)
        }),
        datasets: [
            {
                label: 'Income',
                data: [
                    ...incomes.map((income) => {
                        const {amount} = income
                        return amount
                    })
                ],
                backgroundColor: 'green',
                tension: .2
            },
            {
                label: 'Expenses',
                data: [
                    ...expenses.map((expense) => {
                        const {amount} = expense
                        return amount
                    })
                ],
                backgroundColor: 'red',
                tension: .2
            }
        ]
    }
   

    return (
        <ChartStyled >
            {/* <Line data={data} /> */}
            <iframe style={{background: '#F1F5F4',
            border: 'none',borderRadius: '2px',boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',width: '100%', height: '100%'}}  src="https://charts.mongodb.com/charts-storemanager-xkctr/embed/dashboards?id=542d5165-bf2d-4e02-9f46-df41649d4db3&theme=light&autoRefresh=true&maxDataAge=60&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"></iframe>
            {/* <iframe style={{background: '#FFFFFF', border: 'none', borderRadius: '2px',boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)', width:'640', height:'480'}} src="https://charts.mongodb.com/charts-storemanager-xkctr/embed/charts?id=65df1ac2-4a68-49a9-8377-ce9759b0c584&maxDataAge=3600&theme=light&autoRefresh=true"></iframe> */}

        </ChartStyled>
    )
}

// const Graph = styled.iframe`
// background: #F1F5F4;
// border: none;
// border-radius: 2px;
// box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);
// width: 100vw;
// height: 100vh;
// src: "https://charts.mongodb.com/charts-storemanager-xkctr/embed/dashboards?id=542d5165-bf2d-4e02-9f46-df41649d4db3&theme=light&autoRefresh=true&maxDataAge=60&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed";
// `

const ChartStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
    /* width:100% */
    /* width:75% */
`;

export default Chart