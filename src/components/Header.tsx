import React, { useState } from 'react'

const Header = () => {
  const tabOptions = [
    'My Profile',
    'My Planner',
    'My Printable Planner',
    'My Score',
    'Electives Search',
    'Submissions',
    'Help',
    'Log out'
  ]

  const [selectedTab, setSelectedTab] = useState(tabOptions[1])

  return (
    <div className="w-full">
      <p className="text-2xl font-bold my-3">BME - CEAB Planner</p>

      <div className="bg-blue-300 my-3">
        {tabOptions.map((tabOption) => (
          <button
            className={`text-white px-4 py-2 ${
              selectedTab === tabOption && 'bg-blue-600'
            }`}
            onClick={(e) =>
              setSelectedTab((e.target as HTMLButtonElement).value)
            }
            value={tabOption}
          >
            {tabOption}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Header
