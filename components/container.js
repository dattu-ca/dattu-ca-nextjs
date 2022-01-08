import { Container as MuiContainer } from "@mui/material"
export default function Container({ children }) {
  return <MuiContainer maxWidth={false}>{children}</MuiContainer>
}
