import { Action } from "../shared/models/action.interface";
import { InputActionType } from "./models/inputAction";
import { InputState } from "./models/inputStateInterface";

const initialInputState: InputState = {
  text: '',
  hasBeenTouched: false,
}

const inputReducer = (state: InputState, action: Action<InputActionType>) => {
  
}