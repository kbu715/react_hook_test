import React from 'react';
import { useConfirm } from './useConfirm';

const ConfirmApp = () => {
  const deleteWorld = () => console.log('Deleting the world....');

  const abort = () => console.log('aborted');

  const confirmDelete = useConfirm('Are you sure?', deleteWorld, abort);

  return (
    <div>
      <button onClick={confirmDelete}>delete the world</button>
    </div>
  );
};

export default ConfirmApp;
