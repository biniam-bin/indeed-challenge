import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

const Home = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))
    })
    return (
        <div className="App flex justify-center h-screen">
            {/* {data.map((d) => {
        return (
          <p>{ d.name}</p>
        )
      })} */}

            <div class="relative overflow-x-auto shadow-lg sm:rounded-lg mt-20">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                User Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => {
                            return (
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium  text-blue-800 whitespace-nowrap cursor-pointer">
                                        <Link to={{pathname: `/posts/${user.id}`}}>{user.name}</Link>
                                    </th>
                                    <td class="px-6 py-4 text-purple-700">
                                        <Link to={{ pathname: `/posts/${user.id}` }}>{user.username}</Link>
                                    </td>
                                    <td class="px-6 py-4 text-blue-700">
                                        <Link to={{ pathname: `/posts/${user.id}` }}>{user.email}</Link>
                                    </td>

                                </tr>
                            )
                        })}


                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home