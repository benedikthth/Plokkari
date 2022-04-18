import {useRef, useEffect} from 'react';

function usePrevious(value) {
    ref.current = value; 
    return ref.current; //in the end, return the current ref value.
  }

  export default usePrevious;