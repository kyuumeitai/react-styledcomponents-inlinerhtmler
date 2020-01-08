import React, { useContext, useState } from 'react'
import ArticleContext from '../../contexts/context-articles'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import { StSiteItem, StSites, StEditMenu } from './style.css'

const SiteItem = ({ site, index }) => {
  const { sitename, siteid } = site
  const artCon = useContext(ArticleContext)

  return (
    <Draggable draggableId={siteid} index={index}>
      {provided => (
        <StSiteItem
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >

          <span className="title">{sitename}</span>
          <StEditMenu>
            <button onClick={() => artCon.triggerEditSite(site)}>Editar</button>
            <button onClick={() => artCon.handleRemoveSite(site)}>Borrar</button>
          </StEditMenu>

        </StSiteItem>
      )}
    </Draggable>
  )
}

const SiteList = ({ sites }) => {
  // eslint-disable-next-line no-unused-vars
  const [columnId, setColumnId] = useState('asdf') //da lo mismo, es una sola columna
  const artCon = useContext(ArticleContext)

  const onDragEnd = result => {
    const { destination, source, draggableId } = result
    if (!destination) {
      return
    }

    const newSites = Array.from(sites)
    const draggableObjIndex = newSites.findIndex(site => site.siteid === draggableId)

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    newSites.splice(source.index, 1)
    newSites.splice(destination.index, 0, sites[draggableObjIndex])
    artCon.handleOrderSites(newSites)

  }
  return (
    <DragDropContext onDragEnd={onDragEnd} >
      <h3>Listado de Sitios</h3>
      <Droppable droppableId={columnId}>
        {(provided) => (
          <StSites ref={provided.innerRef} {...provided.droppableProps}>
            {
              sites.map((site, index) => {
                return (
                  <SiteItem site={site} key={site.siteid} index={index} />
                )
              })
            }
            {provided.placeholder}
          </StSites>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default SiteList