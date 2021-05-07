import { Fragment } from 'react'
import classes from '../styles/styles.module.scss'
import DefaultHome from '../components/DefaultHome'
import { useDispatch, useSelector } from 'react-redux'
import {
  setShowModalAdd, setShowListTask, setShowModalTaskDone, setTask, setId,
  setShowModalEdit, setObjectEdit, setModalDelete
} from '../redux/home/home-action'
import ModalAddTask from '../components/ModalAddTask'
import ListTasks from '../components/ListTasks'
import ModalShowTasksDone from '../components/ModalShowTasksDone'

export default function Home() {

  const dispatch = useDispatch()
  const { modalAdd, showListTask, modalTaskDone, tasks, id, modalEdit, taskEdit, modalDelete } = useSelector(state => state.home)

  console.log(taskEdit)

  const handleCloseModalDefault = () => {
    dispatch(setShowModalAdd(false))
  }

  const handleShowModalDefault = () => {
    dispatch(setShowModalAdd(true))
  }

  const btnAddNewTask = (data) => {
    const newData = {
      id: id,
      done: false,
      ...data
    }
    dispatch(setTask([
      ...tasks,
      newData
    ]))
    dispatch(setId())
    dispatch(setShowModalAdd(false))
    dispatch(setShowListTask(true))
  }

  const handleCloseModalDoneTask = () => {
    dispatch(setShowModalTaskDone(false))
  }

  const handleShowModalDoneTask = (e) => {
    e?.stopPropagation();
    dispatch(setShowModalTaskDone(true))
  }

  const handleShowModalEdit = (e, item) => {
    e?.stopPropagation();
    if (item) {
      dispatch(setObjectEdit(item))
    }
    dispatch(setShowModalEdit(true))
  }

  const handleCloseModalEdit = () => {
    dispatch(setShowModalEdit(false))
  }

  const handleShowModalDelete = (item) => {
    dispatch(setObjectEdit(item))
    dispatch(setModalDelete(true))
  }
  const handleCloseModalDelete = () => {
    dispatch(setModalDelete(false))
  }

  const actionModalDelete = (type) => {
    handleCloseModalDelete()
    const index = taskEdit.id - 1
    if (type == "edit") {
      handleShowModalEdit()
    }
    else if (type == "done") {
      let object = tasks
      object[index].done = true
      dispatch(setTask(object))
    } else if (type == "delete") {
      let object = tasks
      delete object[index]
      dispatch(setTask(object))
    }
  }

  const submitEdit = (data) => {

    const index = taskEdit.id - 1
    let object = tasks
    object[index].title = data.title
    object[index].description = data.description
    object[index].gift = data.gift
    object[index].priority = data.priority
    dispatch(setTask(object))
    handleCloseModalEdit()
  }

  return (
    <Fragment>
      {
        showListTask ?
          <ListTasks modalEdit={modalEdit} tasks={tasks} showModalEdit={handleShowModalEdit}
            closeModalEdit={handleCloseModalEdit} handleShowModalDone={handleShowModalDoneTask} show={handleShowModalDefault}
            classes={classes} taskEdit={taskEdit} submitEdit={submitEdit} actionDelete={actionModalDelete}
            modalDelete={modalDelete} showDelete={handleShowModalDelete} closeDelete={handleCloseModalDelete} />
          :
          <DefaultHome classes={classes} show={handleShowModalDefault} />
      }


      <ModalAddTask classes={classes} modalAdd={modalAdd} btnAddNewTask={btnAddNewTask}
        handleCloseModalDefault={handleCloseModalDefault} />

      <ModalShowTasksDone tasks={tasks} showModal={modalTaskDone} classes={classes}
        handleClose={handleCloseModalDoneTask} />

    </Fragment >
  )
}
