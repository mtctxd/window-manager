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
            <>
              <path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"/>
            </>
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
