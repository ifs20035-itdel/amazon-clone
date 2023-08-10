import { ChangeEvent, useReducer } from "react";
import { Action } from "../shared/models/action.interface";
import { INPUT_ACTION_BLUR, INPUT_ACTION_CHANGE, INPUT_ACTION_CLEAR, InputActionType } from "./models/inputAction";
import { InputState } from "./models/inputStateInterface";

const initialInputState: InputState = {
  text: '',
  hasBeenTouched: false,
}

const inputReducer = (state: InputState, action: Action<InputActionType>) => {
  const  { type, value = ''} = action;

  switch (type) {
    case INPUT_ACTION_CHANGE:
      return { text: value, hasBeenTouched: state.hasBeenTouched}
    case INPUT_ACTION_BLUR:
      return { text: state.text, hasBeenTouched: true}
    case INPUT_ACTION_CLEAR:
      return { text: '', hasBeenTouched: false}
    default:
      return {...state};
  }
}

const useInput = (validatorFn?:) => {
  const [{ text, hasBeenTouched }, dispatch] = useReducer(
    inputReducer, 
    initialInputState,
  );

  const textChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: INPUT_ACTION_CHANGE, value: e.target.value })
  }

  const inputBlurHandler = () => {
    dispatch({ type: INPUT_ACTION_BLUR })
  }

  const clearHandler = () => {
    dispatch({ type: INPUT_ACTION_CLEAR })
  }

  return {
    text,

    textChangeHandler,
    inputBlurHandler,
    clearHandler,
  }
};

export default useInput;