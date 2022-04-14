import React from 'react'
import { useDispatch } from 'react-redux';
import { truncateFilename } from '../features/truncateFilename';
import { getDirectory } from '../redux/asyncThunks/getDirectory';
import { addPathToHistory } from '../redux/slices/appSlice';

export const Folder = ({ folder }) => {
  const dispatch = useDispatch();
  const {name, id} = folder;

    const preparedName = truncateFilename(folder.name);

    const onFolderClick = () => {
      dispatch(getDirectory(`/${id}`));
      dispatch(addPathToHistory({name, id}))
    };

    return (
      <div 
        className="item"
        onClick={onFolderClick}
      >
        <svg
          className="item__icon"
          xmlns="http://www.w3.org/2000/svg"
          height="50px"
          viewBox="0 0 24 24"
          width="50px"
          fill="#ffffff"
        >
          <path d="M0 0h24v24H0V0z" fill="none"/><path d="M9.17 6l2 2H20v10H4V6h5.17M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
        </svg>
        <div className="item__text">{preparedName}</div>
      </div>
    )
  }
