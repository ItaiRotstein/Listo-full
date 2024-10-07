import { useState } from 'react';
import { useSelector } from 'react-redux';

import { AppModal } from '../app-modal';
import { TaskList } from './task-list';
import { AddTask } from './add-task';
import { GroupTitleEdit } from './group-title-edit';

export const BoardGroup = ({
  group,
  expandCardTitleGroupId,
  setExpandCardTitleId,
  onOpenModal,
  labelExpandClass,
  setLabelExpand,
  setTaskEditExpand,
  taskEditExpandId,
  titleLabelClass,
  setLabelTitleDelay,
}) => {
    const { filterBy, board } = useSelector((storeState) => storeState.boardModule);

  const [cmpType, setCmpType] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({});

  const onOpenGroupModal = (ev, type) => {
    setIsOpen(true);
    setCmpType(type);
    let elemRect = ev.currentTarget.getBoundingClientRect();
    let top = elemRect.top - window.pageYOffset;
    let left = elemRect.left - window.pageXOffset;
    const height = ev.currentTarget.offsetHeight;
    top += height;
    setModalPosition({ top, left });
  };
  return (
    <>
      <article className="board-group flex column">
        <div className="flex align-center space-between">
          <GroupTitleEdit
            groupTitle={group.title}
            group={group}
            boardId={board._id}
          />
          <div
            className="group-menu-btn flex justify-center align-center"
            onClick={(ev) => onOpenGroupModal(ev, 'delete-group-modal')}
          >
            ...
          </div>
        </div>
        <TaskList
          filterBy={filterBy}
          onOpenModal={onOpenModal}
          group={group}
          setLabelExpand={setLabelExpand}
          labelExpandClass={labelExpandClass}
          setTaskEditExpand={setTaskEditExpand}
          taskEditExpandId={taskEditExpandId}
          titleLabelClass={titleLabelClass}
          setLabelTitleDelay={setLabelTitleDelay}
        />
        <AddTask
          setExpandCardTitleId={setExpandCardTitleId}
          expandCardTitleGroupId={expandCardTitleGroupId}
          groupId={group.id}
          boardId={board._id}
        />
      </article>
      <AppModal
        position={modalPosition}
        group={group}
        board={board}
        cmpType={cmpType}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
};
