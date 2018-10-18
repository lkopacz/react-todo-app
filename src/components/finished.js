import Item from './Item';

export function finishedCheck(finished) {
  if(finished === null){
    return "incomplete"
  } else if (finished.checked === true) {
    return "complete"
  } else {
    return "incomplete"
  }
}
