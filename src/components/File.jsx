import React from 'react'
import { truncateFilename } from '../features/truncateFilename'

export const File = ({ file }) => {
    const name = truncateFilename(file.name);

    return (
      <div className="item">
        <svg
          className="item__icon"
          xmlns="http://www.w3.org/2000/svg"
          height="50px"
          viewBox="0 0 24 24"
          width="50px"
          fill="#ffffff"
        >
          {file.name.includes('.jpg') ? (
            <path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm5 9h14l-3.5-4.5-2.5 3.01L11.5 9zM22 4h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 12H6V4h5.17l1.41 1.41.59.59H22v10z" />
          ) : (
            <>
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
            </>
          )}
        </svg>
        <div className="item__text">{name}</div>
      </div>
    )
  }
