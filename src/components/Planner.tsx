import React, { useState } from 'react'

import viteLogo from '../vite.svg'

interface Requirements {
  [key: string]: number
}

const requirements: Requirements = {
  'CSE A': 1,
  'CSE B': 1,
  'CSE C': 3,
  CSE: 5,
  TE: 6,
  'TE + CSE ': 11,
  MATH: 195,
  SCI: 195,
  'ENG SCI': 225,
  'ENG DES': 225,
  'MATH + SCI': 420,
  'ENG SCI + ENG DES': 900,
  'CSE Weight': 225
}

const Planner = () => {
  const [myScore, setMyScore] = useState<Requirements>({})

  return (
    <div className="w-full my-5">
      <p className="text-xl font-bold">My Planner - View, Add and Remove</p>

      <table className="text-center">
        <thead className="bg-blue-300 border-4 border-white">
          {/* not sure if this min width is working */}
          <td className="" />
          {Object.keys(requirements).map((requirement) => (
            <td className="px-5 border-4 border-white font-bold">
              {requirement}
            </td>
          ))}
        </thead>
        <tbody>
          <tr>
            <td className="text-right border border-white pl-5">Requirement</td>
            {Object.values(requirements).map((requirement) => (
              <td className="border border-white">{requirement}</td>
            ))}
          </tr>
          <tr>
            <td className="text-right border border-white">My Score</td>
            {Object.values(myScore).map((score) => (
              <td className="border border-white">{score}</td>
            ))}
          </tr>
          <tr>
            <td className="text-right border border-white">Pass/Fail</td>
            {Object.values(requirements).map((requirement) => (
              <td className="border border-white">
                <img src={viteLogo} alt="Vite Logo" className="w-6 mx-auto" />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Planner
