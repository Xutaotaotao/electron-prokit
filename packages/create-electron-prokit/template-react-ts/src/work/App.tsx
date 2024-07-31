import {onMsgFormOtherRender} from 'electron-prokit'

onMsgFormOtherRender((e,arg) => {
  console.log(e,arg)
})

function App() {
  return <div>work</div>
}

export default App