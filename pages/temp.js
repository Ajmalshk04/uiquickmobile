import Format from '../Layout/Format'


//components
import DeviceEval from "../Components/deviceEval"
import Warranty from "../Components/warranty"
import DisplayBodyCondition from "../Components/displayBodyCondition"
import Issues from "../Components/issues"
import Accesorries from "../Components/accesorries"


export default function Temp() {
  return (
    <Format>
      <DeviceEval />
      <Warranty />
      <DisplayBodyCondition />
      <Issues />
      <Accesorries />
    </Format>
  )
}
