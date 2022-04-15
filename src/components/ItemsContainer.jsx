import { v4 as uuidv4 } from 'uuid';

import { Folder } from "./Folder";
import { File } from "./File";

export const ItemsContainer = ({ data: { directories, files } }) => {
  return (
    <div className="container">
      {directories.map((item) => (
        <Folder key={uuidv4()} folder={item} />
      ))}
      {files.map((item) => (
        <File key={uuidv4()} file={item} />
      ))}
    </div>
  );
};
