const LIST_TYPE = {
   BACKLOG: "backlog",
   READY: "ready",
   IN_PROGRESS: "in Progress",
   FINISHED: "finished",
}

const LIST_TITLE = {
   [LIST_TYPE.BACKLOG]: "Backlog", /*у блока(листа) с типом 'backlog' заголовок (title) равен 'Backlog' */
   [LIST_TYPE.READY]: "Ready",
   [LIST_TYPE.IN_PROGRESS]: "In Progress",
   [LIST_TYPE.FINISHED]: "Finished",
}
export { LIST_TYPE, LIST_TITLE }