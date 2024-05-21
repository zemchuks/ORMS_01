import React from 'react'

const Contact = () => {
    return (
        <main className="">
             <div className="new-users">
        <h2>New Users</h2>
        <div className="user-list">
            <div className="user">
                <img src='/assets/images/logo1.png' />
                <h2>Jack</h2>
                <p>54 Min Ago</p>
            </div>
            <div className="user">
                <img src='/assets/images/logo1.png' />
                <h2>Amir</h2>
                <p>3 Hours Ago</p>
            </div>
            <div className="user">
                <img src='/assets/images/logo1.png' />
                <h2>Ember</h2>
                <p>6 Hours Ago</p>
            </div>
            <div className="user">
                <img src='/assets/images/logo1.png' />
                <h2>More</h2>
                <p>New User</p>
            </div>
        </div>
    </div>

        </main>
    )
}

export default Contact