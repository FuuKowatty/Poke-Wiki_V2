import { Context } from 'context';
import {useContext} from 'react'

export function useAppContext() {
  return useContext(Context)
}
