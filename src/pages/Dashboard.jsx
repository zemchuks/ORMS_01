import React from 'react'

const Dashboard = () => {



  const orders = [
    {
        productName: 'JavaScript Tutorial',
        productNumber: '85743',
        paymentStatus: 'Due',
        status: 'Pending'
    },
    {
        productName: 'CSS Full Course',
        productNumber: '97245',
        paymentStatus: 'Refunded',
        status: 'Declined'
    },
    {
        productName: 'Flex-Box Tutorial',
        productNumber: '36452',
        paymentStatus: 'Paid',
        status: 'Active'
    },
]
  return (
    
    <main>
    <h1>Analytics</h1>
    <div className="analyse">
        <div className="sales">
            <div className="status">
                <div className="info">
                    <h3>Total Sales</h3>
                    <h1>$65,024</h1>
                </div>
                <div className="progresss">
                    <svg>
                        <circle cx="38" cy="38" r="36"></circle>
                    </svg>
                    <div className="percentage">
                        <p>+81%</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="visits">
            <div className="status">
                <div className="info">
                    <h3>Site Visit</h3>
                    <h1>24,981</h1>
                </div>
                <div className="progresss">
                    <svg>
                        <circle cx="38" cy="38" r="36"></circle>
                    </svg>
                    <div className="percentage">
                        <p>-48%</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="searches">
            <div className="status">
                <div className="info">
                    <h3>Searches</h3>
                    <h1>14,147</h1>
                </div>
                <div className="progresss">
                    <svg>
                        <circle cx="38" cy="38" r="36"></circle>
                    </svg>
                    <div className="percentage">
                        <p>+21%</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

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

    <div className="recent-orders">
        <h2>Recent Orders</h2>
        <table>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.productName}</td>
              <td>{order.productNumber}</td>
              <td>{order.paymentStatus}</td>
              <td className={
                order.status === 'Declined' ? 'danger' :
                order.status === 'Pending' ? 'warning' : 'primary'
              }>
                {order.status}
              </td>
              <td className="primary">Details</td>
            </tr>
          ))}
        </tbody>
        </table>
        <a href="#">Show All</a>
    </div>

</main>


  )
}

export default Dashboard 