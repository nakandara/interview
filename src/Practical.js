import React, { useState, useEffect } from 'react'
import axios from 'axios'


function Practical() {

    const [entries, setEntries] = useState([])

    useEffect(() => {

        getAlldetails()

    }, [])

    const getAlldetails = () => {
        axios.get("https://api.publicapis.org/entries").then((res) => {
            setEntries(res.data.entries)
        }).catch((err) => {
            alert(err)
        })
    }
    console.log(entries)
    return (
        <div>
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">api</th>
                    <th scope="col">description</th>
                    <th scope="col">http</th>
                    <th scope="col">entries</th>
                </tr>
            </thead>
            {entries.map((data, index) => {
                return (
                    <table class="table">

                        <tbody>
                            <tr>
                                <th scope="row">{index}</th>
                                <td>{data.API}</td>
                                <td>{data.Description}</td>
                                <td>{data.Auth}</td>
                                <td>{data.HTTPS}</td>
                            </tr>
                        </tbody>
                    </table>
                )
            })}
          

        </div>
    )
}

export default Practical