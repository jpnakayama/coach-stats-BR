import { FilledButtonStyle, OutlinedButtonStyle } from "./styles";

interface ButtonProps {
  content: string
}

export function OutlinedButton(props: ButtonProps) {
  return(
    <OutlinedButtonStyle>{props.content}</OutlinedButtonStyle>
  )
}

export function FilledButton(props: ButtonProps) {
  return(
    <FilledButtonStyle>{props.content}</FilledButtonStyle>
  )
}