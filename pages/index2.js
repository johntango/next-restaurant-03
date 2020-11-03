import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home(){
    const restaurants = [
        {name:"WoodsHill"},
        {name:"Fiorella"},
        {name:"Karma"}
    ]
    const restaurantList =  restaurants.map((item,index) =>{
        return(
            <div>
                <Link key={index.toString()} as={"restaurants/"+item.name} href="restaurants/[restaurant]">
                    <a>{item.name}</a>
                </Link>
            </div>
        )
    })
    return (
        <div>
            <h1>Restaurant List</h1>
            
            {restaurantList}
        </div>
    )
}