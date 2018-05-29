const handleAction = (action, dispatch) => {
  if (typeof action === 'function') {
    dispatch(action())
  } else if (Array.isArray(action)) {
    action.forEach(a => handleAction(a, dispatch))
  } else {
    dispatch(action)
  }
}

export default handleAction
