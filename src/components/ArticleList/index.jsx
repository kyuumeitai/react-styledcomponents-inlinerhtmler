import React, { useContext, useState, useEffect } from 'react'
import ArticleContext from '../../contexts/context-articles'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import { StArticleItem, StArticles, StEditMenu } from './style.css'

const ArticleItem = ({article, index}) => {
  const {title, articleid} = article
  const artCon = useContext(ArticleContext)

  return (
    <Draggable draggableId={articleid} index={index}>
    {provided => (
        <StArticleItem
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >

            <span className="title">{title}</span>
            <StEditMenu>
              <button onClick={() => artCon.triggerEditArticle(article)}>Editar</button>
              <button onClick={() => artCon.handleRemoveArticle(article)}>Borrar</button>
            </StEditMenu>

        </StArticleItem>
    )}
    </Draggable>
  )
}

const ArticleList = ({articles}) => {
  // eslint-disable-next-line no-unused-vars
  const [columnId, setColumnId] = useState('asdf') //da lo mismo, es una sola columna
  const artCon = useContext(ArticleContext)

  useEffect(() => {
    console.log('weas', articles)
  }, [articles])

  const onDragEnd = result => {
    const { destination, source, draggableId } = result
    if (!destination) {
      return
    }

    const newArticles = Array.from(articles)
    const draggableObjIndex = newArticles.findIndex(article => article.articleid === draggableId)

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    newArticles.splice(source.index, 1)
    newArticles.splice(destination.index, 0, articles[draggableObjIndex])
    artCon.handleOrderArticles(newArticles)

  }
  return (
    <DragDropContext onDragEnd={onDragEnd} >
      <h3>Listado de Artículos</h3>
      <Droppable droppableId={columnId}>
      {(provided) => (
          <StArticles ref={provided.innerRef} {...provided.droppableProps}>
            {
              articles.map((article, index) => {
                return (
                  <ArticleItem article={article} key={article.articleid} index={index} />
                )
              })
            }
            {provided.placeholder}
          </StArticles>
      )}
      </Droppable>
    </DragDropContext>
  )
}

export default ArticleList